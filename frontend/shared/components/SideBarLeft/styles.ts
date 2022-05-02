import styled from 'styled-components/native'

export const OuterContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  /* @media (max-width: 1300px) {
    display: none;
  } */
`

export const InnerContainer = styled.View`
  /* height: fit-content; */
  margin-right: 50px;
  flex: 1;
  border-radius: 10px;
  min-height: 100px;
  overflow: hidden;
  margin-right: 50px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

export const Item = styled.View`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #116fff;
    color: white;
  }
`

export const Icon = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 5px;
`
