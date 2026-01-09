import React, { useState } from 'react'
import ResumeModal from './ResumeModal'
import { heroData } from '../data/loadPortfolioData'

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  const openResumeModal = () => {
    setIsResumeModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeResumeModal = () => {
    setIsResumeModalOpen(false)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  if (!heroData) return null

  const renderButton = (button) => {
    const baseClasses = "px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    const primaryClasses = "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    const secondaryClasses = "bg-white text-gray-700 border-2 border-gray-300"

    if (button.action === 'resume') {
      return (
        <button
          key={button.text}
          onClick={openResumeModal}
          className={`${baseClasses} ${button.type === 'primary' ? primaryClasses : secondaryClasses}`}
        >
          {button.text}
        </button>
      )
    }

    return (
      <a
        key={button.text}
        href={button.href}
        className={`${baseClasses} ${button.type === 'primary' ? primaryClasses : secondaryClasses}`}
      >
        {button.text}
      </a>
    )
  }

  return (
    <section id="hero" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-50 to-purple-200 px-4 py-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {heroData.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-5">
          {heroData.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {heroData.buttons.map(renderButton)}
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={closeResumeModal}
      />
    </section>
  )
}

export default Hero

