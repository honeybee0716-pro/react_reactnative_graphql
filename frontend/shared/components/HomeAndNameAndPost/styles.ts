import styled from 'styled-components/native'

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export const MainColumn = styled.View`
  display: flex;
  flex-direction: column;
  /* height: fit-content; */
  position: relative;
`

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: fit-content; */
  position: relative;
`

export const MainRow = styled.View`
  display: flex;
  flex-direction: row;
  /* height: fit-content; */
  position: relative;
  width: 100%;
  /* justify-content: space-between; */
  /* @media (max-width: 1300px) {
    /* justify-content: center; */
  } */
`

export const Text = styled.View`
  color: black;
  padding-bottom: 20px;
`

export const BottomRow = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  margin-top: 20px;
`

export const JoinNow = styled.TouchableOpacity`
  height: 50px;
  background-color: #116fff;
  outline-width: 0;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  box-shadow: 0px 3px 20px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
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
