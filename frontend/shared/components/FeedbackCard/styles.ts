import * as styled from '../../styles/convertedComponents'
import { webOnly } from '../../utils/crossPlatformMediaQueries'

export const Text = styled.View``

export const Header = styled.View`
  font-size: 50px;
  text-align: center;
  font-weight: 500;
  /* @media (max-width: 1300px) {
    font-size: 2em;
  } */
`

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
`

export const RowItem = styled.View`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  margin-bottom: 20px;
  padding: 20px 15px 20px 15px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #dbdbdb;

  /* justify-content: flex-start;
  align-items: center; */

  ${webOnly(`
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  `)}
`

export const Description = styled.Text`
  text-align: center;
  margin-top: 50px;
`

export const BrandRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  overflow: hidden;
`

export const Brand = styled.Image`
  width: 100px;
  margin: 20px;
  ${webOnly(`
    object-fit: contain;
  `)}
`

export const Feedback = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* @media (max-width: 1300px) {
    width: 90vw;
    margin-top: 25px;
  } */
  ${webOnly(`
    object-fit: contain;
  `)}
`

export const Image = styled.View`
  width: 100px;
  margin: 20px;
  ${webOnly(`
    object-fit: contain;
  `)}
`

export const Name = styled.View`
  color: black;
  font-size: 32px;
  margin-bottom: 20px;
  ${webOnly(`
    cursor: pointer;
  `)}
`

export const AuthorImage = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  ${webOnly(`
    object-fit: cover;
    cursor: pointer;
  `)}
`

export const AuthorName = styled.Text`
  color: black;
  font-size: 25px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin: 0 10px 0 10px;
  ${webOnly(`
    text-overflow: ellipsis;
    cursor: pointer;
  `)}
`

export const Total = styled.View`
  color: black;
  font-size: 15px;
  margin: 5px 0 5px 0;
  ${webOnly(`
    cursor: pointer;
  `)}
`

// export const Video = styled.iframe`
//   border: none;
//   border-radius: 10px;
// `

export const Timestamp = styled.Text`
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #797979;
`

export const Status = styled.Text`
  background-color: grey;
  padding: 5px 20px 5px 20px;
  background: #e9e9e9;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`

export const ActionsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Action = styled.View`
  font-style: normal;
  font-weight: normal;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  margin-right: 10px;
`

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  ${webOnly(`
    object-fit: contain;
  `)}
`

export const BottomRow = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CircleProgressContainer = styled.View`
  width: 35px;
  padding: 5px 0 5px 0;
`

export const VR = styled.View`
  width: 2px;
  background-color: #b3b3b3;
  flex: 1;
  margin-top: 10px;
`

export const HideOnSmall = styled.Text`
  /* @media (max-width: 530px) {
    display: none;
  } */
`

export const ShowOnSmall = styled.Text`
  /* display: none;
  @media (max-width: 530px) {
    display: block;
  } */
`
