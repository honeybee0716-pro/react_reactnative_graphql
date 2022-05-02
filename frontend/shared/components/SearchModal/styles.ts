import styled from 'styled-components/native'

export const Container = styled.View`
  /* border: 1px solid #999; */
  border-radius: 10px;
  z-index: 1;
  position: absolute;
  top: 70px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 3px 20px 2px rgba(0, 0, 0, 0.25);
  /* width: 45vw; */
  /* @media (max-width: 1300px) {
    margin-left: 0px;
    flex: 1;
    width: 100%;
    /* width: 80vw; */
  } */
`

export const Text = styled.View`
  color: black;
  cursor: pointer;
  padding: 10px;
  overflow: hidden;
  &:hover {
    background-color: #999;
    color: white;
  }
`
