import * as React from 'react'
// import { View, Button } from 'react-native'

import * as Styled from './styles'

export const VideoPlayer = () => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState<any>({})

  return (
    <>
      <Styled.VideoPlayer
        ref={video}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }}
      />
      {/* <View>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
    </>
  )
}
