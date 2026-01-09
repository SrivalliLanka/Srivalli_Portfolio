import yaml from 'js-yaml'
import portfolioDataYaml from './portfolio-data.yaml?raw'

// Load and parse YAML data
const loadPortfolioData = () => {
  try {
    const data = yaml.load(portfolioDataYaml)
    return data
  } catch (error) {
    console.error('Error loading portfolio data:', error)
    return null
  }
}

// Export the loaded data
export const portfolioData = loadPortfolioData()

// Export individual sections for convenience
export const heroData = portfolioData?.hero
export const aboutData = portfolioData?.about
export const skillsData = portfolioData?.skills
export const projectsData = portfolioData?.projects
export const contactData = portfolioData?.contact
export const navigationData = portfolioData?.navigation
export const footerData = portfolioData?.footer
export const resumeData = portfolioData?.resume

export default portfolioData

