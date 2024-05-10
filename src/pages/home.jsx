import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Main from '../components/main'
import Careersliders from '../components/slider'
import Postcard from '../components/post-card'
import Cardssection from '../components/cardsec'
import Footer from '../components/footer'
import Links from '../components/link'
import Circle from '../components/circle'
export default function home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Main/>
    <Careersliders />
    <Postcard />
    <Links />
    
    <Cardssection />
    <Footer />
    </>
  )
}
