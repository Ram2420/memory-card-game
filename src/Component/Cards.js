import React ,{useEffect, useState} from 'react'

const Cards = ({cardValue}) => {

    


  return (
    <div className='border p-10 shadow-xl flex justify-center items-center cursor-pointer'>
      {cardValue}
    </div>
  )
}

export default Cards
