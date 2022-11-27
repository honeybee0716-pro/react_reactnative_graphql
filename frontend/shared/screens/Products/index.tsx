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
  AlertDialog
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import FileBase64 from 'react-file-base64';
import IconTrashBin from '../../components/icons/IconTrashBin'

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

  const [isOpen, setIsOpen] = React.useState(false);
  const [delId,setDelId]=React.useState('')

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  const toast = useToast()

  const [item0, setItem0] = useState({ name: '',price:'',description:'', image: '' });
  const [item1, setItem1] = useState({ name: '',price:'',description:''});

  const [items, setItems] = useState([])
  const [fitems, setFitems] = useState([])

  const initialFocusRef = React.useRef(null);

  const [getProductDetails] = useLazyQuery(GET_PRODUCT_DETAILS )

  const [createP, { data, loading, error }] = useMutation(CREATE_PRODUCT,{
    refetchQueries: [{ query: GET_PRODUCT_DETAILS }],
  })

  const [deleteP, { data:data1}] = useMutation(DELETE_PRODUCT,{
    refetchQueries: [{ query: GET_PRODUCT_DETAILS }],
  })

  const [updateP, { data:data2}] = useMutation(UPDATE_PRODUCT,{
    refetchQueries: [{ query: GET_PRODUCT_DETAILS }],
  })

  const getProducts = ()=>{
    getProductDetails({
      onCompleted: async ({ getProductDetailsBusiness }) => {
        if (
          getProductDetailsBusiness?.status === 'success'
        ) {
          console.log(getProductDetailsBusiness.dataProducts)
          setItems(getProductDetailsBusiness.dataProducts)
          let temp = getProductDetailsBusiness.dataProducts.filter(i=>i.isDeleted!==true)
          setFitems(temp)
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
  React.useEffect(()=>{
    getProducts()
  },[])

  React.useEffect(()=>{
    //console.log(data)
  },[data,data1,data2])

  const delP = async (idhere)=>{
    
    deleteP({
      variables: {
        deleteProductInput: {
          id:idhere
        }
      },
      onCompleted: async (deleteProductData) => {
        console.log(deleteProductData)
        if (
          deleteProductData?.deleteProduct?.status === 'success'
        ) {
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

  const handleS = async ()=>{
    if(item0.name!=='' && item0.description!==''&& item0.price!=='' && item0.image!=='')
    {
    createP({
      variables: {
        createProductInput: {
          Name:item0.name,
          Price: parseFloat(item0.price.trim()),
          Description: item0.description,
          Img:item0.image
        }
      },
      onCompleted: async (createProductData) => {
        console.log(createProductData)
        if (
          createProductData?.createProduct?.status === 'success'
        ) {
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
  }else
  toast.show({
    description:"please fill all fields"
  })
  }

  const editP = async (itemhere)=>{
    console.log(itemhere)
    updateP({
      variables: {
        updateProductInput: {
          id:itemhere.id,
          name:item1.name!==''?item1.name:itemhere.name,
          price:item1.price!==''?parseFloat(item1.price):parseFloat(itemhere.price),
          description:item1.description!==''?item1.description:itemhere.description,
        }
      },
      onCompleted: async (updateProductData) => {
        console.log(updateProductData)
        if (
          updateProductData?.updateProduct?.status === 'success'
        ) {
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

  return (
    <>
    <DashboardLayout>
    <Box w="100%" alignItems="center">
      <Popover initialFocusRef={initialFocusRef} trigger={triggerProps => {
      return <Button {...triggerProps}>create a new product</Button>;
    }}>
        <Popover.Content width="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          {
          /* @ts-ignore */
        }
          <Popover.Header>Product Details</Popover.Header>
          <Popover.Body>
            <FormControl>
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Product Name
              </FormControl.Label>
              <input type="text" onChange={e => setItem0({ ...item0, name: e.target.value })}/>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Price
              </FormControl.Label>
              <input type="number"  onChange={e => setItem0({ ...item0, price: e.target.value })} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Description
              </FormControl.Label>
              <textarea onChange={e => setItem0({ ...item0, description: e.target.value })} ></textarea>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Upload Image
              </FormControl.Label>
              <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem0({ ...item0, image: base64 })}
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
    <div style={{margin:"5px",marginTop:"20px"}}>
    <div style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",gridTemplateRows:"auto"}}>
    {fitems?.map(item => (
      <>
  <div >
    <img className="activator" style={{  height: "250px",width:"250px",objectFit:"contain",backgroundColor:"white" }} src={item.img} />
    <p>Product Name: {item.name}</p>
    <p>Price: {item.price}$</p>
    <p>{item.description}</p>

    <Box style={{width:"60px",height:"20px",marginBottom:"14px"}}>
    
      <Button colorScheme="danger" onPress={() => {
        setDelId(item.id)
        setIsOpen(!isOpen)
        }}>
      <Box w={{ base: '15px', lg: '14px' }}><IconTrashBin color={theme.colors.shared.white}/></Box>
      </Button>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Product</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to delete this product.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              
              <Button colorScheme="danger" onPress={()=>{
                delP(delId)
                onClose()
                }}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box >
   
    
      <Popover placement="top left" onOpen={()=>{
        setItem1({ name: item.name, price: item.price, description: item.description })
      }} trigger={triggerProps => {
        
      return <Button {...triggerProps} style={{backgroundColor:"gray",width:"60px",height:"30px",marginTop:"5px"}}  colorScheme="danger">
              Edit
            </Button>;
    }}>
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Edit Product</Popover.Header>
          <Popover.Body>
          <FormControl>
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Product Name
              </FormControl.Label>
              <input type="text" placeholder={item.name} onChange={e => setItem1({ ...item1, name: e.target.value })}/>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Price
              </FormControl.Label>
              <input type="number" placeholder={item.price} onChange={e => setItem1({ ...item1, price: e.target.value })}/>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Description
              </FormControl.Label>
              <textarea placeholder={item.description} onChange={e => setItem1({ ...item1, description: e.target.value })}></textarea>
            </FormControl>
          
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={()=>{ editP(item) }}>Save</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    
  </div>
  </>
))}
</div>
    </div>
    </DashboardLayout>
    </>
  )
}