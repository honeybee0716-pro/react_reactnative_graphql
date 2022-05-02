import CenterGutter from '../CenterGutter'
import { VideoPlayer } from '../VideoPlayer'
import { FeedbackCard } from '../FeedbackCard'

import * as Styled from './styles'

const Jumbotron = () => {
  return (
    <Styled.Container>
      <Styled.Header>Never build the wrong features again</Styled.Header>
      <Styled.SubHeader>
        Stop guessing what your customers want. We made it easy for them to tell
        you. Now all you need to do is listen and meet their needs.
      </Styled.SubHeader>
    </Styled.Container>
  )
}

const UsedBy = () => {
  return (
    <Styled.Container>
      <Styled.Header>Used by the most innovative companies</Styled.Header>
      <Styled.LogoContainer>
        <Styled.Logo
          src={require('../../assets/images/google.png')}
          source={require('../../assets/images/google.png')}
        />
        <Styled.Logo
          src={require('../../assets/images/microsoft.png')}
          source={require('../../assets/images/microsoft.png')}
        />
        <Styled.Logo
          src={require('../../assets/images/youtube.png')}
          source={require('../../assets/images/youtube.png')}
        />
        <Styled.Logo
          src={require('../../assets/images/netflix.png')}
          source={require('../../assets/images/netflix.png')}
        />
      </Styled.LogoContainer>
    </Styled.Container>
  )
}

const HowItWorks = () => {
  return (
    <Styled.Container>
      <Styled.Header>How it works</Styled.Header>
      <VideoPlayer />
    </Styled.Container>
  )
}

const CreateAPageCTA = () => {
  return (
    <Styled.Container>
      <Styled.Header>Create a page for your company</Styled.Header>
    </Styled.Container>
  )
}

export const Feed = () => {
  return (
    <CenterGutter>
      <Jumbotron />
      {/* maybe allow customers to click a small X to dismiss these cards and always just show the feed */}
      <HowItWorks />
      <UsedBy />
      <Styled.Header align="left" marginTop="50px" marginBottom="20px">
        See examples
      </Styled.Header>
      <FeedbackCard postData={{ companyName: 'apple' }} />
      <CreateAPageCTA />
    </CenterGutter>
  )
}
