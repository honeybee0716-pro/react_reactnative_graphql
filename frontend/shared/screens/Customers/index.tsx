import { Box, Input, Button, Popover, FormControl, useToast } from 'native-base'
import React, { useState } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import DashboardLayout from 'shared/layouts/DashboardLayout'

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
  const initialFocusRef = React.useRef(null) //first name
  const initialFocusRef1 = React.useRef(null) // last name
  const initialFocusRef2 = React.useRef(null) // email
  const initialFocusRef3 = React.useRef(null) // company

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
          email: initialFocusRef2.current.value,
          firstName: initialFocusRef.current.value,
          lastName: initialFocusRef1.current.value,
          companyName: initialFocusRef3.current.value
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
        <h3>Search your customers</h3>
        <Box w="100%" alignItems="center">
          <Popover
            initialFocusRef={initialFocusRef}
            trigger={(triggerProps) => {
              return <Button {...triggerProps}>Create a new customer</Button>
            }}
          >
            <Popover.Content width="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              {/* @ts-ignore */}
              <Popover.Header>Personal Details</Popover.Header>
              <Popover.Body>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    First Name
                  </FormControl.Label>
                  <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
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
                  <Input rounded="sm" fontSize="xs" ref={initialFocusRef1} />
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
                  <Input rounded="sm" fontSize="xs" ref={initialFocusRef2} />
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
                  <Input rounded="sm" fontSize="xs" ref={initialFocusRef3} />
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
        <Box>
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setFilter(e.target.value)}
          />
            <table style={{marginTop:"40px",padding:"10px"}}>
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
