import { Box, Input, Button, Popover, FormControl, useToast,AlertDialog } from 'native-base'
import React, { useState } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import { theme } from 'shared/styles/theme'

const CREATE_CUSTOMER_WITH_BUSINESS = gql`
  mutation Mutation(
    $createCustomerWithBusinessInput: createCustomerWithBusinessInput
  ) {
    createCustomerWithBusiness(input: $createCustomerWithBusinessInput) {
      message
      status
    }
  }
`

const GET_CUSTOMER_DETAILS_BUSINESS = gql`
  query getCustomerDetailsBusiness {
    getCustomerDetailsBusiness {
      message
      status
      dataBusiness
    }
  }
`

export default function Customer(props: any) {
  const [isOpen0, setIsOpen0] = React.useState(false)
  const [item0, setItem0] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comapny: ''
  })

  const onClose0 = () => setIsOpen0(false)

  const [cdata, setCdata] = useState([])
  const [fdata, setFdata] = useState([])

  const [getC] = useLazyQuery(GET_CUSTOMER_DETAILS_BUSINESS)

  const [filter, setFilter] = useState('')

  const toast = useToast()

  const [createCB, { data, loading, error }] = useMutation(
    CREATE_CUSTOMER_WITH_BUSINESS,
    {
      refetchQueries: [{ query: GET_CUSTOMER_DETAILS_BUSINESS }]
    }
  )

  const getCs = () => {
    getC({
      onCompleted: async ({ getCustomerDetailsBusiness }) => {
        if (getCustomerDetailsBusiness?.status === 'success') {
          console.log(getCustomerDetailsBusiness.dataBusiness)
          setCdata(getCustomerDetailsBusiness.dataBusiness)
          setFdata(getCustomerDetailsBusiness.dataBusiness)
        }
        if (getCustomerDetailsBusiness?.message) {
          toast.show({
            description: getCustomerDetailsBusiness.message
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
  }
  React.useEffect(() => {
    getCs()
  }, [])

  React.useEffect(() => {
    //console.log(data)
  }, [data])

  React.useEffect(() => {
    if (filter !== '') {
      let temp = cdata.filter((i) => {
        return i.email.search(filter) !== -1
      })
      setFdata(temp)
    } else setFdata(cdata)
  }, [filter])

  const handleS = async () => {
    //console.log(initialFocusRef.current.value)
    createCB({
      variables: {
        createCustomerWithBusinessInput: {
          email: item0.email,
          firstName: item0.firstName,
          lastName: item0.lastName,
          companyName: item0.comapny
        }
      },
      onCompleted: async (signUpUserWithData) => {
        console.log(signUpUserWithData)
        if (
          signUpUserWithData?.createCustomerWithBusiness?.status === 'success'
        ) {
          toast.show({
            description: 'Customer created successfully.'
          })
          //getCs()
          return
        }
        if (signUpUserWithData?.createCustomerWithBusiness?.message) {
          toast.show({
            description: signUpUserWithData.createCustomerWithBusiness.message
          })
          return
        }
        toast.show({
          description: 'There was an error.'
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
        
        <Box w="100%" >
          <Box>
                    <Button
                      onPress={() => {
                        setIsOpen0(!isOpen0)
                      }}
                      style={{marginTop:"10px",marginRight:"25px",
                      marginBottom:"10px",width:"150px",height:"40px"}}
                      color={theme.colors.shared.white}
                      alignSelf="end"
                    >
                        create customer
                    </Button>
                    <AlertDialog
                      
                      isOpen={isOpen0}
                      
                      onClose={onClose0}
                    >
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Customer Details</AlertDialog.Header>
                        <AlertDialog.Body>
                        <FormControl>
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    First Name
                  </FormControl.Label>
                  <input type="text"    onChange={(e) =>
                      setItem0({ ...item0, firstName: e.target.value })
                    }
                    placeholder={item0.firstName} />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Last Name
                  </FormControl.Label>
                  <input type="text"   onChange={(e) =>
                      setItem0({ ...item0, lastName: e.target.value })
                    }
                    placeholder={item0.lastName}/>
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Email
                  </FormControl.Label>
                  <input type="text"  onChange={(e) =>
                      setItem0({ ...item0, email: e.target.value })
                    }
                    placeholder={item0.email}
                    />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Company
                  </FormControl.Label>
                  <input type="text"    onChange={(e) =>
                      setItem0({ ...item0, comapny: e.target.value })
                    }
                    placeholder={item0.comapny} />
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
        <Box>
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setFilter(e.target.value)}
            style={{height:"40px",margin:"5px",borderRadius:"25px",
            borderWidth:"0px",borderColor:"none",paddingLeft:"10px",paddingRight:"10px"}}
          />
            <table style={{marginTop:"10px",padding:"10px"}}>
  <tr style={{textAlign:"left", height:"50px"}}>
    <th>Customer Email</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Customer Company</th>
  </tr>
          {fdata.map((i: any, k) => {
            return (
              <tr style={{backgroundColor:"white",height:"35px"}}>
                  <td>{i.email}</td>
                  <td>{i.firstName}</td>
                  <td>{i.lastName}</td>
                  <td>{i.companyName}</td>
              </tr>
            )
          })}
          </table>
        </Box>
      </DashboardLayout>
    </>
  )
}
