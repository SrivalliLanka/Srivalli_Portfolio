import React, { useState } from 'react'
import { projectsData } from '../data/loadPortfolioData'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const base = import.meta.env.BASE_URL || '/'
  const resolveAssetUrl = (relativePath) =>
    relativePath ? `${base}${relativePath.replace(/^\//, '')}` : ''

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  if (!projectsData) return null

  const projects = projectsData.items || []

  return (
    <section id="projects" className="py-12 px-4 bg-gradient-to-br from-blue-200 via-blue-100 to-purple-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {projectsData.title}
        </h2>
        
        {/* Full Width Vertical Layout */}
        <div className="space-y-6">
          {projects.map((project) => {
            const hasImage = project.thumbnail || project.heroMedia

            const thumbnailUrl = resolveAssetUrl(
              project.thumbnail || project.heroMedia?.url || ''
            )
            
            return (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer group border border-gray-200 w-full"
              >
                <div className="p-6">
                  {/* Header with title and thumbnail on right */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Title and Date */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {project.date}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Small Thumbnail - Right corner with variable sizes */}
                    <div className={`flex-shrink-0 rounded-lg bg-gray-50 overflow-hidden flex items-center justify-center ${
                      project.id === 1 ? 'w-32 h-20' : // RailTEC - larger rectangular
                      project.id === 2 ? 'w-32 h-20' : // Carely - larger rectangular
                      project.id === 3 ? 'w-40 h-24' : // Foundational Data Engineering Projects - extra large rectangular
                      'w-28 h-18' // Default larger rectangular size
                    }`}>
                      {hasImage ? (
                        <img 
                          src={thumbnailUrl} 
                          alt={project.title}
                          className={`${
                            project.id === 3 ? 'max-w-full max-h-full object-contain' : // Foundational DE Projects - full logo without padding
                            project.id === 1 || project.id === 2 ? 'max-w-full max-h-full object-contain p-1' : // RailTEC & Carely - full logo with padding
                            'w-full h-full object-cover'
                          }`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className={`text-gray-400 font-bold opacity-70 ${
                            project.id === 1 ? 'text-2xl' : // RailTEC
                            project.id === 2 ? 'text-xl' : // Carely - reduced
                            'text-xl' // Default
                          }`}>
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description - Full visible */}
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {project.shortDescription}
                  </p>
                  
                  {/* Sub-projects section */}
                  {project.subProjects && project.subProjects.length > 0 && (
                    <div className="mb-4 pl-4 border-l-4 border-blue-300">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Sub-projects:</p>
                      <div className="space-y-3">
                        {project.subProjects.map((subProject) => (
                          <div
                            key={subProject.id}
                            onClick={(e) => {
                              e.stopPropagation()
                              openModal(subProject)
                            }}
                            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                          >
                            <h4 className="font-semibold text-gray-800 mb-1">{subProject.title}</h4>
                            <p className="text-sm text-gray-600">{subProject.shortDescription}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details CTA */}
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    <span>View Details</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects

