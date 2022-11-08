import React from 'react'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'
import './products.css'

function Filter() {
  return (
    <div className='main-filter'>
        <PriceFilter/>
        <CategoryFilter/>
    </div>
  )
}

export default Filter