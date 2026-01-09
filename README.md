# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS featuring a professional light gradient theme.

## Features

- **Hero Section**: Eye-catching introduction with your name and call-to-action buttons
- **About Me**: Personal introduction section
- **Projects Grid**: Responsive grid showcasing your projects
- **Skills Section**: Display of your technical skills organized by category
- **Contact Form**: Professional contact form ready for backend integration
- **Responsive Design**: Fully responsive and mobile-friendly
- **Light Gradient Theme**: Professional blue-to-purple gradient theme

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Name

Edit `src/components/Hero.jsx` and replace "Your Name" with your actual name.

### Add Your Projects

Edit `src/components/Projects.jsx` and update the `projects` array with your actual projects.

### Add Your Skills

Edit `src/components/Skills.jsx` and update the `skillCategories` array with your skills.

### Add About Me Content

Edit `src/components/About.jsx` and add your personal information in the paragraph tags.

### Connect Contact Form

The contact form in `src/components/Contact.jsx` is ready for backend integration. Update the `handleSubmit` function to send data to your backend API.

## Project Structure

```
my_portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## License

This project is open source and available for personal use.

