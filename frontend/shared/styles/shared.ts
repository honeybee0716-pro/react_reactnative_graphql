import styled from 'styled-components/native'

export const In = styled.View`
  color: black;
  font-size: 15px;
  margin: 0 10px 0 10px;
`

export const FeedbackTitle = styled.Text`
  color: black;
  margin-top: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`

export const VoteContainer = styled.View`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const Vote = styled.Image`
  height: 15px;
  width: 15px;
  cursor: pointer;
  opacity: 0.85;
  &:hover {
    opacity: 0.45;
  }
`

export const FeedbackDescription = styled.Text`
  margin-top: 8px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`
