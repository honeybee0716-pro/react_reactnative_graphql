import bcrypt from 'bcrypt';
import {ApolloError, gql} from 'apollo-server';
import jwt from 'jsonwebtoken';
// import {sendEmail} from '../../../utils/sendgrid';
import isEmail from 'isemail';
import {nodemailer} from '../../../utils/nodemailer';
import {stripe} from '../../../utils/stripe';
import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';

export const createCustomerWithBusinessSchema = gql`
  scalar JSON

  type createCustomerWithBusinessResponse {
    message: String!
    status: String!
  }

  input createCustomerWithBusinessInput {
    firstName: String!
    lastName: String!
    companyName: String!
    email: String!
  }

  type Mutation {
    createCustomerWithBusiness(input: createCustomerWithBusinessInput): createCustomerWithBusinessResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createCustomerWithBusiness = async (parent: null, args: any, context: any, info: any) => {

  const {id: userID} = context.user;

  const formattedEmail = args.input.email.toLowerCase().trim();
  const cname = args.input.companyName.trim();

  const validEmail = isEmail.validate(formattedEmail);

  if(cname==="")
  {
    throw new ApolloError('kindly provide a company name');
  }

  if (!validEmail) {
    throw new ApolloError('That does not appear to be a valid email address.');
  }

  const foundEmail = await prismaContext.prisma.customer.findUnique({
    select: {
      id: true,
    },
    where: {
      customerIdentifier:{
      email: formattedEmail,
      businessId:userID
      },
    },
  });

  if (foundEmail) {
    return {
      message:
        'An account with this email already exists in this business. Please use another email.',
      status: 'failed',
    };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('abcdefg', salt);

  const verifyEmailCode = generateRandomNumber();

  
  // create stripe customer
  const stripeCustomer = await stripe.customers.create({
    email: formattedEmail,
    name: `${args.input.firstName} ${args.input.lastName}`,
    balance: 0,
    metadata: {
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      phoneNumber: args.input.phoneNumber,
      companyName: args.input.companyName,
      accountType:"customer",
      businessId:userID,
    },
  });

  
  // need to create stripeCustomer before db user because db user requires field stripeCustomerID
  const createdUser = await prismaContext.prisma.customer.create({
    data: {
      ...args.input,
      password: hashedPassword,
      businessId:userID,
      verifyEmailCode,
      verifyEmailCodeTimestamp: new Date(),
      stripeCustomerID: stripeCustomer.id,
      createdIPAddress: context.ipAddress,
    },
  });

 
  // update stripeCustomer with userID
  await stripe.customers.update(stripeCustomer.id, {
    metadata: {userID: createdUser.id},
  });

  // await sendEmail({
  //   to: args.input.email,
  //   subject: 'Please verify your email.',
  //   text: `Please use this code to verify your account: ${verifyEmailCode}`,
  // html: `
  //   <p>
  //     You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
  //   </p>
  //   <p>
  //     Please use this code to verify your account: ${verifyEmailCode}
  //   </p>
  // `,
  // });

  if(process.env.NODE_ENV==="production")
  {
  await nodemailer.sendMail({
    from: '"SaaS Template Alerts" <alerts@saastemplates.io>', // sender address
    to: formattedEmail, // list of receivers
    subject: 'Please verify your email.', // Subject line
    text: `Please use this code to verify your account: ${verifyEmailCode}`, // plain text body
    html: `
      <p>
        You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
      </p>
      <p>
        Please use this code to verify your account: ${verifyEmailCode}
      </p>
    `,
  });
}

  /*const token = jwt.sign({id: createdUser.id}, <string>process.env.JWT_SECRET, {
    expiresIn: '1d',
  });*/

  //token

  return {
    //jwt: token,
    message: 'Customer created successfully',
    status: 'success',
  };
};

export default createCustomerWithBusiness;
