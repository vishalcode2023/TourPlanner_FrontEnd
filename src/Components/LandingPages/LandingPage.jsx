import React from 'react'
import Navlinks from '../Navlinks/Navlinks'
import CategoryTabs from '../Navlinks/CategoryTabs'
import HeroSearchSection from './HeroSearchSection'
import BigPromoSection from './BigPromoSection'
import RecommendedSection from './RecommendedSection'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='w-full min-h-auto overflow-hidden'>
      <div className='Navlinks w-[98%] m-auto'>
        <Navlinks/>
        </div>
        <HeroSearchSection/>
        <BigPromoSection/>
        <RecommendedSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage