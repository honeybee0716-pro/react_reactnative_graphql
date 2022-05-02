import styled from 'styled-components/native'

export const OuterContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* @media (max-width: 1300px) {
    display: none;
  } */
`

export const InnerContainer = styled.View`
  /* height: fit-content; */
  min-height: 100px;
  margin-left: 50px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-left: 50px;
  flex: 1;
`

export const Item = styled.View`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: #116fff;
    color: white;
  }
  cursor: pointer;
`

export const HeaderItem = styled.View`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
