import {
  StatusBar, Box,
  Center, Stack, Hidden, Text,
  Image, HStack, VStack, Input,
  InputGroup, Button, Checkbox,
  Link, Icon, Pressable
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import DashboardLayout from 'shared/layouts/DashboardLayout.dev'
import IconCredits from 'shared/components/icons/IconCredits'
import IconCornerUpRight from 'shared/components/icons/IconCornerUpRight'
import IconZap from 'shared/components/icons/IconZap'
import IconDollarSign from 'shared/components/icons/IconDollarSign'
import IconUploadCloud from 'shared/components/icons/IconUploadCloud'
import IconBarChart from 'shared/components/icons/IconBarChart'
import IconCompass from 'shared/components/icons/IconCompass'
import IconDownload from 'shared/components/icons/IconDownload'
import IconEye from 'shared/components/icons/IconEye'
import IconClock from 'shared/components/icons/IconClock'

export default function DashBoard() {
  return (
    <>
      <DashboardLayout>
        <HStack>
          <Box flex='1'>
            <Box
              marginY='5'
              marginLeft='5'
              padding='4'
              backgroundColor='white'
              borderRadius='xl'
              borderWidth='1'
              borderColor={theme.colors.shared.soft4Gray}
            >
              <HStack
                alignItems='center'
                space='3'
              >
                <Center
                  backgroundColor={theme.colors.shared.purple1_34}
                  paddingY='1'
                  paddingX='1'
                  borderRadius='lg'
                >
                  <IconBarChart
                    sizeScale={1}
                    color={theme.colors.shared.purple1}
                  />
                </Center>
                <Text
                  fontWeight='medium'
                  fontSize='lg'
                >
                  Contacts Sent
                </Text>
              </HStack>
            </Box>
          </Box>
          <Box
            width='430px'
          >
            <Box
              margin='5'
              paddingX='6'
              paddingTop='6'
              paddingBottom='4'
              borderRadius='2xl'
              backgroundColor='white'
              borderWidth='1'
              borderColor={theme.colors.shared.soft4Gray}
            >
              <HStack
                alignItems='center'
                space='3'
              >
                <Center
                  backgroundColor={theme.colors.shared.brightBlue_20}
                  paddingY='0.625rem'
                  paddingX='0.375rem'
                  borderRadius='lg'
                >
                  <IconCredits
                    sizeScale={0.95}
                    color={theme.colors.shared.brightBlue}
                  />
                </Center>
                <Text
                  fontWeight='medium'
                  fontSize='lg'
                >
                  Account Overview
                </Text>
              </HStack>
              <Text fontWeight='medium' marginTop='5'>
                Total Credits
              </Text>
              <HStack>
                <Box flex='1'>
                  <Text fontSize='4xl' fontWeight='semibold'>
                    8,752
                  </Text>
                </Box>
                <Center>
                  <Button
                    backgroundColor={theme.colors.shared.brightBlue}
                    borderRadius='full'
                  >
                    <Text
                      color='white'
                      paddingX='2'
                      fontSize='xs'
                      fontWeight='semibold'
                    >
                      Get Credits
                    </Text>
                  </Button>
                </Center>
              </HStack>
              <Box
                marginY='3'
                borderBottomWidth='1'
                borderBottomColor={theme.colors.shared.softerGray}
                marginX='1'
              >

              </Box>
              <HStack
                marginTop='2'
                alignItems='center'
                space='3'
              >
                <Center
                  backgroundColor={theme.colors.shared.redOrange_20}
                  paddingY='0.35rem'
                  paddingX='0.35rem'
                  borderRadius='lg'
                >
                  <IconCornerUpRight
                    sizeScale={1}
                  />
                </Center>
                <Text
                  fontWeight='medium'
                  fontSize='lg'
                >
                  Recent Transactions
                </Text>
              </HStack>
              <HStack
                marginTop='6'
                alignItems='center'
                backgroundColor={theme.colors.shared.aliceBlue}
                paddingY='4'
                paddingX='5'
                borderRadius='lg'
                borderWidth='1'
                borderColor={theme.colors.shared.soft4Gray}
              >
                <IconZap />
                <Box flex='1'>
                  <Text
                    marginLeft='3'
                    fontSize='sm'
                    fontWeight='medium'
                    color={theme.colors.shared.soft3Gray}
                  >
                    Advertising - Campaign
                  </Text>
                </Box>
                <Center>
                  <Box
                    backgroundColor={theme.colors.shared.redStop}
                    borderRadius='full'
                  >
                    <Text
                      color='white'
                      paddingX='2'
                      paddingY='0.1rem'
                      fontSize='2xs'
                    >
                      -30K
                    </Text>
                  </Box>
                </Center>
              </HStack>
              <HStack
                marginTop='3'
                alignItems='center'
                backgroundColor={theme.colors.shared.aliceBlue}
                paddingY='4'
                paddingX='5'
                borderRadius='lg'
                borderWidth='1'
                borderColor={theme.colors.shared.soft4Gray}
              >
                <IconDollarSign />
                <Box flex='1'>
                  <Text
                    marginLeft='3'
                    fontSize='sm'
                    fontWeight='medium'
                    color={theme.colors.shared.soft3Gray}
                  >
                    Credits Deposited
                  </Text>
                </Box>
                <Center>
                  <Box
                    backgroundColor='green.600'
                    borderRadius='full'
                  >
                    <Text
                      color='white'
                      paddingX='2'
                      paddingY='0.1rem'
                      fontSize='2xs'
                    >
                      +40K
                    </Text>
                  </Box>
                </Center>
              </HStack>
              <HStack
                marginTop='3'
                alignItems='center'
                backgroundColor={theme.colors.shared.aliceBlue}
                paddingY='4'
                paddingX='5'
                borderRadius='lg'
                borderWidth='1'
                borderColor={theme.colors.shared.soft4Gray}
              >
                <IconUploadCloud />
                <Box flex='1'>
                  <Text
                    marginLeft='3'
                    fontSize='sm'
                    fontWeight='medium'
                    color={theme.colors.shared.soft3Gray}
                  >
                    SEO Agencies - List Upload
                  </Text>
                </Box>
                <Center>
                  <Box
                    backgroundColor={theme.colors.shared.redStop}
                    borderRadius='full'
                  >
                    <Text
                      color='white'
                      paddingX='2'
                      paddingY='0.1rem'
                      fontSize='2xs'
                    >
                      -12K
                    </Text>
                  </Box>
                </Center>
              </HStack>
              <Center marginTop='4'>
                <SolitoLink href={'/manage-account'}>
                  <Text
                    color={theme.colors.shared.blueLink}
                    fontWeight='medium'
                  >
                    Manage your account
                  </Text>
                </SolitoLink>
              </Center>
            </Box>
          </Box>
        </HStack>
        {/* Bottom Get started part */}
        <Box>
          <Box
            marginBottom='5'
            marginX='5'
            padding='5'
            backgroundColor='white'
            borderRadius='xl'
            borderWidth='1'
            borderColor={theme.colors.shared.soft4Gray}
          >
            <HStack
              justifyContent='space-between'
              alignItems='center'
              space='3'
              paddingBottom='6'
            >
              <HStack
                alignItems='center'
                space='3'
              >
                <Center
                  backgroundColor={theme.colors.shared.lightBlue_34}
                  paddingY='1'
                  paddingX='1'
                  borderRadius='lg'
                >
                  <IconCompass
                    sizeScale={1}
                    color={theme.colors.shared.lightBlue}
                  />
                </Center>
                <Text
                  fontWeight='medium'
                  fontSize='lg'
                >
                  Get Started
                </Text>
              </HStack>
              <Box>
                <Pressable
                  backgroundColor='white'
                  borderWidth='1.5px'
                  borderRadius='md'
                  paddingX='3'
                  paddingY='1'
                  borderColor={theme.colors.shared.soft4Gray}
                >
                  <HStack
                    alignItems='center'
                    space='3'
                  >
                    <IconDownload
                      sizeScale={1}
                    />
                    <Text
                      fontSize='xs'
                      fontWeight='semibold'
                    >
                      Download
                    </Text>
                  </HStack>
                </Pressable>
              </Box>
            </HStack>
            <KeyboardAwareScrollView
              horizontal={true}
              overScrollMode='auto'
            >
              <HStack space='10'>
                {[...Array(8)].map((_, i) => (
                  <Box
                    key={i}
                    w='300px'
                  >
                    <Box
                      w='300px'
                      h='160px'
                    >
                      <Image
                        borderRadius='xl'
                        flex='1'
                        source={require('shared/assets/tutorial/Tutorial - Creating a list.png')}
                      />
                    </Box>
                    <HStack
                      marginTop='3'
                      alignItems='center'
                    >
                      <Box flex='1'>
                        <Text
                          color='black'
                          fontWeight='medium'
                        >
                          Tutorial -  Creating a list
                        </Text>
                      </Box>
                      <Center>
                        <HStack
                          alignItems='center'
                          paddingX='1'
                          backgroundColor={theme.colors.shared.lightGreen}
                          borderRadius='sm'
                          space='1'
                        >
                          <IconEye />
                          <Text fontWeight='semibold' fontSize='2xs'>
                            2K
                          </Text>
                        </HStack>
                      </Center>
                    </HStack>
                    <HStack
                      alignItems='center'
                    >
                      <IconClock />
                      <Text fontWeight='medium' fontSize='xs'>
                        Apr 9, 2021 at 3:55 PM
                      </Text>
                    </HStack>
                  </Box>
                ))}
              </HStack>
            </KeyboardAwareScrollView>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}