# Portfolio Data Configuration

All portfolio content is now managed through the `portfolio-data.yaml` file. This makes it easy to update your portfolio without modifying code.

## How to Update Your Portfolio

Simply edit `portfolio-data.yaml` to update any content on your website:

### Hero Section
- Update `hero.name` - Your name
- Update `hero.tagline` - Your professional tagline
- Modify `hero.buttons` - Add, remove, or change button text and links

### About Section
- Update `about.profileImage` - Path to your profile image
- Modify `about.paragraphs` - Edit or add paragraphs about yourself

### Skills Section
- Update `skills.categories` - Add or modify skill categories
- Modify skills within each category

### Projects Section
- Update `projects.items` - Add, remove, or modify projects
- Each project can have:
  - `title`, `shortDescription`, `detailedDescription`
  - `tech` (array of technologies)
  - `features` (array of features)
  - `date`, `github`, `live` (links)
  - `thumbnail`, `heroMedia`, `media` (images/videos)
  - `subProjects` (for project collections)

### Contact Section
- Update `contact.contactInfo` - Email, phone, LinkedIn
- Modify `contact.form` - Form labels and placeholders

### Navigation & Footer
- Update `navigation` - Menu items and brand name
- Update `footer.text` - Footer copyright text (use `{year}` for dynamic year)

### Resume (Google Drive Integration)
- Update `resume.googleDriveFileId` - Your Google Drive file ID
- Update `resume.modalTitle` - Title shown in the resume modal
- Update `resume.viewButtonText` - Text for "View in Google Drive" button
- Update `resume.downloadButtonText` - Text for download button

**How to get your Google Drive File ID:**
1. Upload your resume PDF to Google Drive
2. Right-click the file and select "Get link" or "Share"
3. Make sure the file sharing is set to **"Anyone with the link can view"**
4. Copy the link - it will look like: `https://drive.google.com/file/d/FILE_ID_HERE/view`
5. Copy the `FILE_ID_HERE` part (the long string between `/d/` and `/view`)
6. Paste it in the YAML file as `googleDriveFileId: "FILE_ID_HERE"`

**Benefits:**
- Update your resume in Google Drive without touching website code
- Resume automatically stays up-to-date
- Two options: View in modal or download directly

## File Structure

```
src/data/
├── portfolio-data.yaml    # Main configuration file
├── loadPortfolioData.js   # Data loader (don't modify)
└── projects.js           # Legacy file (kept for reference)
```

## Notes

- After updating the YAML file, the changes will be reflected automatically when you refresh the page
- The YAML file uses standard YAML syntax - be careful with indentation
- Use arrays (`- item`) for lists
- Use objects for nested data structures
- HTML can be included in description fields (e.g., `<strong>`, `<div>`)

## Example: Adding a New Project

```yaml
projects:
  items:
    - id: 4
      title: "My New Project"
      shortDescription: "A brief description"
      detailedDescription:
        - "First paragraph"
        - "Second paragraph"
      tech:
        - "React"
        - "Node.js"
      features:
        - "Feature 1"
        - "Feature 2"
      date: "Jan 2025 – Present"
      github: "https://github.com/username/project"
      live: "https://project.com"
      thumbnail: "/projects/project-thumb.png"
      heroMedia:
        type: "image"
        url: "/projects/project-hero.png"
      media: []
```

