import react,{useRef,useEffect} from 'react'
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
  FormControl,
  AlertDialog
} from 'native-base'
import { CSVLink } from "react-csv";
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
  const [isOpen0, setIsOpen0] = React.useState(false)
  const toast = useToast()
  const [transactions, setTransactions] = useState([])
  const [getT] = useLazyQuery(GET_TRANSACTIONS)
  const [cT, { data }] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: [{ query: GET_TRANSACTIONS }]
  })
  const csvLink = useRef()
  const [exportedData,setExportedData]=useState([])
  const [selectedExportItems,setSelectedExportItems]=useState({})
  const onClose0 = () => setIsOpen0(false)

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
  const exportProducts=()=>{
    
    let data=[]
      Object.keys(selectedExportItems).map((item)=>{
   
  let index=transactions.findIndex((product)=>product.id==item)
  
  let {id,purchaseAmount
    ,transactionDate}=transactions[index]
         data.push(
     {
      id,purchaseAmount
      ,transactionDate
     }
   )
      })
  
  setExportedData(data)
  
  
  console.log("exportedData",exportedData)
  
    }
  React.useEffect(()=>{
   if(exportedData.length>0) {
    csvLink.current.link.click()
    }
  },[exportedData])
  console.log("transaction",transactions)
  return (
    <>
      <DashboardLayout>
        <Box w="100%" >
          {/*<Popover
            initialFocusRef={initialFocusRef}
            trigger={(triggerProps) => {
              return <Button {...triggerProps}>Create a new order</Button>
            }}
          >
            <Popover.Content width="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              
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
          </Popover>*/}
           <Box style={{flexDirection:"row",justifyContent:"flex-end"}}>
                    <Button
                      onPress={() => {
                        setIsOpen0(!isOpen0)
                      }}
                      style={{marginTop:"10px",marginRight:"25px",
                      marginBottom:"0px",width:"150px",height:"40px"}}
                      color={theme.colors.shared.white}
                      alignSelf="end"
                    >
                        create order
                    </Button>



       <CSVLink
         data={exportedData}
         filename='order.csv'
         className='hidden'
         ref={csvLink}
         target='_blank'
      />
                    <Button
                       colorScheme="success"
                      onPress={exportProducts}
                      style={{marginTop:"10px",marginRight:"25px",width:"150px",height:"40px"}}
                      color={theme.colors.shared.white}
                      alignSelf="end"
                    >
                        export
                    </Button>
                    <AlertDialog
                      
                      isOpen={isOpen0}
                      
                      onClose={onClose0}
                    >
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Order Details</AlertDialog.Header>
                        <AlertDialog.Body>
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
                    placeholder={item0.purchaseAmount}
                    onChange={(e) =>
                      setItem0({ ...item0, purchaseAmount: e.target.value })
                    }
                  />
                </FormControl>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={onClose0}
                              
                            >
                              Cancel
                            </Button>

                            <Button
                              colorScheme="success"
                              onPress={() => {
                                handleS()
                                onClose0()
                              }}
                            >
                              Save
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Box>
        </Box>
        <table style={{ marginTop: '20px', padding: '10px' }}>
          <tr style={{ textAlign: 'left', height: '50px' }}>
            <th>Order Id</th>
            <th>Purchase Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
          {transactions.map((tr) => {
            return (
              <tr style={{ backgroundColor: 'white', height: '35px' }}>
                <td>{tr?.id}</td>
                <td>{tr?.purchaseAmount}</td>
                <td>{tr?.transactionDate}</td>
               
                <Checkbox
                    style={{marginTop:"30%"}}
              value={selectedExportItems[tr.id]||false}
              isChecked={selectedExportItems[tr.id]||false}
              onChange={(value)=>{
              let temp={...selectedExportItems}
             value? temp={...selectedExportItems,[tr.id]:value}:delete temp[tr.id]
              setSelectedExportItems({...temp})
              }}
              accessibilityLabel="Export this lead"
            />
              </tr>
            )
          })}
        </table>
      </DashboardLayout>
    </>
  )
}
