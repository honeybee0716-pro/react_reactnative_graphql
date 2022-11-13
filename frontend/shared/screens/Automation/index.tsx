import {
  StatusBar,
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  Image,
  HStack,
  Input,
  Button,
  Checkbox,
  Link,
  Pressable
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'

export default function Automation(props: any) {
  return (
    <>
      <h1>automation page</h1>
    </>
  )
}
