import { HStack, Spinner } from 'native-base'
import { theme } from 'shared/styles/theme'

export const LoadingSpinner = () => {
  return (
    <HStack space={8} flex="1" justifyContent="center" alignItems="center">
      <Spinner size="lg" color={theme.colors.shared.SaleSpinPrimary} />
    </HStack>
  )
}
