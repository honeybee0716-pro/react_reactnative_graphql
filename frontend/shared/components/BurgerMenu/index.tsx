import { useState } from 'react'
import { Link } from 'solito/link'
import { Modal } from '../Modal'

import * as Styled from './styles'

export const BurgerMenu = ({ toggleMenu }: any) => {
  return (
    <Styled.MenuIconContainer onClick={toggleMenu}>
      <Styled.MenuIcon
        src={require('../../assets/icons/hamburger.png')}
        source={require('../../assets/icons/hamburger.png')}
      />
    </Styled.MenuIconContainer>
  )
}
