import { HStack, Spinner } from 'native-base'
import { theme } from '../styles/theme'
import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <HStack
      space={8}
      flex="1"
      justifyContent="center"
      alignItems="center"
      style={{ position: 'absolute', left: '50%', top: '50%' }}
    >
      <Spinner size="lg" color={theme.colors.shared.SaleSpinPrimary} />
    </HStack>
  )
}
export default LoadingSpinner
