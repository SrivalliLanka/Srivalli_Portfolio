import React from 'react'
import { skillsData } from '../data/loadPortfolioData'

const Skills = () => {
  if (!skillsData) return null

  return (
    <section id="skills" className="py-12 px-4 bg-gradient-to-br from-blue-200 via-blue-100 to-purple-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {skillsData.title}
        </h2>
        <div className="space-y-4">
          {skillsData.categories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

