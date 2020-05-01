import React from 'react'
import CustomerContainer from './components/CustomerContainer'

function App() {
  return (
    <div className='App bg-purple-100'>
      <div className='flex items-center bg-purple-700 text-purple-100 py-2'>
        <h2 className='container m-auto text-2xl font-bold'>
          Customer Rewards
        </h2>
      </div>
      <CustomerContainer />
    </div>
  )
}

export default App
