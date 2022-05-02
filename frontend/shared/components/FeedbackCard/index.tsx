/* eslint-disable react-native/no-inline-styles */
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import * as SharedStyles from '../../styles/shared'
// import { icons } from '../../assets/icons'

import * as Styled from './styles'

interface Props {
  postData: {
    companyName: string
  }
}

export const FeedbackCard = ({ postData: { companyName } }: Props) => {
  const router = useRouter()

  return (
    <Styled.RowItem>
      <SharedStyles.VoteContainer
        style={router?.pathname === '/' ? { height: '100%' } : {}}
      >
        {/* <SharedStyles.Vote src={icons.web.upArrow} /> */}
        <Styled.CircleProgressContainer>
          {/* <CircularProgressbar
              value={90}
              text="3.5k"
              strokeWidth={10}
              styles={buildStyles({
                strokeLinecap: 'butt',
                textSize: '25px',
                pathColor: '#26A74A',
                textColor: 'black',
                trailColor: 'red'
              })}
            /> */}
        </Styled.CircleProgressContainer>
        {/* <SharedStyles.Vote src={icons.web.downArrow} /> */}
        {/* {router.pathname !== '/' && <Styled.VR />} */}
      </SharedStyles.VoteContainer>
      <Styled.Column>
        <Styled.Row style={{ display: 'flex', alignItems: 'center' }}>
          <Styled.AuthorImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Styled.AuthorName>Apple</Styled.AuthorName>
          <Styled.HideOnSmall>
            <Styled.Timestamp>
              Posted by Joey Fenny 5 hours ago
            </Styled.Timestamp>
          </Styled.HideOnSmall>
        </Styled.Row>
        <SharedStyles.FeedbackTitle>
          Allow users to jailbreak their devices
        </SharedStyles.FeedbackTitle>
        <SharedStyles.FeedbackDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
          consequat, non mattis eu proin. Urna semper neque sed elit pharetra et
          vel sed. Id habitant felis, sed etiam leo. At lacinia donec lectus
          lectus quis congue scelerisque elementum, hendrerit. Rhoncus quis leo
          eu mi. Dui purus sit sollicitudin donec gravida. Venenatis mi orci
          posuere non tristique. Quam in ultricies aliquet non, augue neque,
          elit. Purus vitae sapien etiam vel egestas tellus nibh sed.
        </SharedStyles.FeedbackDescription>
        <Styled.BottomRow>
          <Styled.ActionsRow>
            <Styled.Action>
              {/* <Styled.Icon src={icons.web.commentFilled} /> */}
              <Styled.ShowOnSmall>3</Styled.ShowOnSmall>
              <Styled.HideOnSmall>3 comments</Styled.HideOnSmall>
            </Styled.Action>
            {/* <Styled.HideOnSmall>
                <Styled.Action>
                  <Styled.Icon src={icons.web.share} />
                  Share
                </Styled.Action>
              </Styled.HideOnSmall> */}
            {/* <Styled.HideOnSmall>
                <Styled.Action>
                  <Styled.Icon src={icons.web.save} />
                  Save
                </Styled.Action>
              </Styled.HideOnSmall> */}
            {/* <Styled.Icon src={icons.web.threeDots} /> */}
          </Styled.ActionsRow>
          <Styled.Status>Unanswered</Styled.Status>
        </Styled.BottomRow>
      </Styled.Column>
    </Styled.RowItem>
  )
}
