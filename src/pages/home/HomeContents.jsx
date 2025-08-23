import React from 'react'
import Products from '../../components/home/Products'
import AdsVideos from '../../components/home/AdsVideos'
import OurStory from '../../components/home/OurStory'
import AveesSpecials from '../../components/home/AveesSpecials'
import OurBrands from '../../components/home/Brands'
import Banner from '../../components/home/Banner'
import BatterSec from '../../components/home/Batter'
import HotelFoodsSection from '../../components/home/OurFoods'

function HomeContents() {
  return (
    <div>
        <Banner/>
        <Products/>
        <BatterSec/>
        <HotelFoodsSection/>
        <AveesSpecials/>
        <OurStory/>
        <AdsVideos/>
        {/* <OurBrands/> */}
    </div>
  )
}

export default HomeContents







