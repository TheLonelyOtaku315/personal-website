# Tonny Zhao's Personal Portfolio Website

A modern, responsive personal portfolio website built with Angular 19, featuring a sleek design with dark/light theme toggle and smooth animations.
https://thelonelyotaku315.github.io/personal-website/

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Modern UI**: Glass morphism effects and smooth animations
- **Matrix Background**: Animated matrix-style background effect
- **Sections Include**:
  - Welcome/Hero section with personal introduction
  - About Me section
  - Projects showcase
  - Contact information
- **CV Download**: Direct download link for resume/CV
- **Server-Side Rendering (SSR)**: Enhanced performance and SEO

## 🚀 Tech Stack

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: CSS3 with custom themes
- **Server**: Express.js (for SSR)
- **UI Library**: Flickity (for carousel functionality)
- **Build Tool**: Angular CLI
- **Testing**: Jasmine & Karma

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TheLonelyOtaku315/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🎯 Usage

### Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build for Production

Build the project:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Server-Side Rendering

To run the SSR version:

```bash
npm run serve:ssr:personal-website
```

### Running Tests

Execute unit tests:

```bash
npm test
# or
ng test
```

### Watch Mode

Build in watch mode for development:

```bash
npm run watch
# or
ng build --watch --configuration development
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about-me-section/     # About me component
│   │   ├── contact-section/      # Contact information
│   │   ├── navigation-bar/       # Main navigation
│   │   ├── projects-section/     # Projects showcase
│   │   └── welcome-section/      # Hero/welcome section
│   ├── service/
│   │   └── user.service.ts       # User-related services
│   ├── app.component.*           # Root component
│   ├── app.config.*              # App configuration
│   └── app.routes.*              # Routing configuration
├── assets/
│   ├── doc/                      # Documents (CV/Resume)
│   ├── img/                      # Images and logos
│   └── theme.css                 # Theme stylesheets
├── index.html                    # Main HTML file
├── main.ts                       # Application entry point
├── server.ts                     # SSR server configuration
└── styles.css                    # Global styles
```

## 🎨 Components

- **Navigation Bar**: Main navigation with smooth scrolling
- **Welcome Section**: Hero section with personal introduction and CV download
- **About Me Section**: Detailed information about background and skills
- **Projects Section**: Showcase of development projects
- **Contact Section**: Contact information and social links

## 🔧 Configuration

The project uses several configuration files:

- `angular.json`: Angular workspace configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Dependencies and scripts
- `.editorconfig`: Code formatting rules

## 🌙 Theme Support

The website supports both dark and light themes with smooth transitions. The theme can be toggled using the navigation bar.

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

This project is configured for deployment with SSR support. You can deploy to:

- Vercel
- Netlify
- Heroku
- Any Node.js hosting service

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is personal portfolio website. Feel free to use it as inspiration for your own portfolio!

## 📧 Contact

Tonny Zhao - [Your Email](mailto:your-email@example.com)

Project Link: [https://github.com/TheLonelyOtaku315/personal-website](https://github.com/TheLonelyOtaku315/personal-website)

---

⭐ Star this repository if you found it helpful!
