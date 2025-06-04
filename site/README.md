# Ayan Sen's Personal Website

This is a personal website for Ayan Sen, showcasing his principles, professional background, and core beliefs.

## Features

- Responsive design that works on all device sizes
- Dark/light mode toggle
- Sections for introduction, about, principles, experience, and contact
- Built with Next.js and Tailwind CSS

## Deployment

This website is configured for GitHub Pages deployment. To deploy:

1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. The GitHub Actions workflow will automatically build and deploy the site

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## Customization

You can customize this website by:

1. Updating the content in `app/page.tsx`
2. Modifying the theme in `tailwind.config.ts`
3. Adding your own images to the `public` directory
4. Updating contact information and social links

## License

MIT

# Development Documentation

This document provides technical details about the codebase and instructions for development.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Deployment**: GitHub Pages
- **Build**: Static Export

## 📁 Project Structure

```
site/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── principles/        # Principles page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── site-layout.tsx   # Main site layout
├── public/               # Static assets
│   └── images/          # Image files
├── styles/              # Global styles
└── lib/                # Utility functions
```

## 🚀 Development Setup

### Prerequisites
- Node.js 18 or later
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/ayansen/ayansen.github.io.git
cd ayansen.github.io/site

# Install dependencies
npm install
```

### Local Development
```bash
# Start development server
npm run dev
```
The site will be available at `http://localhost:3000`

### Building for Production
```bash
# Build the site
npm run build
```
The static export will be generated in the `out` directory

## ⚙️ Configuration

### Next.js Configuration
- Static export is enabled (`output: 'export'`)
- Images are configured for static export (`unoptimized: true`)
- ESLint and TypeScript errors are ignored during build for faster builds

### Environment Variables
No environment variables are required for local development or deployment.

## 🚢 Deployment

This website is configured for GitHub Pages deployment using GitHub Actions. The workflow:

1. Builds the Next.js application
2. Generates a static export
3. Deploys to GitHub Pages

To deploy:
1. Push changes to the `main` branch
2. The GitHub Actions workflow will automatically build and deploy
3. The site will be available at `https://ayansen.github.io`

## 🎨 Customization

### Content
- Update pages in the `app` directory
- Modify components in the `components` directory
- Add images to `public/images`

### Styling
- Modify Tailwind configuration in `tailwind.config.ts`
- Update global styles in `styles/globals.css`
- Customize shadcn/ui components in `components/ui`

### Deployment
- Update GitHub Actions workflow in `.github/workflows/github-actions-workflow.yml`
- Modify build settings in `next.config.mjs`

## 🔧 Troubleshooting

### Build Issues
- Clear the `.next` and `out` directories
- Run `npm install` to ensure dependencies are up to date
- Check for TypeScript errors

### Image Issues
- Ensure images are in the `public` directory
- Use relative paths starting with `/`
- Check image dimensions and formats

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📄 License

MIT
