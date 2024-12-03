import React from 'react'
import './Title.css'

const Title = ({text1,text2}) => {
  return (
    <div className='title-container'>
      <p className='p1'>{text1}<span>{text2}</span></p>
      <p className='p2'></p>
    </div>
  )
}

export default Title
