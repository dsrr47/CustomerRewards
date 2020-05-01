import React, { useState } from 'react'
import Customer from './Customer'
import data from '../data'

export default function CustomerContainer() {
  const [customers, setCustomers] = useState(data.customers)

  return (
    <div className='w-full container m-auto'>
      {customers.map((customer) => (
        <Customer
          name={customer.name}
          email={customer.email}
          transactions={customer.transaction}
          key={customer._id}
        />
      ))}
    </div>
  )
}
