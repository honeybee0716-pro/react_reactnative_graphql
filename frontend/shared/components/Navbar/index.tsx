import React, { useState } from 'react'
import { Text, SafeAreaView, Platform } from 'react-native'

import Link from 'next/link'

// import SearchModal from '../SearchModal';
import { BurgerMenu } from '../BurgerMenu'
import { Modal } from '../Modal'
// import { MainGutter } from '../MainGutter/styles'
// import {images, icons} from '../../public';

import * as Styled from './styles'

const placeholder = 'Search for something'

const ModalContent = () => {
  return (
    <Styled.MenuContainer>
      <Styled.HamburgerMenu
        disableAutoFocus
        noOverlay
        customBurgerIcon={
          <Styled.Icon
            src={require('../../../shared/assets/icons/hamburger.png')}
            source={require('../../../shared/assets/icons/hamburger.png')}
            alt="menu icon"
          />
        }
        right
      >
        <Link href="/">
          <Styled.LinkText>Home</Styled.LinkText>
        </Link>
        <Link href="/login">
          <Styled.LinkText>Login</Styled.LinkText>
        </Link>
        <Link href="/join">
          <Styled.LinkText>Join</Styled.LinkText>
        </Link>
        <Link href="/forgot-password">
          <Styled.LinkText>Forgot Password</Styled.LinkText>
        </Link>
        <Link href="/account">
          <Styled.LinkText>My Account</Styled.LinkText>
        </Link>
        <Link href="/upvotes">
          <Styled.LinkText>My Upvotes</Styled.LinkText>
        </Link>
        <Link href="/downvotes">
          <Styled.LinkText>My Downvotes</Styled.LinkText>
        </Link>
        <Link href="/my-posts">
          <Styled.LinkText>My Posts</Styled.LinkText>
        </Link>
        <Link href="/my-teams">
          <Styled.LinkText>My Teams</Styled.LinkText>
        </Link>
        <Link href="/my-comments">
          <Styled.LinkText>My Comments</Styled.LinkText>
        </Link>
      </Styled.HamburgerMenu>
    </Styled.MenuContainer>
  )
}

export const Navbar = () => {
  const isLoggedIn = false

  const [value, onChangeText] = useState(placeholder)
  const [showMenu, setShowMenu] = useState(false)

  const input = (text: string) => {
    onChangeText(!text.length ? placeholder : text)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const content = (
    <>
      {showMenu ? <Modal content={ModalContent} /> : null}
      <Styled.Container>
        <Styled.LeftNavbar>
          <Styled.Logo
            src={require('../../assets/images/logo.png')}
            source={require('../../assets/images/logo.png')}
          />
          <BurgerMenu toggleMenu={toggleMenu} />
        </Styled.LeftNavbar>

        <Styled.CenterNavbar>
          {/* <Styled.SearchIcon
          src={require('../../assets/icons/magnifyingGlass.png')}
          source={require('../../assets/icons/magnifyingGlass.png')}
        />
        <Styled.Input
          placeholder={value}
          onChange={(e: any) => input(e.target.value)}
        />
        {!!value && value !== placeholder && <SearchModal query={value} />} */}
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
    </>
  )

  if (Platform.OS === 'web') {
    return content
  }

  // if platform is not web, wrap in a safe area view
  return <SafeAreaView>{content}</SafeAreaView>
}
