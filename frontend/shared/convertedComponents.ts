import { Platform } from 'react-native'
import styledWeb from 'styled-components'
import styledNative from 'styled-components/native'

// even though react native compliles to react web, we still need to manually specify
// because unfortunately, styled-components/native does not support media queries.
// so if we want media queries (we do), we need to manually specify the proper components for each platform.
// Yes, styled-components can change style on width via dimensions, but they only take effect on refresh, not on resize.

export const View: any =
  Platform.OS === 'web' ? styledWeb.div : styledNative.View

export const Text: any =
  Platform.OS === 'web' ? styledWeb.div : styledNative.Text

export const TouchableOpacity: any =
  Platform.OS === 'web' ? styledWeb.div : styledNative.TouchableOpacity

// TODO: switch this to next/Image
export const Image: any =
  Platform.OS === 'web' ? styledWeb.img : styledNative.Image

export const TextInput: any =
  Platform.OS === 'web' ? styledWeb.input : styledNative.TextInput

export const ScrollView: any =
  Platform.OS === 'web' ? styledWeb.div : styledNative.ScrollView
