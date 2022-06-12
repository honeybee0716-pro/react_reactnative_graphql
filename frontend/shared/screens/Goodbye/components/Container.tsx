import React from 'react'
import { Box, Hidden, ScrollView } from 'native-base'

type ContainerProps = {
  children: React.ReactNode
  safeAreaBottom?: boolean
}
export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <>
      <Hidden from="md">
        <Box
          flex={1}
          safeAreaBottom
          py={{ md: '8' }}
          _light={{
            bg: 'primary.50'
          }}
          _dark={{
            bg: 'customGray'
          }}
          {...rest}
        >
          <Box flex={1} maxWidth="94%" width="1016px" mx="auto">
            {children}
          </Box>
        </Box>
      </Hidden>

      <Hidden from="base" till="md">
        <ScrollView
          flex={1}
          safeAreaBottom
          py={{ md: '8' }}
          _light={{
            bg: 'primary.50'
          }}
          _dark={{
            bg: 'customGray'
          }}
          {...rest}
        >
          <Box flex={1} maxWidth="94%" width="1016px" mx="auto">
            {children}
          </Box>
        </ScrollView>
      </Hidden>
    </>
  )
}
