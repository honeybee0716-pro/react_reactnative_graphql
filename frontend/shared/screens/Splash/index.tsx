import React from 'react'
import {
  Box,
  VStack,
  Button,
  Image,
  StatusBar,
  Center,
  Stack
} from 'native-base'
import { Link } from 'solito/link'

export default function Splash(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />
      <Center
        my="auto"
        _dark={{ bg: 'coolGray.900' }}
        _light={{ bg: 'primary.900' }}
        flex="1"
        p={{ md: 8 }}
      >
        <Stack
          flexDirection={{ base: 'column', md: 'row' }}
          w="100%"
          maxW={{ md: '1016px' }}
          flex={{ base: '1', md: 'none' }}
        >
          <Center w="100%" flex={1}>
            <Box
              maxW="500"
              w="100%"
              px={{
                base: '4',
                md: '20'
              }}
              py={{
                base: '8',
                md: '32'
              }}
              rounded={{ md: 'xl' }}
              _light={{ bg: { md: 'primary.700' } }}
              _dark={{ bg: { md: 'coolGray.800' } }}
            >
              <Box
                mb={{
                  base: '10',
                  md: '16'
                }}
                flexDirection={{
                  base: 'column',
                  md: 'row'
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  size={{ base: '24', md: '16' }}
                  resizeMode={'contain'}
                  alt="NativeBase Logo"
                  source={require('./components/logo-nb.png')}
                  mb={{
                    base: '24',
                    md: '0'
                  }}
                />
                <Image
                  h="8"
                  w={{ base: '64', md: '72' }}
                  resizeMode="contain"
                  alt="NativeBase Startup plus"
                  source={require('./components/logo-startup-plus.png')}
                />
              </Box>
              <VStack space="4">
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    _text={{
                      color: 'primary.900'
                    }}
                    _hover={{ bg: 'coolGray.200' }}
                    bg="coolGray.100"
                  >
                    LOGIN
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    _text={{
                      color: 'coolGray.50'
                    }}
                    variant="outline"
                    colorScheme="coolGray"
                    borderColor="coolGray.50"
                  >
                    SIGN UP
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Center>
        </Stack>
      </Center>
    </>
  )
}
