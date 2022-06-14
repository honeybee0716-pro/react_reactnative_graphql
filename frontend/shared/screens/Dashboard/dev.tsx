import {
  StatusBar, Box,
  Center, Stack, Hidden, Text,
  Image, HStack, VStack, Input,
  InputGroup, Button, Checkbox,
  Link, Icon, Pressable,
  Flex, Select, CheckIcon
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
} from "react-native-chart-kit";
import { Dimensions, View } from 'react-native';
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
    labels: ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        color: (opacity = 1) => theme.colors.shared.brightBlue, // optional
        strokeWidth: 2 // optional
      }
    ],
    // legend: ["Contacts"] // optional
  })
  const [chartContactWidth, setChartContactWidth] = useState(100)
  const [chartContactHeight, setChartContactHeight] = useState(width >= 480 ? 410 : 160)
  const [chartSelectMonth, setChartSelectMonth] = useState('')

  return (
    <>
      <DashboardLayout>
        <Box
          flexDirection={{ lg: 'row' }}
        >
          {/* Chart contacts sent */}
          <Box flex='1'>
            <Box
              h='full'
              paddingTop={'5'}
              paddingBottom={{ base: '0', lg: '5' }}
              paddingLeft={'5'}
              paddingRight={{ base: '5', lg: '0' }}
            >
              <VStack
                backgroundColor='white'
                borderRadius='xl'
                borderWidth='1'
                borderColor={theme.colors.shared.soft4Gray}
                h='full'
                space='5'
              >
                <HStack
                  paddingX={{ base: '4', sm: '7' }}
                  paddingTop={{ base: '4', sm: '6' }}
                  justifyContent='space-between'
                  alignItems='center'
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
                  <HStack
                    alignItems='center'
                  >
                    <IconCalendar />
                    <Text
                      marginLeft='1'
                      color={theme.colors.shared.softBlack}
                      fontWeight='medium'
                    >
                      April 2022
                    </Text>
                    <Hidden till='sm'>
                      <HStack marginLeft='5' alignItems='center'>
                        <Select
                          selectedValue={chartSelectMonth} width="7.75rem" placeholder="Date" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                          }} onValueChange={itemValue => setChartSelectMonth(itemValue)}>
                          <Select.Item label="This Month" value="This Month" />
                          <Select.Item label="May" value="May" />
                          <Select.Item label="April" value="April" />
                          <Select.Item label="March" value="March" />
                          <Select.Item label="February" value="February" />
                        </Select>
                      </HStack>
                    </Hidden>
                  </HStack>
                </HStack>
                <Box
                  position='relative'
                  flex='1'
                >
                  <Box
                    h={{
                      base: '170px', sm: '380px'
                    }}
                  ></Box>
                  <Box
                    position='absolute'
                    top='0'
                    left='0'
                    right='0'
                    bottom='0'
                    overflowX='hidden'
                    h={{
                      base: '170px', sm: '380px'
                    }}
                  >
                    <Box
                      onLayout={(e) => {
                        const { x, y, width, height } = e.nativeEvent.layout;
                        setChartContactWidth(width)
                        // setChartContactHeight(height)
                      }}
                    >
                      <LineChart
                        height={chartContactHeight}
                        data={chartContactData}
                        width={chartContactWidth}
                        chartConfig={{
                          backgroundGradientFrom: "#ffffff",
                          backgroundGradientFromOpacity: 0,
                          backgroundGradientTo: "#ffffff",
                          backgroundGradientToOpacity: 0.5,
                          // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                          color: (opacity = 1) => `rgba(0,0,0,1)`,
                          // labelColor: (opacity = 1) => theme.colors.shared.brightBlue,
                          strokeWidth: 2, // optional, default 3
                          barPercentage: 0.5,
                          useShadowColorFromDataset: true, // optionals
                          propsForDots: {
                            // r: "6",
                            // strokeWidth: "2",
                            // stroke: theme.colors.shared.brightBlue,
                            // fill: theme.colors.shared.brightBlue,
                          },
                          propsForBackgroundLines: {
                            stroke: theme.colors.shared.soft4Gray,
                          },
                        }}
                        bezier
                      />
                    </Box>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Box>
          {/* Account overview */}
          <Box
            width={{ lg: '430px' }}
          >
            <Box
              margin='5'
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom='4'
              borderRadius='2xl'
              backgroundColor='white'
              borderWidth='1'
              borderColor={theme.colors.shared.soft4Gray}
            >
              <HStack
                alignItems='center'
              >
                <Center
                  backgroundColor={theme.colors.shared.brightBlue_20}
                  paddingY='0.625rem'
                  paddingX='0.375rem'
                  borderRadius='lg'
                >
                  <Box w='20px'>
                    <IconCredits
                      color={theme.colors.shared.brightBlue}
                    />
                  </Box>
                </Center>
                <Text
                  flex='1'
                  marginLeft='3'
                  fontWeight='medium'
                  fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                >
                  Account Overview
                </Text>
                <Hidden from='lg'>
                  <Pressable borderWidth='1' borderColor={theme.colors.shared.soft4Gray} borderRadius='md' p={{ base: '6px', sm: '2' }}>
                    <Box w='16px'>
                      <IconMoreVertical />
                    </Box>
                  </Pressable>
                </Hidden>
              </HStack>
              <Box
                flexDirection={{ base: 'unset', sm: 'row', lg: 'unset' }}
              >
                <Box w={{ base: 'full', sm: '1/2', lg: 'full' }} paddingRight={{ base: '0', sm: '8', lg: '0' }}>
                  <Hidden till='lg'>
                    <Text fontWeight='medium' marginTop='5'>
                      Total Credits
                    </Text>
                  </Hidden>
                  <Box
                    flexDirection={{ base: 'column', lg: 'row' }}
                    height={{ base: 'full', lg: 'auto' }}
                  >
                    <Box
                      flex='1'
                      flexDirection={{ base: 'row', lg: 'unset' }}
                      justifyContent='center'
                      alignItems='center'
                      paddingTop={{ base: '6', sm: '0' }}
                      paddingBottom={{ base: '4', sm: '0' }}
                    >
                      <Box>
                        <Text fontSize={{ base: '32px', sm: '40px' }} fontWeight='semibold' textAlign={{ base: 'center', lg: 'unset' }}>
                          8,752
                        </Text>
                        <Hidden from='lg'>
                          <Text
                            fontSize={{ base: '13px', sm: 'md' }}
                            fontWeight='medium' marginTop='0' textAlign='center'>
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
                        <Hidden till='lg'>
                          <Text
                            color='white'
                            paddingX='2'
                            fontSize='xs'
                            fontWeight='semibold'
                          >
                            Get Credits
                          </Text>
                        </Hidden>
                        <Hidden from='lg'>
                          <HStack paddingX={{ base: '2', sm: '0' }}>
                            <Center>
                              <Box w={{ base: '18px', sm: '20px' }}>
                                <IconShoppingCart />
                              </Box>
                            </Center>
                            <Text
                              color='white'
                              paddingLeft='2'
                              paddingY='2px'
                              fontWeight='medium'
                              fontSize={{ base: 'xs', sm: 'md' }}
                            >
                              Get more credits
                            </Text>
                          </HStack>
                        </Hidden>
                      </Button>
                    </Center>
                  </Box>
                  <Hidden till='lg'>
                    <Box
                      marginY='3'
                      borderBottomWidth='1'
                      borderBottomColor={theme.colors.shared.softerGray}
                      marginX='1'
                    >
                    </Box>
                  </Hidden>
                </Box>
                <Box w={{ base: 'full', sm: '1/2', lg: 'full' }}>
                  <Hidden till='lg'>
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
                        <Box w='21px'>
                          <IconCornerUpRight />
                        </Box>
                      </Center>
                      <Text
                        fontWeight='medium'
                        fontSize='lg'
                      >
                        Recent Transactions
                      </Text>
                    </HStack>
                  </Hidden>
                  <HStack
                    marginTop='6'
                    alignItems='center'
                    backgroundColor={theme.colors.shared.aliceBlue}
                    paddingY='3'
                    paddingX='5'
                    borderRadius='lg'
                    borderWidth='1'
                    borderColor={theme.colors.shared.soft4Gray}
                  >
                    <IconZap />
                    <Box flex='1'>
                      <Text
                        marginLeft='3'
                        fontSize={{ base: '13px', sm: 'sm' }}
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
                    paddingY='3'
                    paddingX='5'
                    borderRadius='lg'
                    borderWidth='1'
                    borderColor={theme.colors.shared.soft4Gray}
                  >
                    <Box w='24px'>
                      <IconDollarSign />
                    </Box>
                    <Box flex='1'>
                      <Text
                        marginLeft='3'
                        fontSize={{ base: '13px', sm: 'sm' }}
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
                    paddingY='3'
                    paddingX='5'
                    borderRadius='lg'
                    borderWidth='1'
                    borderColor={theme.colors.shared.soft4Gray}
                  >
                    <IconUploadCloud />
                    <Box flex='1'>
                      <Text
                        marginLeft='3'
                        fontSize={{ base: '13px', sm: 'sm' }}
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
                  <Hidden till='lg'>
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
                  </Hidden>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Bottom Get started part */}
        <Box>
          <Box
            marginBottom='5'
            marginX='5'
            paddingX={{ base: '4', sm: '7' }}
            paddingY={{ base: '4', sm: '6' }}
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
                <Hidden till='lg'>
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
                      <Box w='18px'>
                        <IconDownload />
                      </Box>
                      <Text
                        fontSize='xs'
                        fontWeight='semibold'
                      >
                        Download
                      </Text>
                    </HStack>
                  </Pressable>
                </Hidden>
                <Hidden till='sm'>
                  <Hidden from='lg'>
                    <HStack>
                      <Pressable
                        borderWidth='1' borderColor={theme.colors.shared.soft4Gray} borderLeftRadius='lg' p='2'
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray,
                        }}
                      >
                        <Box w='16px'>
                          <IconChevronDown rotation={270} />
                        </Box>
                      </Pressable>

                      <Pressable
                        borderWidth='1' borderColor={theme.colors.shared.soft4Gray} borderRightRadius='lg' p='2'
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray,
                        }}
                      >
                        <Box w='16px'>
                          <IconChevronDown rotation={90} />
                        </Box>
                      </Pressable>
                    </HStack>
                  </Hidden>
                </Hidden>
              </Box>
            </HStack>
            <Hidden till='sm'>
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
                        <Box w='19px'>
                          <IconClock />
                        </Box>
                        <Text fontWeight='medium' fontSize='xs' marginLeft='1'>
                          Apr 9, 2021 at 3:55 PM
                        </Text>
                      </HStack>
                    </Box>
                  ))}
                </HStack>
              </KeyboardAwareScrollView>
            </Hidden>
            <Hidden from='sm'>
              <VStack space='3'>
                {[...Array(2)].map((_, i) => (
                  <HStack
                    alignItems='center'
                    paddingY='3'
                    paddingX='3'
                    backgroundColor={theme.colors.shared.aliceBlue}
                    borderColor={theme.colors.shared.soft4Gray}
                    borderWidth='1'
                    borderRadius='lg'
                  >
                    <Box w='24px'>
                      <IconPlayCircle />
                    </Box>
                    <Box
                      flex='1'
                      flexDirection='row'
                      marginLeft='3'
                    >
                      <Text>
                        How to add a new list
                      </Text>
                    </Box>
                    <Pressable
                      borderColor={theme.colors.shared.soft4Gray}
                      borderWidth='1'
                      borderRadius='md'
                      p={{ base: '6px', sm: '2' }}
                    >
                      <Box w='16px'>
                        <IconDownload />
                      </Box>
                    </Pressable>
                  </HStack>
                ))}
              </VStack>
            </Hidden>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}