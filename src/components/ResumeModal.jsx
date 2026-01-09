import React from 'react'
import { resumeData } from '../data/loadPortfolioData'

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen || !resumeData || !resumeData.googleDriveFileId) return null

  // Google Drive URLs
  const viewUrl = `https://drive.google.com/file/d/${resumeData.googleDriveFileId}/preview`
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeData.googleDriveFileId}`
  const openInDriveUrl = `https://drive.google.com/file/d/${resumeData.googleDriveFileId}/view`

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{resumeData.modalTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>

        {/* PDF Viewer - Google Drive Preview */}
        <div className="flex-1 overflow-auto p-4">
          <iframe
            src={viewUrl}
            className="w-full h-full min-h-[600px] rounded-lg"
            title="Resume PDF"
            allow="autoplay"
          />
        </div>

        {/* Footer with Action Buttons */}
        <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
          <a
            href={openInDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 font-medium hover:bg-gray-50"
          >
            {resumeData.viewButtonText || "View in Google Drive"}
          </a>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
          >
            {resumeData.downloadButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal

