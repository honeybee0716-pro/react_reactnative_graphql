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
        </Box>
      </DashboardLayout>
    </>
  )
}
