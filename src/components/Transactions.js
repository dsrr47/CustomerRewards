import React, { useState } from 'react'
import moment from 'moment'
import MonthlyTransactions from './MonthlyTransactions'

export default function Transactions({
  transactions,
  calculateAge,
  calculateReward,
  calculateTotalRewards,
}) {
  const one = []
  const two = []
  const three = []
  const [lessThanThree] = useState(three)
  const [lessThanTwo] = useState(two)
  const [lessThanOne] = useState(one)

  // Sort by month based on transaction.age
  transactions.map((transaction) => {
    transaction.age = calculateAge(transaction.date)
    // Actual sorting
    if (transaction.age <= 30) {
      one.push(transaction)
      one.sort((a, b) => a.age - b.age)
    }
    if (transaction.age > 30 && transaction.age < 61) {
      two.push(transaction)
      two.sort((a, b) => a.age - b.age)
    }
    if (transaction.age > 60 && transaction.age <= 89) {
      three.push(transaction)
      three.sort((a, b) => a.age - b.age)
    }
  })

  return (
    <div className='w-full'>
      <MonthlyTransactions
        month={moment().format('MMMM')}
        monthlyTransactions={lessThanOne}
        calculateReward={calculateReward}
        calculateTotalRewards={calculateTotalRewards}
      />
      <MonthlyTransactions
        month={moment().subtract(1, 'months').format('MMMM')}
        monthlyTransactions={lessThanTwo}
        calculateReward={calculateReward}
        calculateTotalRewards={calculateTotalRewards}
      />
      <MonthlyTransactions
        month={moment().subtract(2, 'months').format('MMMM')}
        monthlyTransactions={lessThanThree}
        calculateReward={calculateReward}
        calculateTotalRewards={calculateTotalRewards}
      />
    </div>
  )
}
