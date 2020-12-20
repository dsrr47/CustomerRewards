 import React, { useState } from 'react'
import Customer from './Customer'
import data from '../data'

export default function CustomerContainer() {
  const customers = data.customers

  //Search Customers
  const [filter, setFilter] = useState("")

  const filteredCustomers = customers.filter(customer => (
    customer.name.toLowerCase().includes(filter)
  ))

  const customersToDisplay = filter ? filteredCustomers : customers

  return (
    <div className='w-full container m-auto'>
      <input
        className="border-purple-200 border shadow-inner w-full mx-0 my-10 p-2 rounded"
        type="text"
        placeholder="Search"
        value={filter}
        onChange={e => setFilter(e.target.value.toLowerCase())}
      />
      {!filteredCustomers.length && (
        <div>No Matches</div>
      )}
      {customersToDisplay.map((customer) => (
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
