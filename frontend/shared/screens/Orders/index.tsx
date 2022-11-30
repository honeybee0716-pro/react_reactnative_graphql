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
  Pressable,
  useToast,
  Popover,
  FormControl
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import DashboardLayout from 'shared/layouts/DashboardLayout'

const GET_TRANSACTIONS = gql`
  query getAllTransactions {
    getAllTransactions {
      message
      status
      dataTransactions
    }
  }
`

const CREATE_TRANSACTION = gql`
  mutation Mutation($createTransactionInput: createTransactionInput) {
    createTransaction(input: $createTransactionInput) {
      message
      status
    }
  }
`

export default function Orders(props: any) {
  const initialFocusRef = React.useRef(null)
  const [item0, setItem0] = useState({ purchaseAmount: '' })

  const toast = useToast()
  const [transactions, setTransactions] = useState([])
  const [getT] = useLazyQuery(GET_TRANSACTIONS)
  const [cT, { data }] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: [{ query: GET_TRANSACTIONS }]
  })

  React.useEffect(() => {
    getT({
      onCompleted: async ({ getAllTransactions }) => {
        if (getAllTransactions?.status === 'success') {
          console.log(getAllTransactions)
          setTransactions(getAllTransactions.dataTransactions)
        }
        if (getAllTransactions?.message) {
          toast.show({
            description: getAllTransactions.message
          })
          return
        } else {
          toast.show({
            description: 'There was a problem....'
          })
        }
      },
      onError: (error) => {
        toast.show({
          description: `${error.message}`
        })
      }
    })
  }, [])

  React.useEffect(() => {}, [data])

  const handleS = async () => {
    cT({
      variables: {
        createTransactionInput: {
          purchaseAmount: parseFloat(item0.purchaseAmount)
        }
      },
      onCompleted: async (createTransactionData) => {
        console.log(createTransactionData)
        if (createTransactionData?.createTransaction?.status === 'success') {
          toast.show({
            description: 'transaction created successfully'
          })

          return
        }
        if (createTransactionData?.createTransaction?.message) {
          toast.show({
            description: createTransactionData.createTransaction.message
          })
          return
        }
        toast.show({
          description: 'There was an error'
        })
        return
      },
      onError: (error) => {
        toast.show({
          description: `${error.message}`
        })
      }
    })
  }

  return (
    <>
      <DashboardLayout>
        <Box w="100%" alignItems="center">
          <Popover
            initialFocusRef={initialFocusRef}
            trigger={(triggerProps) => {
              return <Button {...triggerProps}>Create a new order</Button>
            }}
          >
            <Popover.Content width="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              {/* @ts-ignore */}
              <Popover.Header>Order Details</Popover.Header>
              <Popover.Body>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Purchase Amount
                  </FormControl.Label>
                  <input
                    type="number"
                    onChange={(e) =>
                      setItem0({ ...item0, purchaseAmount: e.target.value })
                    }
                  />
                </FormControl>
              </Popover.Body>
              <Popover.Footer>
                <Button.Group>
                  <Button colorScheme="coolGray" variant="ghost">
                    Cancel
                  </Button>
                  <Button onPress={handleS}>Save</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
          </Popover>
        </Box>
        <table style={{ marginTop: '40px', padding: '10px' }}>
          <tr style={{ textAlign: 'left', height: '50px' }}>
            <th>Order Id</th>
            <th>Purchase Amount</th>
            <th>Date</th>
          </tr>
          {transactions.map((tr) => {
            return (
              <tr style={{ backgroundColor: 'white', height: '35px' }}>
                <td>{tr?.id}</td>
                <td>{tr?.purchaseAmount}</td>
                <td>{tr?.transactionDate}</td>
              </tr>
            )
          })}
        </table>
      </DashboardLayout>
    </>
  )
}
