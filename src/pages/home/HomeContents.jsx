import React from 'react'
import Products from '../../components/home/Products'
import AdsVideos from '../../components/home/AdsVideos'
import OurStory from '../../components/home/OurStory'
import AveesSpecials from '../../components/home/AveesSpecials'
import OurBrands from '../../components/home/Brands'
import Banner from '../../components/home/Banner'
import BatterSec from '../../components/home/Batter'
import HotelFoodsSection from '../../components/home/OurFoods'
import FoodShowCase from '../../components/home/FoodShowCase'
import WhyAvees from '../../components/home/WhyAvees'
import WhereItBuy from '../../components/home/WhereItBuy'
import EcosystemItems from '../../components/home/EcosystemItems'
import Testimonials from '../../components/home/Testimonials'

function HomeContents() {
  return (
    <div>
        <Banner/>
        <FoodShowCase/>
        <OurStory/>
        <WhyAvees/>
        <WhereItBuy/>
        <EcosystemItems/>
        <Testimonials/>
        
    </div>
  )
}

export default HomeContents







