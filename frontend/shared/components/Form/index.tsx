// import Link from 'next/link';
// import faker from 'faker';

// import BottomRow from '../BottomRow';
// import Footer from '../Footer';
// import Navbar from '../Navbar';
// import {colors} from '../../assets/theme';
// import formFields from '../../data/formFields';

// import * as Styled from './styles';
// import {icons} from '../../assets/icons';

// interface Props {
//   type: string;
// }

// export default function Form({type}: Props) {
//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     // eslint-disable-next-line no-alert
//     alert('Submit has not been configured yet.');
//   };

//   return (
//     <Styled.Container>
//       <Navbar />
//       <Styled.FormOuterContainer>
//         <Styled.FormInnerContainer onSubmit={(e) => onSubmit(e)}>
//           <Styled.Header>{formFields[type].header}</Styled.Header>
//           {type === 'account' && (
//             <Styled.ProfilePicture src={faker.image.people()} />
//           )}
//           {formFields[type].inputs.map((field: any) => (
//             <>
//               <Styled.InputContainer>
//                 <Styled.Input
//                   type={field.type}
//                   placeholder={field.placeholder}
//                 />
//               </Styled.InputContainer>
//             </>
//           ))}
//           <Styled.Submit color={formFields[type].submit.color} type="submit">
//             {formFields[type].submit.label}
//           </Styled.Submit>
//           {(type === 'login' || type === 'join') && (
//             <Styled.Google color="#E5E8EC" type="submit">
//               <Styled.GoogleIcon src={icons.web.googleIcon} />
//               {type === 'login' ? 'Login with Google' : 'Join using Google'}
//             </Styled.Google>
//           )}
//           {formFields[type].routes.map((route: any) => (
//             <Link href={route.path}>
//               <Styled.Switch>{route.label}</Styled.Switch>
//             </Link>
//           ))}
//           {formFields[type] === 'account' && (
//             <Link href="/logout">
//               <Styled.Submit color={colors.CCB0041}>Logout</Styled.Submit>
//             </Link>
//           )}
//         </Styled.FormInnerContainer>
//       </Styled.FormOuterContainer>
//       {type !== 'add' && <BottomRow />}
//       <Footer />
//     </Styled.Container>
//   );
// }
