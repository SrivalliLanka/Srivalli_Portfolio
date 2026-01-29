import React, { useState, useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false)

  const base = import.meta.env.BASE_URL || '/'
  const resolveAssetUrl = (relativePath) =>
    relativePath ? `${base}${relativePath.replace(/^\//, '')}` : ''
  
  // Reset image error when modal opens or project changes
  useEffect(() => {
    if (isOpen && project) {
      setImageError(false)
    }
  }, [isOpen, project])
  
  if (!isOpen || !project) return null

  // Check if this is one of the sub-projects that should have reduced height
  const isSubProject = project.id === 3.1 || project.id === 3.2

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          ×
        </button>

        {/* Hero Image/Video Section */}
        {(project.heroMedia && Object.keys(project.heroMedia).length > 0) || project.thumbnail ? (
          <div
            className={`relative bg-gradient-to-br from-blue-400 to-purple-400 rounded-t-2xl flex items-center justify-center px-2 py-3 md:px-4 md:py-4`}
          >
            {project.heroMedia && project.heroMedia.type === 'image' && (
              <img
                src={resolveAssetUrl(project.heroMedia.url)}
                alt={project.title}
                className="w-full max-h-[70vh] object-contain mx-auto"
                onError={(e) => {
                  setImageError(true)
                  e.target.style.display = 'none'
                }}
              />
            )}
            {project.heroMedia && project.heroMedia.type === 'image' && imageError && (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold opacity-75">
                  Image not found
                </span>
              </div>
            )}
            {project.heroMedia && project.heroMedia.type === 'video' && (
              <video
                src={resolveAssetUrl(project.heroMedia.url)}
                controls
                className="w-full max-h-[70vh] object-contain mx-auto rounded-lg bg-black"
              />
            )}
            {project.heroMedia && project.heroMedia.type === 'youtube' && (
              <div className="w-full max-w-5xl mx-auto aspect-video">
                <iframe
                  src={project.heroMedia.url}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {project.heroMedia && project.heroMedia.type === 'slides' && (
              <div className="w-full max-w-5xl mx-auto aspect-video">
                <iframe
                  src={project.heroMedia.url}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            )}
            {(!project.heroMedia || Object.keys(project.heroMedia).length === 0) && project.thumbnail && (
              <>
                <img
                  src={resolveAssetUrl(project.thumbnail)}
                  alt={project.title}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                  onError={(e) => {
                    setImageError(true)
                    e.target.style.display = 'none'
                  }}
                />
                {imageError && (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold opacity-75">
                      Image not found
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <div
            className="relative bg-gradient-to-br from-blue-400 to-purple-400 overflow-hidden rounded-t-2xl px-4 py-8 flex items-center justify-center"
          >
            <span className="text-white text-6xl md:text-8xl font-bold opacity-50">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {project.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h1>

          {/* Bento Grid Layout for Content */}
          <div className="space-y-6 mb-8">
            {/* Description */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <div className="space-y-4">
                {project.detailedDescription.map((paragraph, index) => {
                  // Check if the content is HTML (contains tags)
                  const isHTML = /<[^>]+>/.test(paragraph);
                  if (isHTML) {
                    return (
                      <div 
                        key={index} 
                        className="text-lg text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    );
                  }
                  return (
                    <p 
                      key={index} 
                      className="text-lg text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Additional image below Project Overview for Entertainment Analytics Dashboard */}
            {project.id === 4 && (
              <div className="flex justify-center">
                <img
                  src={resolveAssetUrl('projects/tab2.png')}
                  alt={`${project.title} - Additional view`}
                  className="w-full max-w-xl rounded-xl shadow-lg object-contain"
                />
              </div>
            )}

            {/* Features and Technology Stack - Stacked vertically with equal width */}
            <div className="grid grid-cols-1 gap-6">
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 w-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 w-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Media Gallery */}
            {project.media && project.media.length > 0 && (
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Media</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.media.map((item, index) => (
                    <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
                      {item.type === 'image' && (
                        <img 
                          src={resolveAssetUrl(item.url)} 
                          alt={`${project.title} - ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      )}
                      {item.type === 'video' && (
                        <video 
                          src={resolveAssetUrl(item.url)}
                          controls
                          className="w-full h-64 object-cover"
                        />
                      )}
                      {item.type === 'youtube' && (
                        <iframe
                          src={item.url}
                          className="w-full h-64"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                      {item.type === 'slides' && (
                        <iframe
                          src={item.url}
                          className="w-full h-64"
                          allowFullScreen
                        />
                      )}
                      {item.caption && (
                        <p className="p-3 text-sm text-gray-600">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.github || project.live) && (
              <div className="md:col-span-2 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center font-medium"
                  >
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

