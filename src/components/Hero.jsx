import React from 'react'
import './Hero.css'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='container'>
        {/* Left Side */}
      <div className='left-side'>
        <div className='left-text'>
            <div className='left-text2'>
                <p className='left-p1'></p>
                <p className='left-p2'>OUR BESTSELLERS</p>
            </div>
            <h1>Latest Arrivals</h1>
            <div className='latest-arrivals-text'>
                <p className='arrivals-p1'>SHOP NOW</p>
                <p className='arrivals-p2'></p>
            </div>
        </div>
      </div>
      {/* Right Side */}
      <img src={assets.men_1_1} alt="" />
    </div>
  )
}

export default Hero
