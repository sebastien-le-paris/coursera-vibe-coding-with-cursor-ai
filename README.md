# AI-Enhanced Web Development with Quote Generator

## Course Information
This repository contains the project materials for the "Vibe Coding with Cursor AI" course, part of the Generative AI for Web Development Specialization on Coursera.

### Educational Overview
- **Course Level**: Intermediate
- **Prerequisites**: HTML, CSS, JavaScript fundamentals
- **Duration**: 1 hour
- **Instructor**: Maham Codes
- **Certificate**: Available upon completion

### Learning Objectives
- Master Cursor AI's chat panel functionality
- Develop practical applications using AI assistance
- Implement debugging strategies with context-aware tools
- Build a functional quote generator application

## Featured Project: Dynamic Quote Generator

### Technical Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Shadcn/UI Components
- Unsplash API Integration

### Core Features
- Dynamic quote generation system
- Automated background imagery via Unsplash
- Theme switching capability (Light/Dark)
- Responsive design architecture
- Modern UI/UX implementation

### Technical Requirements
- Node.js (version 16.8 or higher)
- Package manager (npm/yarn)
- Development environment supporting TypeScript
- Basic React/Next.js proficiency

## Development Setup

### Initial Configuration
```bash
# Project initialization
npx create-next-app@latest quote-generator --typescript --tailwind --eslint

# Directory navigation
cd quote-generator

# UI framework setup
npx shadcn-ui@latest init

# Component installation
npx shadcn-ui@latest add button card
```

### Project Architecture

quote-generator/
├── app/
│ ├── page.tsx
│ ├── layout.tsx
│ └── globals.css
├── components/
│ └── ui/
├── public/
└── ...

### Implementation Steps

1. **Set up the main page layout**
   - Create a responsive container
   - Add the quote card component
   - Implement the theme toggle button

2. **Create the Quote Component**
   - Design the card layout
   - Add quote text and attribution
   - Implement the "New Quote" button

3. **Add Background Functionality**
   - Integrate Unsplash API for random images
   - Set up dynamic background changes
   - Add smooth transitions

4. **Implement Theme Toggle**
   - Add light/dark mode functionality
   - Position toggle button in top-right corner
   - Include sun/moon icons for theme indication

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the appearance by:
- Modifying `tailwind.config.js`
- Adding custom CSS in `globals.css`
- Adjusting Shadcn/UI theme variables

### Quote Sources
You can modify the quote source by:
- Using an API service
- Creating a local quote database
- Implementing AI-generated quotes

## Contributing
Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Submitting a pull request

## License
This project is open source and available under the MIT License.
