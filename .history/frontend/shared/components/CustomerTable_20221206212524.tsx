import { Checkbox, ScrollView } from 'native-base'
import React, { useState } from 'react'

export const CustomerTable = (props) => {
  const [selectedExportItems, setSelectedExportItems] = useState({})

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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company Name</th>
          <th style={{ width: '250px' }}>Customer Email</th>
          <th>id</th>
          <th>password</th>
          <th>stripeCustomerID</th>
        </tr>
        {props.source.map((i: any, k) => {
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
