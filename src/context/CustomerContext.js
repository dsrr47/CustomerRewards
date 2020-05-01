import React, { useState } from 'react'
import data from '../data.json'
// import { removeDuplicates } from '../Helper'

export const CustomerContext = React.createContext()

export default function CustomerContextProvider(props) {
  const [customers, setCustomers] = useState(data.customers)

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {props.children}
    </CustomerContext.Provider>
  )
}
