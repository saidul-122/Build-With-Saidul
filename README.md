
# Saidul Hoque - Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as an aspiring Software Developer. Built with cutting-edge web technologies and featuring a sleek, professional design.

## 🚀 Live Demo 

**URL**: https://gregarious-sorbet-3ff535.netlify.app/
## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Contact Form**: EmailJS integration for direct communication
- **Portfolio Showcase**: Dedicated section for projects and work samples
- **Services Overview**: Clear presentation of offered services
- **About Section**: Personal introduction and background
- **Smooth Animations**: Engaging user experience with Tailwind CSS animations

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: shadcn/ui for consistent, accessible components
- **Icons**: Lucide React for beautiful, customizable icons
- **Email Service**: EmailJS for contact form functionality
- **Backend**: Supabase for data management and authentication

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── About.tsx        # About section component
│   ├── Contact.tsx      # Contact form with EmailJS
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero/landing section
│   ├── Navigation.tsx   # Navigation header
│   ├── Portfolio.tsx    # Portfolio showcase
│   └── Services.tsx     # Services overview
├── integrations/        # External service integrations
│   └── supabase/        # Supabase configuration
├── lib/                 # Utility functions
├── pages/               # Page components
└── hooks/               # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Configure Supabase credentials in the project
   - Set up EmailJS with your service credentials

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality. To set it up:

1. Create an EmailJS account at [emailjs.com](https://emailjs.com)
2. Create a service and email template
3. Get your Public Key, Service ID, and Template ID
4. Update the credentials in the Contact component

## 🎨 Customization

### Colors & Themes
- Primary colors defined in `tailwind.config.ts`
- Custom color schemes using CSS custom properties
- Dark/light theme support via `next-themes`

### Components
- All components built with TypeScript for type safety
- Modular design for easy customization
- shadcn/ui components for consistency

### Animations
- Custom keyframes defined in Tailwind config
- Smooth transitions and hover effects
- Responsive animations that respect user preferences

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

https://gregarious-sorbet-3ff535.netlify.app/

### Custom Domain
To connect a custom domain:
1. Navigate to Project → Settings → Domains in md-ahmad-raza.online
2. Follow the domain connection guide
3. Note: Paid plan required for custom domains

### Self-Hosting
The project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Md Ahmad Raza**  
Aspiring Software Developer passionate about creating innovative web solutions.

- 📧 Email: [Contact through the website form]
- 🌐 Portfolio: [Live Website URL]
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐱 GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - For beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) - For the utility-first CSS framework
- [EmailJS](https://emailjs.com) - For email functionality
- [Supabase](https://supabase.com) - For backend services

---

**Built with ❤️ using Saidul Hoque**

*"Building the future, one line of code at a time"*
