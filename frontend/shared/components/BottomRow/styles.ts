import styled from 'styled-components/native'

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export const MainColumn = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`

export const MainRow = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100vw;
  justify-content: space-between;
  /* @media (max-width: 1300px) { */
  /* justify-content: center; */
  /* display: none; */
  /* } */
`

export const Text = styled.View`
  color: black;
  padding-bottom: 20px;
  text-align: center;
  font-size: 32px;
`

interface BottomRowOuterContainerProps {
  backgroundColor: string
}

export const BottomRowOuterContainer = styled.View<BottomRowOuterContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  margin-top: 20px;
`

export const BottomRowInnerContainer = styled.View`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 45vw; */
  /* @media (max-width: 1300px) {
    width: 100%;
  } */
`

interface ButtonProps {
  backgroundColor: string
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  outline-width: 0;
  border: none;
  transition: all 0.1s ease-in-out;
  font-size: 25px;
  font-weight: 15px;
  padding: 10px 0 10px 0;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: white;

  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  width: 22vw;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`

export const Column = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`
