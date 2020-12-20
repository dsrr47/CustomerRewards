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
  const [ninetyDays] = useState(three)
  const [sixtyDays] = useState(two)
  const [thirtyDays] = useState(one)
  const timePeriod = [thirtyDays, sixtyDays, ninetyDays]

  // Sort by month based on transaction.age
  transactions.map((transaction) => {
    transaction.age = calculateAge(transaction.date)

    if (transaction.age < 0) {
      one.push(transaction)
      one.sort((a, b) => a.age - b.age)
      return one
    }
    if (transaction.age === 0) {
      two.push(transaction)
      two.sort((a, b) => a.age - b.age)
      return two
    }
    if (transaction.age === 1) {
      three.push(transaction)
      three.sort((a, b) => a.age - b.age)
      return three
    }
  })

  return (
    <div className='w-full'>
    {timePeriod.map( (period, i) => (
      <MonthlyTransactions
        month={moment().format('MMMM')}
        key={i}
        monthlyTransactions={period}
        calculateReward={calculateReward}
        calculateTotalRewards={calculateTotalRewards}
      />
    ))}
    </div>
  )
}
