import { Checkbox } from 'native-base'
import React, { useState } from 'react'

export const CustomerTable = () => {
  const [selectedExportItems, setSelectedExportItems] = useState({})

  return (
    <tr style={{ backgroundColor: 'white', height: '35px' }}>
      <td>{i.firstName}</td>
      <td>{i.lastName}</td>
      <td>{i.email}</td>
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
}
