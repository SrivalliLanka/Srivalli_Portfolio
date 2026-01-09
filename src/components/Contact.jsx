import React, { useState } from 'react'
import { contactData } from '../data/loadPortfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  if (!contactData) return null

  return (
    <section id="contact" className="py-12 px-4 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {contactData.title}
        </h2>
        
        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-gray-600 mb-2">{contactData.contactInfo.email.label}</p>
              <a href={contactData.contactInfo.email.href} className="text-blue-600 hover:text-blue-800 font-medium">
                {contactData.contactInfo.email.value}
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">{contactData.contactInfo.phone.label}</p>
              <a href={contactData.contactInfo.phone.href} className="text-blue-600 hover:text-blue-800 font-medium">
                {contactData.contactInfo.phone.value}
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">{contactData.contactInfo.linkedin.label}</p>
              <a 
                href={contactData.contactInfo.linkedin.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {contactData.contactInfo.linkedin.value}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                {contactData.form.name.label}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder={contactData.form.name.placeholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                {contactData.form.email.label}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder={contactData.form.email.placeholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                {contactData.form.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder={contactData.form.message.placeholder}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
            >
              {contactData.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

