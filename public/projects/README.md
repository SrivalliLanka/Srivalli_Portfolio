# Project Media Guide

This folder is for storing project images, videos, and other media files.

## How to Add Media to Projects

### 1. Images
- Place image files in this folder (e.g., `carely-hero.jpg`, `carely-thumb.jpg`)
- Update `src/data/projects.js`:

```javascript
{
  id: 1,
  // ... other fields
  thumbnail: '/projects/carely-thumb.jpg', // For bento card
  heroMedia: {
    type: 'image',
    url: '/projects/carely-hero.jpg' // For modal header
  },
  media: [
    { type: 'image', url: '/projects/carely-1.jpg', caption: 'Screenshot 1' },
    { type: 'image', url: '/projects/carely-2.jpg', caption: 'Screenshot 2' }
  ]
}
```

### 2. Videos
- Place video files in this folder (e.g., `project-demo.mp4`)
- Update `src/data/projects.js`:

```javascript
heroMedia: {
  type: 'video',
  url: '/projects/project-demo.mp4'
},
media: [
  { type: 'video', url: '/projects/project-demo.mp4', caption: 'Project demo' }
]
```

### 3. YouTube Videos
- Get the embed URL from YouTube (Share → Embed)
- Update `src/data/projects.js`:

```javascript
heroMedia: {
  type: 'youtube',
  url: 'https://www.youtube.com/embed/VIDEO_ID'
},
media: [
  { type: 'youtube', url: 'https://www.youtube.com/embed/VIDEO_ID', caption: 'YouTube demo' }
]
```

### 4. Google Slides
- Get the embed URL: Share → Publish to web → Embed
- Replace `/edit` with `/preview` in the URL
- Update `src/data/projects.js`:

```javascript
heroMedia: {
  type: 'slides',
  url: 'https://docs.google.com/presentation/d/PRESENTATION_ID/preview'
},
media: [
  { type: 'slides', url: 'https://docs.google.com/presentation/d/PRESENTATION_ID/preview', caption: 'Project presentation' }
]
```

## File Naming Convention
- Use lowercase with hyphens: `project-name-thumb.jpg`
- Be descriptive: `carely-dashboard-screenshot.jpg`
- Keep file sizes reasonable for web (under 2MB for images, under 10MB for videos)

