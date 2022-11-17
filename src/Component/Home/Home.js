import React from 'react'
import BannerSlider from '../../CommonComponent/BannerSlider/BannerSlider'
import './Home.css'
import { BannerSliderData } from '../../AppData/CommonData'
const Home = () => {
  return (
    <>
      <BannerSlider BannerSliderData={BannerSliderData}/>
    </>
  )
}

export default Home