import react, { useRef } from 'react'
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
  Popover,
  FormControl,
  useToast,
  AlertDialog,
  ScrollView
} from 'native-base'
import { CSVLink } from 'react-csv'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import FileBase64 from 'react-file-base64'
import IconTrashBin from '../../components/icons/IconTrashBin'
import IconEdit from '../../components/icons/IconEdit'
import LoadingSpinner from '../../components/LoadingSpinner'

const CREATE_PRODUCT = gql`
  mutation Mutation($createProductInput: createProductInput) {
    createProduct(input: $createProductInput) {
      message
      status
    }
  }
`

const GET_PRODUCT_DETAILS = gql`
  query getProductDetailsBusiness {
    getProductDetailsBusiness {
      message
      status
      dataProducts
    }
  }
`
const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductInput: deleteProductInput) {
    deleteProduct(input: $deleteProductInput) {
      message
      status
    }
  }
`

const GET_PRODUCT_BY_ID = gql`
  query getProductById($getProductByIdInput: getProductByIdInput) {
    getProductById(input: $getProductByIdInput) {
      message
      status
      dataProduct
    }
  }
`

const UPDATE_PRODUCT = gql`
  mutation Mutation($updateProductInput: updateProductInput) {
    updateProduct(input: $updateProductInput) {
      message
      status
    }
  }
`

export default function Products(props: any) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen1, setIsOpen1] = React.useState(false)
  const [isOpen0, setIsOpen0] = React.useState(false)
  const [delId, setDelId] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  const csvLink = useRef()
  const [exportedData, setExportedData] = useState([])
  const onClose = () => setIsOpen(false)
  const onClose1 = () => setIsOpen1(false)
  const onClose0 = () => setIsOpen0(false)

  const cancelRef = React.useRef(null)
  const cancelRef1 = React.useRef(null)
  const cancelRef0 = React.useRef(null)

  const toast = useToast()

  const [item0, setItem0] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })
  const [selectedExportItems, setSelectedExportItems] = useState({})
  const [item1, setItem1] = useState({
    name: '',
    id: '',
    price: '',
    description: ''
  })

  const [items, setItems] = useState([])
  const [fitems, setFitems] = useState([])
  console.log('fitems', fitems)
  const initialFocusRef = React.useRef(null)

  const [getProductDetails] = useLazyQuery(GET_PRODUCT_DETAILS)

  const [createP, { data, error }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCT_DETAILS }]
  })

  const [deleteP, { data: data1 }] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCT_DETAILS }]
  })

  const [updateP, { data: data2 }] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCT_DETAILS }]
  })

  const getProducts = () => {
    getProductDetails({
      onCompleted: async ({ getProductDetailsBusiness }) => {
        if (getProductDetailsBusiness?.status === 'success') {
          console.log(getProductDetailsBusiness.dataProducts)
          setItems(getProductDetailsBusiness.dataProducts)
          let temp = getProductDetailsBusiness.dataProducts.filter(
            (i) => i.isDeleted !== true
          )
          setFitems(temp)
          setLoading(false)
        }
        if (getProductDetailsBusiness?.message) {
          toast.show({
            description: getProductDetailsBusiness.message
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
    getProducts()
  }, [])

  React.useEffect(() => {
    //console.log(data)
  }, [data, data1, data2])

  const delP = async (idhere) => {
    deleteP({
      variables: {
        deleteProductInput: {
          id: idhere
        }
      },
      onCompleted: async (deleteProductData) => {
        console.log(deleteProductData)
        if (deleteProductData?.deleteProduct?.status === 'success') {
          toast.show({
            description: 'product deleted successfully'
          })

          return
        }
        if (deleteProductData?.deleteProduct?.message) {
          toast.show({
            description: deleteProductData.deleteProduct.message
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

  const handleS = async () => {
    if (
      item0.name !== '' &&
      item0.description !== '' &&
      item0.price !== '' &&
      item0.image !== ''
    ) {
      createP({
        variables: {
          createProductInput: {
            Name: item0.name,
            Price: parseFloat(item0.price.trim()),
            Description: item0.description,
            Img: item0.image
          }
        },
        onCompleted: async (createProductData) => {
          console.log(createProductData)
          if (createProductData?.createProduct?.status === 'success') {
            toast.show({
              description: 'product created successfully'
            })

            return
          }
          if (createProductData?.createProduct?.message) {
            toast.show({
              description: createProductData.createProduct.message
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
    } else
      toast.show({
        description: 'please fill all fields'
      })
  }

  const editP = async (itemhere) => {
    console.log(itemhere)
    updateP({
      variables: {
        updateProductInput: {
          id: itemhere.id,
          name: item1.name !== '' ? item1.name : itemhere.name,
          price:
            item1.price !== ''
              ? parseFloat(item1.price)
              : parseFloat(itemhere.price),
          description:
            item1.description !== '' ? item1.description : itemhere.description
        }
      },
      onCompleted: async (updateProductData) => {
        console.log(updateProductData)
        if (updateProductData?.updateProduct?.status === 'success') {
          toast.show({
            description: 'product updated successfully'
          })

          return
        }
        if (updateProductData?.updateProduct?.message) {
          toast.show({
            description: updateProductData.updateProduct.message
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
  const exportProducts = () => {
    let data = []
    Object.keys(selectedExportItems).map((item) => {
      let index = fitems.findIndex((product) => product.id == item)

      let { name, price, description, img } = fitems[index]
      data.push({
        name,
        price,
        description,
        img
      })
    })

    setExportedData(data)

    console.log('exportedData', exportedData)
  }
  React.useEffect(() => {
    if (exportedData.length > 0) {
      csvLink.current.link.click()
    }
  }, [exportedData])
  return (
    <>
      <DashboardLayout>
        {loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <Box w="100%">
              <Box>
                <Box
                  style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
                >
                  <Button
                    onPress={() => {
                      setItem0({ ...item0, image: '' })
                      setIsOpen0(!isOpen0)
                    }}
                    style={{
                      marginTop: '10px',
                      marginRight: '25px',
                      width: '150px',
                      height: '40px'
                    }}
                    color={theme.colors.shared.white}
                    alignSelf="end"
                  >
                    create product
                  </Button>

                  <CSVLink
                    data={exportedData}
                    filename="product.csv"
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
                      width: '150px',
                      height: '40px'
                    }}
                    color={theme.colors.shared.white}
                    alignSelf="end"
                  >
                    export
                  </Button>
                </Box>
                <AlertDialog
                  leastDestructiveRef={cancelRef0}
                  isOpen={isOpen0}
                  onClose={onClose0}
                >
                  <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Product Details</AlertDialog.Header>
                    <AlertDialog.Body>
                      <FormControl>
                        <FormControl.Label
                          _text={{
                            fontSize: 'xs',
                            fontWeight: 'medium'
                          }}
                        >
                          Product Name
                        </FormControl.Label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setItem0({ ...item0, name: e.target.value })
                          }
                          placeholder={item0.name}
                        />
                      </FormControl>
                      <FormControl mt="3">
                        <FormControl.Label
                          _text={{
                            fontSize: 'xs',
                            fontWeight: 'medium'
                          }}
                        >
                          Price
                        </FormControl.Label>
                        <input
                          type="number"
                          onChange={(e) =>
                            setItem0({ ...item0, price: e.target.value })
                          }
                          placeholder={item0.price}
                        />
                      </FormControl>
                      <FormControl mt="3">
                        <FormControl.Label
                          _text={{
                            fontSize: 'xs',
                            fontWeight: 'medium'
                          }}
                        >
                          Description
                        </FormControl.Label>
                        <textarea
                          onChange={(e) =>
                            setItem0({ ...item0, description: e.target.value })
                          }
                          placeholder={item0.description}
                        ></textarea>
                      </FormControl>
                      <FormControl mt="3">
                        <FormControl.Label
                          _text={{
                            fontSize: 'xs',
                            fontWeight: 'medium'
                          }}
                        >
                          Upload Image
                        </FormControl.Label>
                        <FileBase64
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setItem0({ ...item0, image: base64 })
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
                          ref={cancelRef0}
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
            <ScrollView style={{ overflow: 'scroll' }}>
              <div style={{ margin: '2px' }}>
                <table
                  style={{ marginTop: '0px', padding: '10px', width: '150%' }}
                >
                  <tr style={{ textAlign: 'left', height: '50px' }}>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>ID</th>
                    <th>Business</th>
                    <th>BusinessID</th>
                    <th></th>
                  </tr>
                  {fitems?.map((item) => (
                    <>
                      <tr style={{ backgroundColor: 'white' }}>
                        <td>
                          <img
                            className="activator"
                            style={{
                              height: '50px',
                              width: '50px',
                              objectFit: 'contain',
                              backgroundColor: 'white'
                            }}
                            src={item.img}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}$</td>
                        <td>{item.description}</td>
                        <td>{item.id}</td>
                        <td>{item.business}</td>
                        <td>{item.businessId}</td>

                        <td
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '120px',
                            alignItems: 'center'
                          }}
                        >
                          <Box>
                            <Button
                              colorScheme="danger"
                              onPress={() => {
                                setDelId(item.id)
                                setIsOpen(!isOpen)
                              }}
                              style={{ marginTop: '10px', marginLeft: '15px' }}
                            >
                              <Box w={{ base: '15px', lg: '14px' }}>
                                <IconTrashBin
                                  color={theme.colors.shared.white}
                                />
                              </Box>
                            </Button>
                            <AlertDialog
                              leastDestructiveRef={cancelRef}
                              isOpen={isOpen}
                              onClose={onClose}
                            >
                              <AlertDialog.Content>
                                <AlertDialog.CloseButton />
                                <AlertDialog.Header>
                                  Delete Product
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  Are you sure you want to delete this product.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button.Group space={2}>
                                    <Button
                                      variant="unstyled"
                                      colorScheme="coolGray"
                                      onPress={onClose}
                                      ref={cancelRef}
                                    >
                                      Cancel
                                    </Button>

                                    <Button
                                      colorScheme="danger"
                                      onPress={() => {
                                        delP(delId)
                                        onClose()
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  </Button.Group>
                                </AlertDialog.Footer>
                              </AlertDialog.Content>
                            </AlertDialog>
                          </Box>

                          <Box>
                            <Button
                              onPress={() => {
                                setItem1({
                                  id: item.id,
                                  name: item.name,
                                  price: item.price,
                                  description: item.description
                                })
                                setIsOpen1(!isOpen1)
                              }}
                              style={{ marginTop: '10px', marginLeft: '15px' }}
                            >
                              <Box w={{ base: '15px', lg: '14px' }}>
                                <IconEdit color={theme.colors.shared.white} />
                              </Box>
                            </Button>

                            <AlertDialog
                              leastDestructiveRef={cancelRef1}
                              isOpen={isOpen1}
                              onClose={onClose1}
                            >
                              <AlertDialog.Content>
                                <AlertDialog.CloseButton />
                                <AlertDialog.Header>
                                  Edit Product
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  <FormControl>
                                    <FormControl.Label
                                      _text={{
                                        fontSize: 'xs',
                                        fontWeight: 'medium'
                                      }}
                                    >
                                      Product Name
                                    </FormControl.Label>
                                    <input
                                      type="text"
                                      placeholder={item1.name}
                                      onChange={(e) =>
                                        setItem1({
                                          ...item1,
                                          name: e.target.value
                                        })
                                      }
                                    />
                                  </FormControl>
                                  <FormControl mt="3">
                                    <FormControl.Label
                                      _text={{
                                        fontSize: 'xs',
                                        fontWeight: 'medium'
                                      }}
                                    >
                                      Price
                                    </FormControl.Label>
                                    <input
                                      type="number"
                                      placeholder={item1.price}
                                      onChange={(e) =>
                                        setItem1({
                                          ...item1,
                                          price: e.target.value
                                        })
                                      }
                                    />
                                  </FormControl>
                                  <FormControl mt="3">
                                    <FormControl.Label
                                      _text={{
                                        fontSize: 'xs',
                                        fontWeight: 'medium'
                                      }}
                                    >
                                      Description
                                    </FormControl.Label>
                                    <textarea
                                      placeholder={item1.description}
                                      onChange={(e) =>
                                        setItem1({
                                          ...item1,
                                          description: e.target.value
                                        })
                                      }
                                    ></textarea>
                                  </FormControl>
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button.Group space={2}>
                                    <Button
                                      variant="unstyled"
                                      colorScheme="coolGray"
                                      onPress={onClose1}
                                      ref={cancelRef1}
                                    >
                                      Cancel
                                    </Button>

                                    <Button
                                      colorScheme="success"
                                      onPress={() => {
                                        editP(item1)
                                        onClose1()
                                      }}
                                    >
                                      Save
                                    </Button>
                                  </Button.Group>
                                </AlertDialog.Footer>
                              </AlertDialog.Content>
                            </AlertDialog>
                          </Box>

                          <Box style={{ marginLeft: 20, marginTop: 7 }}>
                            <Checkbox
                              value={selectedExportItems[item.id] || false}
                              isChecked={selectedExportItems[item.id] || false}
                              onChange={(value) => {
                                let temp = { ...selectedExportItems }
                                value
                                  ? (temp = {
                                      ...selectedExportItems,
                                      [item.id]: value
                                    })
                                  : delete temp[item.id]
                                setSelectedExportItems({ ...temp })
                              }}
                              accessibilityLabel="Export this lead"
                            />
                          </Box>
                        </td>
                      </tr>
                    </>
                  ))}
                </table>
              </div>
            </ScrollView>
          </>
        )}
      </DashboardLayout>
    </>
  )
}
