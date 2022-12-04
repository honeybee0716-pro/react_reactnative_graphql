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
  AlertDialog,
  FormControl,
  useToast
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import DashboardLayout from 'shared/layouts/DashboardLayout'

const ADD_TIER = gql`
  mutation Mutation($addTiersInput: addTiersInput) {
    addTiers(input: $addTiersInput) {
      message
      status
    }
  }
`

const GET_TIER = gql`
  query getTiers {
    getTiers {
      message
      status
      tiersData
    }
  }
`

export default function Tiers(props: any) {
  const toast = useToast()
  const [isOpen0, setIsOpen0] = React.useState(false)
  const onClose0 = () => setIsOpen0(false)
  const cancelRef0 = React.useRef(null)
  const [item0, setItem0] = useState({
    name: '',
    color: '',
    start: '',
    end: ''
  })

  const [tiers,setTiers]=useState([])
  const [getT] = useLazyQuery(GET_TIER)
  const [aT, { data}] = useMutation(ADD_TIER, {
    refetchQueries: [{ query: GET_TIER }]
  })

  const handleS = async () =>{
    if(item0.start==='' || item0.end==='' || item0.name==='' || item0.color==='')
    {
      toast.show(
        {
          description:"please fill all fields"
        }
      )
    }else
    {
      aT({
        variables: {
          addTiersInput: {
           name:item0.name,
           color:item0.color,
           start:parseInt(item0.start),
           end:parseInt(item0.end)
          }
        },
        onCompleted: async (addTiersData) => {
          console.log(addTiersData)
          if (addTiersData?.addTiers?.status === 'success') {
            toast.show({
              description: 'tier added successfully'
            })
  
            return
          }
          if (addTiersData?.addTiers?.message) {
            toast.show({
              description: addTiersData.addTiers.message
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
  }

  React.useEffect(()=>{
    getT({
      onCompleted: async ({ getTiers }) => {
        if (getTiers?.status === 'success') {
          console.log(getTiers.tiersData)
         setTiers(getTiers.tiersData)
        }
        if (getTiers?.message) {
          return
        } else {
          
        }
      },
      onError: (error) => {
        toast.show({
          description: `${error.message}`
        })
      }
    })
  },[])

  return (
    <>
      <DashboardLayout>
      <Box w="100%">
           <Box>
                    <Button
                      onPress={() => {
                        setIsOpen0(!isOpen0)
                      }}
                      style={{marginTop:"10px",marginRight:"25px",width:"150px",height:"40px"}}
                      color={theme.colors.shared.white}
                      alignSelf="end"
                    >
                        create tier
                    </Button>
                    <AlertDialog
                      leastDestructiveRef={cancelRef0}
                      isOpen={isOpen0}
                      onClose={onClose0}
                    >
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Tier Details</AlertDialog.Header>
                        <AlertDialog.Body>
                        <FormControl>
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Tier Name
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
                    Range start
                  </FormControl.Label>
                  <input
                    type="number"
                    onChange={(e) =>
                      setItem0({ ...item0, start: e.target.value })
                    }
                    placeholder={item0.start}
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Range end
                  </FormControl.Label>
                  <input
                  type="number"
                    onChange={(e) =>
                      setItem0({ ...item0, end: e.target.value })
                    }
                    placeholder={item0.end}
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 'medium'
                    }}
                  >
                    Color Hex
                  </FormControl.Label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setItem0({ ...item0, color: e.target.value })
                    }
                    placeholder={item0.color}
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
        <Box>
        <table style={{marginTop:"10px",padding:"10px"}}>
  <tr style={{textAlign:"left", height:"50px"}}>
    <th>Name</th>
    <th>Range</th>
    <th>Color</th>
  </tr>
          {
            tiers.map((t,i)=>{
              return(
                <tr style={{backgroundColor:"white",height:"35px"}}>
                <td>{t.name}</td>
                <td>{t.rangeStart}-{t.rangeEnd}</td>
                <td>
                <div style={{height:"10px",width:"10px",backgroundColor:t.color}}></div>
                </td>
                </tr>
              )
            })
          }
          </table>
        </Box>
      </DashboardLayout>
    </>
  )
}