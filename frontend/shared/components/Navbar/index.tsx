import React, { useState } from 'react'
import { Text, SafeAreaView, Platform } from 'react-native'

import Link from 'next/link'

// import SearchModal from '../SearchModal';
import { BurgerMenu } from '../BurgerMenu'
import { MainGutter } from '../MainGutter/styles'
// import {images, icons} from '../../public';

import * as Styled from './styles'

const placeholder = 'Search for something'

export const Navbar = () => {
  const isLoggedIn = false

  const [value, onChangeText] = useState(placeholder)

  const input = (text: string) => {
    onChangeText(!text.length ? placeholder : text)
  }

  const content = (
    <Styled.Container>
      <Styled.LeftNavbar>
        <Styled.Logo
          src={require('../../assets/images/logo.png')}
          source={require('../../assets/images/logo.png')}
        />
        <BurgerMenu />
      </Styled.LeftNavbar>

      <Styled.CenterNavbar>
        <Styled.SearchIcon
          src={require('../../assets/icons/magnifyingGlass.png')}
          source={require('../../assets/icons/magnifyingGlass.png')}
        />
        <Styled.Input
          placeholder={value}
          onChange={(e: any) => input(e.target.value)}
        />
        {/* {!!value && value !== placeholder && <SearchModal query={value} />} */}
      </Styled.CenterNavbar>

      <Styled.RightNavbar>
        {isLoggedIn ? (
          <Styled.You
            src={require('../../assets/images/logo.png')}
            source={require('../../assets/images/logo.png')}
          />
        ) : (
          <Styled.Row>
            <Styled.Login>
              <Styled.LoginText>Login</Styled.LoginText>
            </Styled.Login>
            <Styled.Join>
              <Styled.JoinText>Join</Styled.JoinText>
            </Styled.Join>
          </Styled.Row>
        )}
      </Styled.RightNavbar>
    </Styled.Container>
  )

  if (Platform.OS === 'web') {
    return content
  }

  // if platform is not web, wrap in a safe area view
  return <SafeAreaView>{content}</SafeAreaView>
}
