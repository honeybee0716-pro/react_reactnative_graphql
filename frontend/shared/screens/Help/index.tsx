import React from 'react'
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  Button,
  TextArea,
  Hidden,
  ScrollView
} from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import DashboardLayout from '../../layouts/DashboardLayout'

type RateStar = {
  id: number
  type: string
}

function RateStar(props: { item: RateStar; type: string }) {
  if (props.type === 'fill') {
    return (
      <Pressable
        onPress={() => {
          console.log('hello')
        }}
      >
        <Icon size="5" color="coolGray.400" as={Ionicons} name={'ios-star'} />
      </Pressable>
    )
  } else {
    return (
      <Pressable
        onPress={() => {
          console.log('hello')
        }}
      >
        <Icon
          size="5"
          color="coolGray.400"
          as={Ionicons}
          name={'md-star-outline'}
        />
      </Pressable>
    )
  }
}

function UploadFile() {
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.400' } }}
      p={{ base: '4', md: '0' }}
    >
      <Text
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.400' }}
        fontWeight="bold"
      >
        Add Photo or Video
      </Text>
      <Pressable
        onPress={() => {
          console.log('hello')
        }}
      >
        <VStack
          h="20"
          mt="4"
          borderWidth="1"
          borderRadius="lg"
          _light={{ borderColor: { base: 'coolGray.300', md: 'coolGray.300' } }}
          _dark={{ borderColor: { base: 'coolGray.300', md: 'coolGray.500' } }}
          justifyContent="center"
          alignItems="center"
          borderStyle="dashed"
        >
          <Icon
            size="6"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.400' }}
            mr="1"
            as={MaterialIcons}
            name={'cloud-upload'}
          />
          <Text
            mt="3"
            fontSize="sm"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Upload
          </Text>
        </VStack>
      </Pressable>
    </Box>
  )
}

function RatingStars() {
  const rateStarList: RateStar[] = [
    {
      id: 1,
      type: 'blank'
    },
    {
      id: 2,
      type: 'blank'
    },
    {
      id: 1,
      type: 'blank'
    },
    {
      id: 2,
      type: 'blank'
    },
    {
      id: 1,
      type: 'blank'
    }
  ]
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.400' } }}
      py={{ base: '2', md: '0' }}
      px={{ base: 4, md: 0 }}
    >
      <Text
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.400' }}
        fontWeight="bold"
      >
        Rate your experience
      </Text>

      <HStack mt="4" alignItems="center" space={6}>
        {rateStarList.map((item, index: number) => {
          return (
            <React.Fragment key={index}>
              <RateStar item={item} type={item.type} />
            </React.Fragment>
          )
        })}
      </HStack>
      <Text
        my="3"
        _light={{ color: 'coolGray.400' }}
        _dark={{ color: 'coolGray.400' }}
      >
        Tap the stars
      </Text>
    </Box>
  )
}
function ItemCard() {
  const item = {
    imageUri:
      'https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    itemName: 'Baby Bed Lamp',
    itemCompany: 'BABY GROW',
    size: 'Medium',
    price: '1635.00'
  } as {
    imageUri: string
    itemName: string
    itemCompany: string
    size: string
    price: string
  }
  return (
    <Box
      p={{ base: '4', md: '0' }}
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
    >
      <HStack
        space={{ base: '3', md: '5' }}
        alignItems="center"
        p={{ base: '3', md: '4' }}
        borderRadius="4"
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: 'coolGray.700' }}
      >
        <Image
          source={{
            uri: item.imageUri
          }}
          alt="Product Image"
          height="24"
          width="20"
          borderRadius="md"
        />

        <VStack space={{ md: '1', base: '0' }} mt="1">
          <Text
            fontSize="md"
            fontWeight="semibold"
            _dark={{ color: 'coolGray.100' }}
            _light={{ color: 'coolGray.800' }}
          >
            {item.itemName}
          </Text>
          <Text
            fontSize="sm"
            _dark={{ color: 'coolGray.300' }}
            _light={{ color: 'coolGray.500' }}
          >
            {item.itemCompany}
          </Text>
          <Text
            fontSize="sm"
            _dark={{ color: 'coolGray.300' }}
            _light={{ color: 'coolGray.500' }}
          >
            Size : {item.size}
          </Text>
          <Text
            fontWeight="semibold"
            _dark={{ color: 'coolGray.100' }}
            _light={{ color: 'coolGray.800' }}
          >
            ₹ {item.price}
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
function FeedbackInput() {
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.400' } }}
      p={{ base: '4', md: '0' }}
      flex={1}
    >
      <Text
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.400' }}
        fontWeight="bold"
        fontSize="md"
      >
        Share your experience
      </Text>
      <TextArea
        _focus={{
          _light: { borderColor: 'coolGray.400' },
          _dark: { borderColor: 'coolGray.700' }
        }}
        h="40"
        mt="4"
        fontSize="sm"
        _light={{ color: 'coolGray.500' }}
        _dark={{
          color: 'coolGray.300',
          bg: { md: 'coolGray.400' }
        }}
        placeholder="Would you like to write anything about the product?"
      />
    </Box>
  )
}
export default function () {
  return (
    <DashboardLayout title={'Feedback'} displayScreenTitle={false}>
      <ScrollView>
        <VStack
          _light={{
            bg: { md: 'white', base: 'white' },
            borderColor: 'coolGray.400'
          }}
          _dark={{
            bg: { base: 'coolGray.800', md: 'coolGray.400' },
            borderColor: 'coolGray.700'
          }}
          px={{ base: 0, md: 16, lg: 32 }}
          pt={{ base: 0, md: 8 }}
          pb={{ base: '4', md: '8' }}
          borderRadius={{ md: '8' }}
          borderWidth={{ md: '1' }}
          space={{ md: '6', base: 4 }}
          flex="1"
        >
          <Hidden from="md">
            <Box
              height={4}
              mb={1}
              _dark={{ bg: 'customGray' }}
              _light={{ bg: 'coolGray.400' }}
            />
          </Hidden>
          <RatingStars />
          <Hidden from="md">
            <Box
              height={4}
              mb={1}
              _dark={{ bg: 'customGray' }}
              _light={{ bg: 'coolGray.400' }}
            />
          </Hidden>
          <UploadFile />
          <Hidden from="md">
            <Box
              height={4}
              mb={1}
              _dark={{ bg: 'customGray' }}
              _light={{ bg: 'coolGray.400' }}
            />
          </Hidden>
          <FeedbackInput />
          <Button
            mt={{ md: '8' }}
            _light={{ bg: 'coolGray.700' }}
            _hover={{ bg: 'coolGray.600' }}
            _dark={{ bg: 'primary.800' }}
            py="4"
            mx={{ base: '4', md: '0' }}
            _text={{ fontWeight: 'medium' }}
          >
            SUBMIT
          </Button>
        </VStack>
      </ScrollView>
    </DashboardLayout>
  )
}
