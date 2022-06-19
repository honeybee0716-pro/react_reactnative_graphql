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
  CheckIcon
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { Dimensions, View } from 'react-native'
import { useState } from 'react'
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
import IconCalendar from 'shared/components/icons/IconCalendar'
import IconShoppingCart from 'shared/components/icons/IconShoppingCart'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from '../../components/icons/IconChevronDown'
import IconPlayCircle from '../../components/icons/IconPlayCircle'

const { width, height } = Dimensions.get('window')

export default function DashBoard() {
  const [chartContactData, setChartContactData] = useState({
    labels: [
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19'
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        color: (opacity = 1) => theme.colors.shared.brightBlue, // optional
        strokeWidth: 2 // optional
      }
    ]
    // legend: ["Contacts"] // optional
  })
  const [chartContactWidth, setChartContactWidth] = useState(100)
  const [chartContactHeight, setChartContactHeight] = useState(
    width >= 480 ? 410 : 160
  )
  const [chartSelectMonth, setChartSelectMonth] = useState('')

  return (
    <>
      <DashboardLayout>
        <Box flexDirection={{ lg: 'row' }}>
          {/* Chart contacts sent */}
          <Box flex="1">
            <Box
              h="full"
              paddingTop={'5'}
              paddingBottom={{ base: '0', lg: '5' }}
              paddingLeft={'5'}
              paddingRight={{ base: '5', lg: '0' }}
            ></Box>
          </Box>
          {/* Account overview */}
          <Box width={{ lg: '430px' }}>
            <Box
              margin="5"
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom="4"
              borderRadius="2xl"
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.soft4Gray}
            >
              <HStack alignItems="center">
                <Center
                  backgroundColor={theme.colors.shared.brightBlue_20}
                  paddingY="0.625rem"
                  paddingX="0.375rem"
                  borderRadius="lg"
                >
                  <Box w="20px">
                    <IconCredits color={theme.colors.shared.brightBlue} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                >
                  Account Overview
                </Text>
                <Hidden from="lg">
                  <Pressable
                    borderWidth="1"
                    borderColor={theme.colors.shared.soft4Gray}
                    borderRadius="md"
                    p={{ base: '6px', sm: '2' }}
                  >
                    <Box w="16px">
                      <IconMoreVertical />
                    </Box>
                  </Pressable>
                </Hidden>
              </HStack>
              <Box flexDirection={{ base: 'unset', sm: 'row', lg: 'unset' }}>
                <Box
                  w={{ base: 'full', sm: '1/2', lg: 'full' }}
                  paddingRight={{ base: '0', sm: '8', lg: '0' }}
                >
                  <Hidden till="lg">
                    <Text fontWeight="medium" marginTop="5">
                      Total Credits
                    </Text>
                  </Hidden>
                  <Box
                    flexDirection={{ base: 'column', lg: 'row' }}
                    height={{ base: 'full', lg: 'auto' }}
                  >
                    <Box
                      flex="1"
                      flexDirection={{ base: 'row', lg: 'unset' }}
                      justifyContent="center"
                      alignItems="center"
                      paddingTop={{ base: '6', sm: '0' }}
                      paddingBottom={{ base: '4', sm: '0' }}
                    >
                      <Box>
                        <Text
                          fontSize={{ base: '32px', sm: '40px' }}
                          fontWeight="semibold"
                          textAlign={{ base: 'center', lg: 'unset' }}
                        >
                          8,752
                        </Text>
                        <Hidden from="lg">
                          <Text
                            fontSize={{ base: '13px', sm: 'md' }}
                            fontWeight="medium"
                            marginTop="0"
                            textAlign="center"
                          >
                            Total Credits
                          </Text>
                        </Hidden>
                      </Box>
                    </Box>
                    <Center>
                      <Button
                        w={{ base: 'auto', sm: 'full', lg: 'auto' }}
                        backgroundColor={theme.colors.shared.brightBlue}
                        borderRadius={{ base: 'full', sm: 'xl', lg: 'full' }}
                      >
                        <Hidden till="lg">
                          <Text
                            color="white"
                            paddingX="2"
                            fontSize="xs"
                            fontWeight="semibold"
                          >
                            Get Credits
                          </Text>
                        </Hidden>
                        <Hidden from="lg">
                          <HStack paddingX={{ base: '2', sm: '0' }}>
                            <Center>
                              <Box w={{ base: '18px', sm: '20px' }}>
                                <IconShoppingCart />
                              </Box>
                            </Center>
                            <Text
                              color="white"
                              paddingLeft="2"
                              paddingY="2px"
                              fontWeight="medium"
                              fontSize={{ base: 'xs', sm: 'md' }}
                            >
                              Get more credits
                            </Text>
                          </HStack>
                        </Hidden>
                      </Button>
                    </Center>
                  </Box>
                  <Hidden till="lg">
                    <Box
                      marginY="3"
                      borderBottomWidth="1"
                      borderBottomColor={theme.colors.shared.softerGray}
                      marginX="1"
                    ></Box>
                  </Hidden>
                </Box>
                <Box w={{ base: 'full', sm: '1/2', lg: 'full' }}>
                  <Hidden till="lg">
                    <HStack marginTop="2" alignItems="center" space="3">
                      <Center
                        backgroundColor={theme.colors.shared.redOrange_20}
                        paddingY="0.35rem"
                        paddingX="0.35rem"
                        borderRadius="lg"
                      >
                        <Box w="21px">
                          <IconCornerUpRight />
                        </Box>
                      </Center>
                      <Text fontWeight="medium" fontSize="lg">
                        Recent Transactions
                      </Text>
                    </HStack>
                  </Hidden>
                  <HStack
                    marginTop="6"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.aliceBlue}
                    paddingY="3"
                    paddingX="5"
                    borderRadius="lg"
                    borderWidth="1"
                    borderColor={theme.colors.shared.soft4Gray}
                  >
                    <IconZap />
                    <Box flex="1">
                      <Text
                        marginLeft="3"
                        fontSize={{ base: '13px', sm: 'sm' }}
                        fontWeight="medium"
                        color={theme.colors.shared.soft3Gray}
                      >
                        Advertising - Campaign
                      </Text>
                    </Box>
                    <Center>
                      <Box
                        backgroundColor={theme.colors.shared.redStop}
                        borderRadius="full"
                      >
                        <Text
                          color="white"
                          paddingX="2"
                          paddingY="0.1rem"
                          fontSize="2xs"
                        >
                          -30K
                        </Text>
                      </Box>
                    </Center>
                  </HStack>
                  <HStack
                    marginTop="3"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.aliceBlue}
                    paddingY="3"
                    paddingX="5"
                    borderRadius="lg"
                    borderWidth="1"
                    borderColor={theme.colors.shared.soft4Gray}
                  >
                    <Box w="24px">
                      <IconDollarSign />
                    </Box>
                    <Box flex="1">
                      <Text
                        marginLeft="3"
                        fontSize={{ base: '13px', sm: 'sm' }}
                        fontWeight="medium"
                        color={theme.colors.shared.soft3Gray}
                      >
                        Credits Deposited
                      </Text>
                    </Box>
                    <Center>
                      <Box backgroundColor="green.600" borderRadius="full">
                        <Text
                          color="white"
                          paddingX="2"
                          paddingY="0.1rem"
                          fontSize="2xs"
                        >
                          +40K
                        </Text>
                      </Box>
                    </Center>
                  </HStack>
                  <HStack
                    marginTop="3"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.aliceBlue}
                    paddingY="3"
                    paddingX="5"
                    borderRadius="lg"
                    borderWidth="1"
                    borderColor={theme.colors.shared.soft4Gray}
                  >
                    <Box w="24px">
                      <IconUploadCloud />
                    </Box>
                    <Box flex="1">
                      <Text
                        marginLeft="3"
                        fontSize={{ base: '13px', sm: 'sm' }}
                        fontWeight="medium"
                        color={theme.colors.shared.soft3Gray}
                      >
                        SEO Agencies - List Upload
                      </Text>
                    </Box>
                    <Center>
                      <Box
                        backgroundColor={theme.colors.shared.redStop}
                        borderRadius="full"
                      >
                        <Text
                          color="white"
                          paddingX="2"
                          paddingY="0.1rem"
                          fontSize="2xs"
                        >
                          -12K
                        </Text>
                      </Box>
                    </Center>
                  </HStack>
                  <Hidden till="lg">
                    <Center marginTop="4">
                      <SolitoLink href={'/manage-account'}>
                        <Text
                          color={theme.colors.shared.blueLink}
                          fontWeight="medium"
                        >
                          Manage your account
                        </Text>
                      </SolitoLink>
                    </Center>
                  </Hidden>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
