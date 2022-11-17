import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeroBtn.css'
const HeroBtn = ({HeroBtnText,HeroPath}) => {
  return (
    <>
        <NavLink to={HeroPath}>
            <button className='hero-btn'>{HeroBtnText}</button>
        </NavLink>
    </>
    )
}

export default HeroBtn