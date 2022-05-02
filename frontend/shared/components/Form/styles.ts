import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormOuterContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex: 1;
  padding-bottom: 100px;
`;

export const FormInnerContainer = styled.View`
  display: flex;
  flex-direction: column;

  width: 30vw;
  /* @media (max-width: 1300px) {
    width: 90vw;
  } */
`;

export const Header = styled.View`
  font-size: 50px;
  text-align: center;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 35px;
  /* @media (max-width: 1300px) {
    font-size: 2em;
  } */
`;

export const InputContainer = styled.View`
  margin: 10px 0 30px 0;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding-left: 20px;
  border-radius: 10px;
  border: none;
  outline-width: 0;
  /* ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
  /* color: #b3b3b3; */
  /* opacity: 1; Firefox */
  /* } */
`;

export const InputLabel = styled.Text`
  font-size: 20px;
  font-weight: 15px;
`;

export const Submit = styled.TouchableOpacity`
  font-size: 25px;
  font-weight: 15px;
  padding: 10px 0 10px 0;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${(props: any) => props.color};
  color: white;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const Google = styled.TouchableOpacity`
  font-size: 25px;
  font-weight: 15px;
  padding: 10px 0 10px 0;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${(props: any) => props.color};
  color: black;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const Switch = styled.View`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfilePicture = styled.Image`
  height: 150px;
  width: 150px;
  /* border-radius: 50px; */
  border-radius: 150px;
  object-fit: cover;
  align-self: center;
  margin: 20px 0 20px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export const ForgotPassword = styled.View`
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const GoogleIcon = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 15px;
  object-fit: contain;
`;
