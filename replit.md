# E-Commerce React Application

## Overview
This is a React-based e-commerce website built with Vite, Material-UI, and modern React libraries. The project was imported from GitHub and configured to run in the Replit environment.

## Project Architecture

### Frontend Stack
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **UI Library**: Material-UI (MUI) v7.3.2
- **State Management**: Zustand 5.0.8
- **HTTP Client**: Axios 1.12.2
- **Routing**: React Router DOM v7.9.3
- **Form Handling**: React Hook Form 7.63.0
- **Validation**: Yup 1.7.1
- **Data Fetching**: TanStack React Query 5.90.2

### Configuration
- **Development Server**: Vite dev server on port 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Allowed Hosts**: Enabled to support Replit's iframe preview
- **HMR**: Configured for Replit environment

### Project Structure
```
/
├── src/
│   ├── features/
│   │   └── Home/
│   │       ├── HomePage.jsx
│   │       └── HomePages/HeroSection/
│   ├── shared/
│   │   └── layout/
│   │       ├── footer/
│   │       ├── navbar/
│   │       └── Top Header/
│   ├── App.jsx
│   └── index.jsx
├── public/
│   └── images/
├── index.html
├── package.json
└── vite.config.js
```

## Recent Changes (Oct 1, 2025)

### Replit Environment Setup
1. **Vite Configuration**: Added `allowedHosts: true` to support Replit's proxy/iframe preview
2. **App.jsx Fix**: Added missing `export default App;` statement
3. **MUI Grid Migration**: Updated Footer component from deprecated Grid API to use the new `size` prop syntax
4. **Dependencies**: Installed all npm packages
5. **Workflow**: Configured development workflow to run `npm run dev` on port 5000
6. **Deployment**: Configured autoscale deployment with build command

### Bug Fixes
- Fixed missing default export in App.jsx
- Updated MUI Grid components to use new v7 API (removed `item` prop, used `size={{ xs, sm }}` instead of individual props)
- Fixed horizontal overflow issue by:
  - Changed Top Header width from 100vw to 100%
  - Changed Footer width from 100vw with negative margins to 100%
  - Added global box-sizing: border-box to prevent padding/border overflow

## Development

### Running Locally
The project runs automatically via the configured workflow. The development server starts on port 5000 with HMR enabled.

### Building for Production
```bash
npm run build
```

### Deployment
The project is configured for autoscale deployment on Replit:
- Build: `npm run build`
- Run: `npx vite preview --host 0.0.0.0 --port`

## Notes
- The project uses MUI v7 with the updated Grid API
- All components are configured to work within Replit's iframe environment
- The website displays an e-commerce interface with product promotions
