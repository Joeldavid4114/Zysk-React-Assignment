import React from 'react'

const Content = () => {
  return (
    //  {/* Hero Section */}
    <div className='app-container'>
     <main className="hero-section">
     <div className="hero-content">
       <div className='banner'><span className="new-feature">New feature</span>
       <a href="#dashboard" className="dashboard-link">Check out the team dashboard <span class="arrow">→</span></a>
       </div>
       <h1>Beautiful analytics to grow smarter</h1>
       <p>
                      Powerful, self-serve product and growth analytics to help you convert,
         engage, and retain more users. Trusted by over 4,000 startups.
       </p>
       <div className="cta-buttons">
         <button className="demo-button">Demo</button>
         <button className="signup-button">Sign up</button>
       </div>
     </div>
    
     
   </main>
   <div className="hero-image">
       <img src="/assets/chatbot.png" alt="Hero" />
     </div>
     <div className='social-proof'> 
        <img src="/assets/Social proof section.png" alt="Social proof section" />
     </div>
   </div>
  )
}

export default Content
