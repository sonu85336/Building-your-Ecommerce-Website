import React from 'react'
 import HeaderForHome from './HeaderForHome' 
import NavForAll from './NavForAll'
 import FooterForHome from './FooterForHome'
import HomeBody from './HomeBody'
function Home() {
  return (
    <div>
       <NavForAll />
       <HeaderForHome/> 
       <HomeBody/>
        <FooterForHome/>
       
       
    </div>
  )
}

export default Home
