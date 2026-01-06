# SS | Luxury Beauty

A modern, elegant e-commerce website for luxury beauty products including perfumes, creams, and artisanal soaps. Built with React and featuring a sophisticated, minimalist design that reflects the premium nature of the products.

## 🌟 Features

- **Product Catalog**: Browse through curated collections of perfumes, creams, and soaps
- **Product Details**: Detailed product pages with image galleries, descriptions, and key ingredients/notes
- **Category Filtering**: Filter products by category (Perfumes, Creams, Soaps)
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Smooth Animations**: Elegant fade-in and scroll animations for enhanced user experience
- **Modern UI**: Clean, luxury-focused design with custom Tailwind CSS styling

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd SSPerfume
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with custom luxury theme
- **shadcn/ui** - High-quality React component library
- **Lucide React** - Icon library
- **TanStack Query** - Data fetching and state management
- **Sonner** - Toast notifications

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   ├── AnimatedSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── NavLink.jsx
│   └── ProductCard.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Collections.jsx
│   ├── Index.jsx
│   ├── NotFound.jsx
│   └── ProductDetail.jsx
├── data/               # Data files
│   └── products.js
├── hooks/              # Custom React hooks
│   ├── use-mobile.jsx
│   └── use-toast.js
├── lib/                # Utility functions
│   └── utils.js
├── assets/             # Static assets
│   └── products/       # Product images
├── App.jsx             # Main App component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design Philosophy

SS Beauty is designed with luxury and elegance in mind. The interface features:

- **Minimalist Aesthetic**: Clean, uncluttered layouts that let products shine
- **Premium Typography**: Serif fonts for headings, elegant spacing
- **Smooth Transitions**: Carefully crafted animations that enhance rather than distract
- **Luxury Color Palette**: Sophisticated color scheme with gold accents
- **Responsive Layout**: Seamless experience across all device sizes

## 📦 Build for Production

To create a production build:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🌐 Deployment

The application can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting service**: Upload the contents of the `dist` folder

## 📝 License

This project is private and proprietary.

## 👥 Contact

For inquiries: inquiries@ss-beauty.com

---

Crafted with devotion ✨
