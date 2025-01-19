import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import FeatureSection from '../components/FeatureSection'
import Testimonial from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      <div className="App">
      <header className="head">
        <h2 className="features-title">Features</h2>
        <h1 className="main-title">Analytics that feels like it’s from the future</h1>
        <p className="description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </header>
    </div>
    
    <FeatureSection/>
    <Testimonial/>
    <FAQSection/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default LandingPage
