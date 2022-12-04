import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const addTiersSchema = gql`
  scalar JSON
  type addTiersResponse {
    message: String!
    status: String!
  }
  input addTiersInput {
    start: Int!
    end: Int!
    name: String!
    color: String!
  }
  type Mutation {
    addTiers(input: addTiersInput): addTiersResponse!
  }
`;

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
  
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (arr[j].rangeEnd < pivot.rangeEnd) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
  
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addTiers = async (
  parent: null,
  args: any,
  context: any,
  info: any,
) => {
  const {id: userID} = context.user;

  function isIntersect(arr, n)
{
    arr.sort(function(i1, i2){
      return i1.rangeStart - i2.rangeStart;
  });

  for(let i = 1; i < n; i++)
      if (arr[i - 1].rangeEnd > arr[i].rangeStart)
          return true;

  return false;
}

  if(args.input.start<0 || args.input.end < 0)
  {
    return {
      message: 'Tiers range cannot be negative atleast 0-?',
      status: 'failed',
    };
  }
  else if(args.input.start===args.input.end)
  {
    return {
        message: 'Tiers start and end range cannot be same',
        status: 'failed',
      };
  }else if(args.input.start>args.input.end)
  {
    return {
        message: 'Tiers start range cannot be greator than end range',
        status: 'failed',
      };
  }

  const thecolor = args.input.color.trim()
  var RegExp = /^#[0-9A-F]{6}$/i;
   if(!RegExp.test(thecolor))
   {
    return {
      message: 'please enter a valid hex representation',
      status: 'failed',
    };
   }

  const alreadyTier = await prismaContext.prisma.tiers.findMany({
    select: {
        id: true,
        rangeStart:true,
        rangeEnd:true
      },
      where: {
        businessId: userID,
      },
  });

  
    const incommingObj = {rangeStart:args.input.start,rangeEnd:args.input.end,id:""}
    quickSort(alreadyTier,0,alreadyTier.length-1)
    if(alreadyTier.length===0 && incommingObj.rangeStart>0)
    {
      return {
        message: 'please start from 0-?',
        status: 'failed',
      };
    }else if(alreadyTier.length>0)
    {
      if(incommingObj.rangeStart!==alreadyTier[alreadyTier.length-1].rangeEnd+1)
      {
        return {
          message: `please start from ${alreadyTier[alreadyTier.length-1].rangeEnd+1}-?`,
          status: 'failed',
        };
      }
    }

  // need to create stripeCustomer before db user because db user requires field stripeCustomerID
  const addedTiers = await prismaContext.prisma.tiers.create({
    data: {
      rangeStart: args.input.start,
      rangeEnd:args.input.end,
      name:args.input.name,
      color:args.input.color,
      businessId:userID
    },
  });

  return {
    message: 'Tiers created successfully',
    status: 'success',
  };
};

export default addTiers;