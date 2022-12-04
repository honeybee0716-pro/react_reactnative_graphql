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
import LoadingSpinner from '../../components/LoadingSpinner'

const SET_INTEGRATION = gql`
  mutation Mutation($setIntegrationSettingsInput: setIntegrationSettingsInput) {
    setIntegrationSettings(input: $setIntegrationSettingsInput) {
      message
      status
    }
  }
`

const GET_INTEGRATION_SETTING = gql`
  query getIntegrationSettings {
    getIntegrationSettings {
      message
      status
      lineAPIKey
      shopeeAPIKey
      lazadaAPIKey
    }
  }
`

export default function Integrations(props: any) {
  const toast = useToast()

  const [setI, { data: data2 }] = useMutation(SET_INTEGRATION, {
    refetchQueries: [{ query: GET_INTEGRATION_SETTING }]
  })

  const [getIs] = useLazyQuery(GET_INTEGRATION_SETTING)

  const [item0, setItem0] = useState({
    lineAPIKey: '',
    shopeeAPIKey: '',
    lazadaAPIKey: ''
  })
  const [item1, setItem1] = useState({
    lineAPIKey: null,
    shopeeAPIKey: null,
    lazadaAPIKey: null
  })
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getIs({
      onCompleted: async ({ getIntegrationSettings }) => {
        if (getIntegrationSettings?.status === 'success') {
          console.log(getIntegrationSettings)
          setItem1({
            lineAPIKey: getIntegrationSettings.lineAPIKey,
            shopeeAPIKey: getIntegrationSettings.shopeeAPIKey,
            lazadaAPIKey: getIntegrationSettings.lazadaAPIKey
          })
          setLoading(false)
        }
        if (getIntegrationSettings?.message) {
          /*toast.show({
              description: getIntegrationSettings.message
            })*/
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

  React.useEffect(() => {}, [data2])

  const handleS = async () => {
    setI({
      variables: {
        setIntegrationSettingsInput: {
          lineAPIKey:
            item0.lineAPIKey !== '' ? item0.lineAPIKey : item1.lineAPIKey,
          shopeeAPIKey:
            item0.shopeeAPIKey !== '' ? item0.shopeeAPIKey : item1.shopeeAPIKey,
          lazadaAPIKey:
            item0.lazadaAPIKey !== '' ? item0.lazadaAPIKey : item1.lazadaAPIKey
        }
      },
      onCompleted: async (setIntegrationSettingsData) => {
        console.log(setIntegrationSettingsData)
        if (
          setIntegrationSettingsData?.setIntegrationSettings?.status ===
          'success'
        ) {
          toast.show({
            description: 'set integration settings for business successfully'
          })

          return
        }
        if (setIntegrationSettingsData?.setIntegrationSettings?.message) {
          toast.show({
            description:
              setIntegrationSettingsData.setIntegrationSettings.message
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
        {loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <Center>
              <form
                style={{ width: '200px', height: '500px', marginTop: '100px' }}
              >
                <FormControl>
                  <FormControl.Label>
                    <text style={{ fontSize: '12px' }}>Line Api Key</text>
                  </FormControl.Label>
                  <input
                    type="text"
                    style={{ margin: '5px', height: '25px' }}
                    placeholder={
                      item1?.lineAPIKey ? item1.lineAPIKey : 'value not set yet'
                    }
                    onChange={(e) =>
                      setItem0({ ...item0, lineAPIKey: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>
                    <text style={{ fontSize: '12px' }}>Shope Api Key</text>
                  </FormControl.Label>
                  <input
                    type="text"
                    style={{ margin: '5px', height: '25px' }}
                    placeholder={
                      item1?.shopeeAPIKey
                        ? item1.shopeeAPIKey
                        : 'value not set yet'
                    }
                    onChange={(e) =>
                      setItem0({ ...item0, shopeeAPIKey: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>
                    <text style={{ fontSize: '12px' }}>Lazada Api Key</text>
                  </FormControl.Label>
                  <input
                    type="text"
                    style={{
                      margin: '5px',
                      height: '25px',
                      marginBottom: '20px'
                    }}
                    placeholder={
                      item1?.lazadaAPIKey
                        ? item1.lazadaAPIKey
                        : 'value not set yet'
                    }
                    onChange={(e) =>
                      setItem0({ ...item0, lazadaAPIKey: e.target.value })
                    }
                  />
                </FormControl>
                <Button style={{ height: '30px' }} onPress={handleS}>
                  Save
                </Button>
              </form>
            </Center>
          </>
        )}
      </DashboardLayout>
    </>
  )
}
