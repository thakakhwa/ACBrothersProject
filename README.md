# ACBrothers

A modern informative website for ACBrothers HVAC services, built with React.js and Drupal as headless CMS.

## 🚀 Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** CSS with custom properties (design system)
- **Routing:** React Router v7
- **Backend:** Drupal (headless CMS via JSON:API)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Site header with navigation
│   └── Footer/         # Site footer
├── hooks/              # Custom React hooks
│   └── useFetch.js     # Data fetching hook
├── layouts/            # Layout wrappers
│   └── MainLayout.jsx  # Main site layout
├── pages/              # Page components
│   ├── Home/           # Homepage
│   ├── About/          # About page
│   ├── Services/       # Services page
│   └── Contact/        # Contact page with form
├── services/           # API services
│   └── api.js          # Drupal API integration
├── styles/             # Global styles
│   ├── variables.css   # Design system variables
│   └── global.css      # Global styles & utilities
├── App.jsx             # Main app with routing
└── main.jsx            # App entry point
```

## 🎨 Design System

The project uses CSS custom properties for consistent styling:

- **Colors:** Primary (navy blue), Accent (red), Neutrals (grays)
- **Typography:** DM Sans (body), Playfair Display (headings)
- **Spacing:** 4px base unit scale
- **Responsive:** Mobile-first with breakpoints at 640px, 768px, 1024px, 1280px

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_DRUPAL_API_URL=http://your-drupal-site.com/jsonapi
```

## 🔗 Drupal Integration

The frontend is designed to work with a Drupal backend using JSON:API. The `src/services/api.js` file provides methods for:

- **Content:** Pages, Services
- **Forms:** Contact form submissions
- **Media:** Images and files
- **Taxonomy:** Service categories

### Drupal Setup Requirements

1. Enable JSON:API module
2. Configure CORS for your frontend domain
3. Create content types: Page, Service
4. Set up Webform for contact submissions

## 📱 Pages

- **Home** (`/`) - Hero section, features, CTA
- **About** (`/about`) - Company story and values
- **Services** (`/services`) - Service offerings
- **Contact** (`/contact`) - Contact form and info

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth animations & transitions
- ✅ SEO-friendly meta tags
- ✅ Accessible navigation
- ✅ Form handling ready for backend
- ✅ Clean component architecture

## 📄 License

Private project - All rights reserved.
