import React from 'react'
import Transactions from './Transactions'
import moment from 'moment'

export default function Customer({ name, email, transactions }) {
  // Calculate reward per purchase
  const calculateReward = (amount) => {
    let reward = 0
    amount = Math.floor(amount)
    if (amount < 50) {
      reward = 0
    }
    if (amount <= 100 && amount > 50) {
      reward = amount - 50
    }
    if (amount > 100) {
      reward = (amount - 100) * 2
      reward += 50
    }
    return reward
  }

  // Calculate total Rewards
  const calculateTotalRewards = (arr, fn) => {
    let rewards = []
    // map rewards into array
    arr.map((num) => rewards.push(fn(num.amount)))

    //reduce array into single value
    return rewards.reduce((acc, num) => acc + num, 0)
  }

  // Calculate transaction age
  const calculateAge = (date) => {
    // formate transaction date
    const transactionDate = moment(date, 'YYYY-MM-DD')
    // get current time
    const now = moment().startOf('M')
    // calculate date
    return Math.floor(moment.duration(now.diff(transactionDate)).asMonths())
  }

  return (
    <div className='bg-white rounded shadow mb-5 p-4'>
      <div className='flex justify-between items-center w-full pb-2 border-b'>
        <div className='flex flex-col'>
          <h3 className='text-lg font-semibold tracking-wide text-gray-900'>
            {name}
          </h3>
          <p className='text-sm text-purple-500 flex items-center'>
            <svg
              className='fill-current text-purple-500 w-3 h-3 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z' />
            </svg>
            {email}
          </p>
        </div>
        <h2 className='flex items-center text-xl text-purple-800 font-bold'>
          <svg
            className='fill-current text-purple-700 w-5 h-5 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0 1 10 .76 3 3 0 0 1 14.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
          </svg>
          Total Rewards: {calculateTotalRewards(transactions, calculateReward)}
        </h2>
      </div>
      <div className='w-full'>
        <Transactions
          transactions={transactions}
          key={transactions.id}
          calculateReward={calculateReward}
          calculateAge={calculateAge}
          calculateTotalRewards={calculateTotalRewards}
        />
      </div>
    </div>
  )
}
