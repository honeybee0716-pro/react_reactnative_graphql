import {
  Box,
  Input,
  Button,
  Popover,
  FormControl,
  useToast,
  AlertDialog,
  Checkbox,
  ScrollView,
  Text,
  HStack,
  Pressable
} from 'native-base'
import React, { useState, useRef } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import LoadingSpinner from 'shared/components/LoadingSpinner'
import { theme } from 'shared/styles/theme'
import { CSVLink } from 'react-csv'
import {
  FilterModal,
  Sname,
  Fname,
  Lname,
  Cname,
  Ename,
  Search
} from '../../components/FilterModal'
import IconFilter from '../../components/icons/IconFilter'

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
  console.log(Sname.sortBy)

  const onClose0 = () => setIsOpen0(false)
  const csvLink = useRef()
  const [exportedData, setExportedData] = useState([])
  const [selectedExportItems, setSelectedExportItems] = useState({})
  const [cdata, setCdata] = useState([])
  const [fdata, setFdata] = useState([])

  const [getC] = useLazyQuery(GET_CUSTOMER_DETAILS_BUSINESS)

  const toast = useToast()

  const [tableloading, setTableLoading] = React.useState(true)

  const [createCB, { data, error }] = useMutation(
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
          setTableLoading(false)
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

  const exportProducts = () => {
    let data = []
    Object.keys(selectedExportItems).map((item) => {
      let index = fdata.findIndex((product) => product.id == item)

      let { email, firstName, lastName, companyName } = fdata[index]
      data.push({
        email,
        firstName,
        lastName,
        companyName
      })
    })

    setExportedData(data)

    console.log('exportedData', exportedData)
  }
  React.useEffect(() => {
    if (exportedData.length > 0) {
      csvLink.current.link.click()
      setExportedData([])
    }
  }, [exportedData])

  const handleFilterPress = () => {
    setModalIsOpen(true)
  }
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <DashboardLayout>
      {tableloading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Box w="100%">
          <Box style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Pressable
              backgroundColor={theme.colors.shared.SaleSpinPrimary}
              borderRadius="md"
              paddingX="5"
              paddingY="2.5"
              marginRight="25px"
              height="40px"
              marginTop="10px"
              marginBottom="10px"
              onPress={handleFilterPress}
            >
              <HStack alignItems="center" space="3">
                <Box w="20px">
                  <IconFilter color="white" />
                </Box>
                <HStack>
                  <Text color="white" textDecoration="none">
                    Filter & Sort
                  </Text>
                </HStack>
              </HStack>
            </Pressable>
            <FilterModal
              setModalIsOpen={setModalIsOpen}
              modalIsOpen={modalIsOpen}
            />
            <Button
              onPress={() => {
                setIsOpen0(!isOpen0)
              }}
              style={{
                marginTop: '10px',
                marginRight: '25px',
                marginBottom: '10px',
                width: '150px',
                height: '40px'
              }}
              color={theme.colors.shared.white}
              alignSelf="end"
            >
              create customer
            </Button>

            <CSVLink
              data={exportedData}
              filename="customer.csv"
              className="hidden"
              ref={csvLink}
              target="_blank"
            />
            <Button
              colorScheme="success"
              onPress={exportProducts}
              style={{
                marginTop: '10px',
                marginRight: '25px',
                marginBottom: '10px',
                width: '150px',
                height: '40px'
              }}
              color={theme.colors.shared.white}
              alignSelf="end"
            >
              export
            </Button>
            <AlertDialog isOpen={isOpen0} onClose={onClose0}>
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
                    <input
                      type="text"
                      onChange={(e) =>
                        setItem0({ ...item0, firstName: e.target.value })
                      }
                      placeholder={item0.firstName}
                    />
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
                    <input
                      type="text"
                      onChange={(e) =>
                        setItem0({ ...item0, lastName: e.target.value })
                      }
                      placeholder={item0.lastName}
                    />
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
                    <input
                      type="text"
                      onChange={(e) =>
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
                    <input
                      type="text"
                      onChange={(e) =>
                        setItem0({ ...item0, comapny: e.target.value })
                      }
                      placeholder={item0.comapny}
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
          <Box>
            <ScrollView style={{ overflow: 'scroll' }}>
              <table
                style={{
                  marginTop: '10px',
                  padding: '10px',
                  width: '150%'
                }}
              >
                <tr style={{ textAlign: 'left', height: '50px' }}>
                  <th style={{ width: '250px' }}>Customer Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Company Name</th>
                  <th>id</th>
                  <th>password</th>
                  <th>stripeCustomerID</th>
                </tr>
                {fdata.map((i: any, k) => {
                  return (
                    <tr style={{ backgroundColor: 'white', height: '35px' }}>
                      <td>{i.email}</td>
                      <td>{i.firstName}</td>
                      <td>{i.lastName}</td>
                      <td>{i.companyName}</td>
                      <td>{i.id}</td>
                      <td>{i.password}</td>
                      <td>{i.stripeCustomerID}</td>
                      <Checkbox
                        style={{ marginTop: '30%' }}
                        value={selectedExportItems[i.id] || false}
                        isChecked={selectedExportItems[i.id] || false}
                        onChange={(value) => {
                          let temp = { ...selectedExportItems }
                          value
                            ? (temp = {
                                ...selectedExportItems,
                                [i.id]: value
                              })
                            : delete temp[i.id]
                          setSelectedExportItems({ ...temp })
                        }}
                        accessibilityLabel="Export this lead"
                      />
                      {/* </td> */}
                    </tr>
                  )
                })}
              </table>
            </ScrollView>
          </Box>
        </Box>
      )}
    </DashboardLayout>
  )
}
