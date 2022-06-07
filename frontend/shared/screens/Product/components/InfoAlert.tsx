import React from 'react'
import { Platform } from 'react-native'
import {
  Alert,
  Collapse,
  Button,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
  Link,
  Pressable,
  Center,
  NativeBaseProvider
} from 'native-base'

export default function InfoAlert() {
  const [show, setShow] = React.useState(true)
  const getLink = () => {
    if (Platform.OS == 'web') {
      return 'https://startup.nativebase.io/?utm_source=Free_version_Popup&utm_medium=Web_App&utm_campaign=Free_Version_App'
    } else {
      return 'https://startup.nativebase.io/?utm_source=Free_version_Popup&utm_medium=Mobile_App&utm_campaign=Free_Version_App'
    }
  }

  return (
    <Box width="100%" alignItems="center">
      <Box position="absolute" zIndex={1} bottom={0} width="100%" maxW="700px">
        <Collapse isOpen={show}>
          <Link href={getLink()} isExternal>
            <Alert
              w="100%"
              bg="primary.200"
              opacity="0.9"
              pb={{ base: 6, md: 3 }}
            >
              <VStack space={1} flexShrink={1} w="100%">
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <Alert.Icon />
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      _dark={{
                        color: 'coolGray.800'
                      }}
                    >
                      Looking for more screens?
                    </Text>
                  </HStack>
                  <IconButton
                    variant="unstyled"
                    zIndex={2}
                    icon={<CloseIcon size="3" color="coolGray.600" />}
                    onPress={(e) => {
                      e.preventDefault()
                      setShow(false)
                    }}
                  />
                </HStack>
                <Box
                  pl="6"
                  _dark={{
                    _text: {
                      color: 'coolGray.600'
                    }
                  }}
                >
                  Try NativeBase Startup+ for more than 80 pre-built screens
                </Box>
              </VStack>
            </Alert>
          </Link>
        </Collapse>
      </Box>
    </Box>
  )
}
