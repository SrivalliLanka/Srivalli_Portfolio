import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { navigationData, footerData } from './data/loadPortfolioData'

function App() {
  const currentYear = new Date().getFullYear()
  const footerText = footerData?.text?.replace('{year}', currentYear) || `© ${currentYear} Portfolio. All rights reserved.`

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a 
              href={navigationData?.brandHref || "#hero"} 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {navigationData?.brand || "Portfolio"}
            </a>
            <div className="hidden md:flex space-x-8">
              {navigationData?.menuItems?.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            {footerText}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

