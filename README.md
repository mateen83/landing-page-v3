# Divine Energy Collective - Landing Page

A beautiful, animated landing page built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Smooth animations with Framer Motion
- 🎨 Beautiful gradient backgrounds and glowing effects
- 📱 Fully responsive design
- 🚀 Fast performance with Vite
- 💫 Interactive hover effects and micro-animations

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the settings and deploy

Or use the Vercel CLI:
```bash
npx vercel --prod
```

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service like:
- Netlify
- GitHub Pages  
- AWS S3
- Firebase Hosting

## Customization

### Update Links
Edit the constants at the top of `src/components/DEC_Landing.jsx`:
- `SIGN_UP_URL` - Your signup/checkout link
- `LEARN_MORE_URL` - Your about/FAQ page
- `LOGO_URL` - Your logo image URL (optional)

### Styling
- Colors and animations can be customized in `tailwind.config.js`
- Component styles are in the JSX files using Tailwind classes

## License

MIT License - feel free to use this for your projects!