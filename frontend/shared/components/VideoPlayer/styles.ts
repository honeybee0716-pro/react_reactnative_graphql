import { Video } from 'expo-av'
import styledNative from 'styled-components/native'

import { webOnly, mobileOnly } from '../../utils/deviceSpecificCSS'

export const VideoPlayer = styledNative(Video)`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  ${webOnly(`
    width: 100%;
    height: 100%;
  `)}
`
