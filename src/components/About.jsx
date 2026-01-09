import React, { useState } from 'react'
import { aboutData } from '../data/loadPortfolioData'

const About = () => {
  const [imageError, setImageError] = useState(false)

  if (!aboutData) return null

  return (
    <section id="about" className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Profile Image Section */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {!imageError ? (
              <img
                src={aboutData.profileImage}
                alt={aboutData.profileImageAlt}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-blue-200"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl border-4 border-white">
                {aboutData.fallbackInitials}
              </div>
            )}
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {aboutData.title}
        </h2>
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 md:p-8 shadow-lg">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className={`text-lg text-gray-700 leading-relaxed ${index < aboutData.paragraphs.length - 1 ? 'mb-4' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

