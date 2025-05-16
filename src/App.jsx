import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Intro from './intropage'
import About from './about'
import Ourservices from './services'
import OurGallery from './OurGallery'
import ClientsReview from './ClientsReviews'
import Pricing from './Pricing'
import BookAppointmentForm from './Book'
import FAQSection from './Questions'
import VisitShopSection from './Address'
import Footer from './footer'
function App() {
  return (
    <>
     <Navbar/>
      <Intro/>
      <About/>
      <Ourservices/>
      <OurGallery/>
      <ClientsReview/>
      <Pricing/>
      <BookAppointmentForm/>
      <FAQSection/>
      <VisitShopSection/>
      <Footer/>
    </>
  )
}

export default App;
