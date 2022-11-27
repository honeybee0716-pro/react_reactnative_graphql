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
import FileBase64 from 'react-file-base64'

const GET_COMPANY_LOGO = gql`
  query getCompanyLogo {
    getCompanyLogo {
      message
      status
      companyLogo
    }
  }
`

const ADD_COMPANY_LOGO = gql`
  mutation Mutation($addCompanyLogoInput: addCompanyLogoInput) {
    addCompanyLogo(input: $addCompanyLogoInput) {
      message
      status
    }
  }
`

export default function Branding(props: any) {
  const toast = useToast()
  const [item, setItem] = useState({ image: '' })
  const [titem, setTitem] = useState({ image: '' })
  const [getCompanyLogo] = useLazyQuery(GET_COMPANY_LOGO)

  const [addLogo, { data, loading, error }] = useMutation(ADD_COMPANY_LOGO, {
    refetchQueries: [{ query: GET_COMPANY_LOGO }]
  })

  React.useEffect(() => {
    getCompanyLogo({
      onCompleted: async ({ getCompanyLogo }) => {
        if (getCompanyLogo?.status === 'success') {
          console.log(getCompanyLogo)
          setItem({ image: getCompanyLogo.companyLogo })
        }
        if (getCompanyLogo?.message) {
          toast.show({
            description: getCompanyLogo.message
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

  const addLogoHere = async () => {
    addLogo({
      variables: {
        addCompanyLogoInput: {
          companyLogo: titem.image
        }
      },
      onCompleted: async (addCompanyLogoData) => {
        console.log(addCompanyLogoData)
        if (addCompanyLogoData?.addCompanyLogo?.status === 'success') {
          toast.show({
            description: 'logo added successfully'
          })

          return
        }
        if (addCompanyLogoData?.addCompanyLogo?.message) {
          toast.show({
            description: addCompanyLogoData.addCompanyLogo.message
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
        <Center style={{ marginTop: '10px' }}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setTitem({ ...titem, image: base64 })}
          />
          <button onClick={addLogoHere}>add/update logo</button>
          {item.image !== '' && (
            <img
              className="activator"
              style={{
                height: '250px',
                width: '250px',
                objectFit: 'contain',
                backgroundColor: 'white'
              }}
              src={item.image}
              alt="logo"
            />
          )}
        </Center>
      </DashboardLayout>
    </>
  )
}
