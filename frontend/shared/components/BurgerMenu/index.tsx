import { useState } from 'react'

import * as Styled from './styles'

export const BurgerMenu = () => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(true)

  // onPress redirect to the full-screen menu screen

  return (
    <>
      <Styled.MenuIcon
        // onPress={onPress}
        src={require('../../assets/icons/hamburger.png')}
        source={require('../../assets/icons/hamburger.png')}
      />
    </>
  )
}

// const BurgerMenu = () => (
//   <Styled.HamburgerMenu
//     disableAutoFocus
//     noOverlay
//     customBurgerIcon={<img src={icons.web.menu} alt="menu icon" />}
//     right
//   >
//     <Link href="/">
//       <Styled.LinkText>Home</Styled.LinkText>
//     </Link>
//     <Link href="/login">
//       <Styled.LinkText>Login</Styled.LinkText>
//     </Link>
//     <Link href="/join">
//       <Styled.LinkText>Join</Styled.LinkText>
//     </Link>
//     <Link href="/forgot-password">
//       <Styled.LinkText>Forgot Password</Styled.LinkText>
//     </Link>
//     <Link href="/account">
//       <Styled.LinkText>My Account</Styled.LinkText>
//     </Link>
//     <Link href="/upvotes">
//       <Styled.LinkText>My Upvotes</Styled.LinkText>
//     </Link>
//     <Link href="/downvotes">
//       <Styled.LinkText>My Downvotes</Styled.LinkText>
//     </Link>
//     <Link href="/my-posts">
//       <Styled.LinkText>My Posts</Styled.LinkText>
//     </Link>
//     <Link href="/my-teams">
//       <Styled.LinkText>My Teams</Styled.LinkText>
//     </Link>
//     <Link href="/my-comments">
//       <Styled.LinkText>My Comments</Styled.LinkText>
//     </Link>
//   </Styled.HamburgerMenu>
// )
