import styledNative from 'styled-components/native'

import { theme } from '../shared/styles/theme'

export const MainContainer = styledNative.View`
    flex: 1;
    background-color: ${theme.colors.dark.background};
`
