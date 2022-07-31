import React, { useEffect } from 'react'
import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Select,
  CheckIcon
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconBarChart from 'shared/components/icons/IconBarChart'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'solito/router'

const { width } = Dimensions.get('window')

const VERIFY_USER_IS_ADMIN = gql`
  query VerifyUserIsAdmin {
    verifyUserIsAdmin {
      message
      status
      isAdmin
    }
  }
`

export default function DashBoard() {
  const { push } = useRouter()
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
    width >= 480 ? 300 : 160
  )
  const [chartSelectMonth, setChartSelectMonth] = useState('30 days')
  const { data } = useQuery(VERIFY_USER_IS_ADMIN)

  useEffect(() => {
    if (data?.verifyUserIsAdmin && data.verifyUserIsAdmin.isAdmin === false) {
      push('/home')
    }
  }, [data])

  if (!data?.verifyUserIsAdmin?.isAdmin) {
    return null
  }

  return (
    <>
      <DashboardLayout>
        <Box>
          <Box
            h="full"
            paddingTop={'5'}
            paddingBottom={{ base: '0', lg: '5' }}
            paddingLeft={'5'}
            paddingRight={{ base: '5', lg: '5' }}
          >
            <VStack
              backgroundColor="white"
              borderRadius="xl"
              borderWidth="1"
              borderColor={theme.colors.shared.soft4Gray}
              h="full"
              space="5"
            >
              <HStack
                paddingX={{ base: '4', sm: '7' }}
                paddingTop={{ base: '4', sm: '6' }}
                justifyContent="space-between"
                alignItems="center"
              >
                <HStack alignItems="center" space="3">
                  <Center
                    backgroundColor={theme.colors.shared.purple1_34}
                    paddingY="1"
                    paddingX="1"
                    borderRadius="lg"
                  >
                    <IconBarChart
                      sizeScale={1}
                      color={theme.colors.shared.purple1}
                    />
                  </Center>
                  <Text fontWeight="medium" fontSize="lg">
                    New users
                  </Text>
                </HStack>
                <HStack alignItems="center">
                  <Hidden till="sm">
                    <HStack marginLeft="5" alignItems="center">
                      <Select
                        placeholder="Timeframe"
                        selectedValue={chartSelectMonth}
                        width="7.75rem"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size="5" />
                        }}
                        onValueChange={(itemValue) =>
                          setChartSelectMonth(itemValue)
                        }
                      >
                        <Select.Item label="30 days" value="30 days" />
                        <Select.Item label="90 days" value="90 days" />
                        <Select.Item label="180 days" value="180 days" />
                        <Select.Item label="365 days" value="365 days" />
                      </Select>
                    </HStack>
                  </Hidden>
                </HStack>
              </HStack>
              <Box position="relative" flex="1">
                <Box
                  h={{
                    base: '170px',
                    sm: '300px'
                  }}
                ></Box>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  overflowX="hidden"
                  h={{
                    base: '170px',
                    sm: '300px'
                  }}
                >
                  <Box
                    onLayout={(e) => {
                      const { x, y, width, height } = e.nativeEvent.layout
                      setChartContactWidth(width)
                      setChartContactHeight(height)
                    }}
                  >
                    <LineChart
                      height={chartContactHeight}
                      data={chartContactData}
                      width={chartContactWidth}
                      chartConfig={{
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: '#ffffff',
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
                          stroke: theme.colors.shared.soft4Gray
                        }
                      }}
                      bezier
                    />
                  </Box>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
