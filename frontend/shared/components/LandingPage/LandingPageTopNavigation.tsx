import {
  StatusBar,
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  InputGroup,
  Button,
  Checkbox,
  Link,
  Icon,
  Pressable,
  Flex,
  Select,
  CheckIcon,
  Slider,
  Switch,
  Divider
} from 'native-base'
import { theme } from 'shared/styles/theme'
import IconMenu from 'shared/components/icons/IconMenu'

export default function LandingPageTopNavigation() {
  return (
    <>
      <HStack
        zIndex={2}
        alignItems="center"
        justifyContent="space-between"
        paddingX={{ base: '6', lg: '12' }}
        paddingY={{ base: '7', lg: '8' }}
      >
        <HStack
          w={{ base: 'full', sm: 'auto' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            paddingRight="6"
            borderRightWidth={{ base: '0', lg: '1' }}
            borderRightColor={theme.colors.shared.soft4Gray_50}
          >
            <Box flexDir="row" alignItems="center" w="full">
              <Image
                w="50px"
                h="50px"
                source={require('shared/assets/images/contact-blaster-blue.png')}
              />
              <Text
                color={theme.colors.shared.softBlack}
                fontSize="22px"
                fontWeight="semibold"
                marginLeft={'2'}
              >
                Contact Blaster
              </Text>
            </Box>
          </Box>
          <Hidden till="sm">
            <HStack
              paddingLeft={{ base: '4', lg: '6' }}
              alignItems="center"
              space={{ base: '6', lg: '8' }}
            >
              <Pressable
                _hover={{
                  textDecoration: 'underline'
                }}
              >
                <Text fontSize="md" fontWeight="medium">
                  Home
                </Text>
              </Pressable>
              <Pressable
                _hover={{
                  textDecoration: 'underline'
                }}
              >
                <Text fontSize="md" fontWeight="medium">
                  Features
                </Text>
              </Pressable>
              <Pressable
                _hover={{
                  textDecoration: 'underline'
                }}
              >
                <Text fontSize="md" fontWeight="medium">
                  About Us
                </Text>
              </Pressable>
              <Pressable
                _hover={{
                  textDecoration: 'underline'
                }}
              >
                <Text fontSize="md" fontWeight="medium">
                  Support
                </Text>
              </Pressable>
            </HStack>
          </Hidden>

          <Hidden from="sm">
            <Pressable p="1">
              <Box w="24px">
                <IconMenu />
              </Box>
            </Pressable>
          </Hidden>
        </HStack>
        <Hidden till="sm">
          <Box>
            <Pressable
              backgroundColor={theme.colors.shared.blueGentianFlower}
              borderRadius="full"
              paddingX="7"
              paddingY="2"
              _hover={{
                backgroundColor: theme.colors.shared.brightBlue
              }}
            >
              <HStack alignItems="center">
                <Text color="white" fontSize="15px" fontWeight="medium">
                  Sign Up
                </Text>
              </HStack>
            </Pressable>
          </Box>
        </Hidden>
      </HStack>
    </>
  )
}
