import { useToast, Checkbox, ScrollView } from 'native-base'
import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

const GET_CUSTOMER_DETAILS_BUSINESS = gql`
  query getCustomerDetailsBusiness {
    getCustomerDetailsBusiness {
      message
      status
      dataBusiness
    }
  }
`
export const CustomerTable = () => {
  const [selectedExportItems, setSelectedExportItems] = useState({})
  const [fdata, setFdata] = useState([])

  const [getC] = useLazyQuery(GET_CUSTOMER_DETAILS_BUSINESS)

  const toast = useToast()

  const getCs = () => {
    getC({
      onCompleted: async ({ getCustomerDetailsBusiness }) => {
        if (getCustomerDetailsBusiness?.status === 'success') {
          console.log(getCustomerDetailsBusiness.dataBusiness)
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

  return (
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
          <th style={{ width: '250px' }}>Customer Email</th>
          <th>id</th>
          <th>password</th>
          <th>stripeCustomerID</th>
        </tr>
        {fdata.map((i: any, k) => {
          return (
            <tr style={{ backgroundColor: 'white', height: '35px' }}>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
              <td>{i.companyName}</td>
              <td>{i.email}</td>
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
  )
}
