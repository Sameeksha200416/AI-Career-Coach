# 🚀 SENSAi - AI Career Coach

<div align="center">
  <img src="public/logo.png" alt="SENSAi Logo" width="200"/>
  
  ### Your Smart Path to a Dream Career 🎯
  
  <p align="center">
    <strong>An intelligent career development platform powered by AI</strong>
  </p>

  [![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.11.1-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

  🔗 [**Live Demo**](https://ai-career-coach-seven-inky.vercel.app/)
</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📱 Pages & Components](#-pages--components)
- [🤖 AI Features](#-ai-features)
- [🔧 Configuration](#-configuration)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [👩‍💻 Developer](#-developer)

---

## ✨ Features

### 🎯 **Industry Insights Dashboard**
- Real-time industry analysis and trends
- Salary range predictions with market data
- Growth rate tracking and projections
- Personalized career recommendations

### 📄 **AI-Powered Resume Builder**
- Interactive resume creation with live preview
- Professional templates optimized for ATS
- One-click PDF export functionality
- Smart content suggestions

### 💼 **Smart Cover Letter Generator**
- AI-generated personalized cover letters
- Job-specific customization and targeting
- Cover letter library management
- Professional formatting and styling

### 🎤 **Interview Preparation System**
- Mock interview sessions with AI feedback
- Performance tracking and detailed analytics
- Comprehensive question bank by industry
- Progress visualization with interactive charts

### 👤 **User Onboarding & Profiles**
- Comprehensive skill assessment wizard
- Industry preference configuration
- Experience level tracking and analysis
- Personalized career path suggestions

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15.3.4** - React framework with App Router and server components
- **React 19.1.0** - Latest React with concurrent features
- **Tailwind CSS 4.0** - Utility-first CSS framework with advanced features
- **TypeScript** - Type-safe development experience

### **UI & Design System**
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful and consistent icon library
- **shadcn/ui** - Re-usable components built on Radix UI
- **next-themes** - Advanced theme switching (dark/light mode)

### **Database & Backend**
- **Prisma 6.11.1** - Next-generation ORM with type safety
- **PostgreSQL** - Robust relational database for production
- **Server Actions** - Modern server-side data mutations
- **Edge Runtime** - Fast, globally distributed API responses

### **Authentication & Security**
- **Clerk** - Complete authentication and user management
- **Middleware** - Advanced route protection and authorization
- **Zod** - Runtime type validation and schema parsing

### **AI & Integrations**
- **Google Generative AI (Gemini)** - Advanced AI for content generation
- **Inngest** - Reliable background job processing
- **React Hook Form** - Performant form management with minimal re-renders

### **Data Visualization**
- **Recharts** - Composable charting library built on D3
- **Performance Analytics** - Real-time user progress tracking

---

## 🏗️ Architecture

```
📦 SENSAi - Modern Full-Stack Architecture
│
├── 🎨 Frontend Layer (Next.js 15 App Router)
│   ├── 📱 Pages & Layouts (Server & Client Components)
│   ├── 🧩 Reusable UI Components (shadcn/ui + Radix)
│   ├── 🎯 Client-side State Management
│   └── 🌙 Theme & Responsive Design
│
├── ⚡ Backend Layer (Server Actions + API Routes)
│   ├── 🔐 Authentication & Authorization (Clerk)
│   ├── 📊 Database Operations (Prisma ORM)
│   ├── 🤖 AI Integration (Google Gemini)
│   └── 📧 Background Jobs (Inngest)
│
├── 🛡️ Middleware Layer
│   ├── 🔒 Route Protection & Guards
│   ├── 👤 User Session Management
│   └── 🚦 Request/Response Optimization
│
└── 💾 Data Layer
    ├── 🗄️ PostgreSQL Database
    ├── 📈 Analytics & Metrics
    └── 🔄 Real-time Synchronization
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **PostgreSQL** database instance
- **Google AI API key** (Gemini)
- **Clerk account** for authentication

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sameeksha200416/Ai-Career-Coach.git
   cd Ai-Career-Coach/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/sensai_db"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   CLERK_SECRET_KEY=sk_test_your_secret_key_here
   
   # AI Integration
   GEMINI_API_KEY=your_google_ai_api_key_here
   
   # Application URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   ```

4. **Database setup and migration**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   npx prisma db seed # Optional: seed with sample data
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # Server will start on http://localhost:3000
   ```

6. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 📱 Pages & Components

### 🏠 **Application Pages**
- **🏡 Landing Page** - Hero section with feature showcase and testimonials
- **📊 Dashboard** - Comprehensive industry insights and analytics hub
- **🚀 Onboarding** - Interactive user setup and skill assessment
- **📄 Resume Builder** - Advanced resume creation with live preview
- **💼 Cover Letter Hub** - AI-powered letter generation and management
- **🎯 Interview Prep** - Mock interviews with performance tracking

### 🧩 **Core Components**
- **🧭 Navigation Header** - Responsive header with authentication
- **🎨 Theme Provider** - Seamless dark/light mode switching
- **🔧 UI Kit** - Comprehensive component library (buttons, forms, dialogs)
- **📊 Analytics Dashboard** - Interactive charts and progress tracking
- **🤖 AI Integration** - Smart content generation interfaces

---

## 🤖 AI Features

### 🧠 **Advanced AI Capabilities**
- **📈 Industry Analysis** - Real-time market trend analysis using Gemini AI
- **✍️ Content Generation** - Intelligent resume and cover letter creation
- **❓ Dynamic Interviews** - Adaptive question generation based on role/industry
- **🎯 Personalized Feedback** - AI-powered career advice and recommendations
- **📊 Performance Insights** - Intelligent analysis of user progress and areas for improvement

### 🔬 **Machine Learning Features**
- **Skill Gap Analysis** - Identify missing skills for target roles
- **Career Path Optimization** - Suggest optimal career progression routes
- **Market Demand Prediction** - Forecast industry trends and opportunities
- **Personalized Learning** - Adaptive content based on user behavior

---

## 🔧 Configuration

### **Database Schema Overview**
```prisma
model User {
  id              String         @id @default(uuid())
  clerkUserId     String         @unique
  email           String         @unique
  name            String?
  imageUrl        String?
  industry        String?
  bio             String?
  experience      Int?
  skills          String[]
  
  // Relationships
  assessments     Assessment[]
  resume          Resume?
  coverLetters    CoverLetter[]
  industryInsight IndustryInsight? @relation(fields: [industry], references: [industry])
}

model IndustryInsight {
  industry           String    @id
  salaryRanges       Json[]
  growthRate         Float
  demandLevel        DemandLevel
  topSkills          String[]
  marketOutlook      MarketOutlook
  keyTrends          String[]
  recommendedSkills  String[]
  nextUpdate         DateTime
  users              User[]
}
```

### **Protected Routes Configuration**
```javascript
const protectedRoutes = [
  '/dashboard/*',      // Industry insights and analytics
  '/resume/*',         // Resume builder and management
  '/ai-cover-letter/*', // Cover letter generation
  '/interview/*',      // Interview preparation
  '/onboarding/*'      // User onboarding flow
];
```

---

## 🚀 Deployment Guide

### **Vercel Deployment (Recommended)**
1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add all required env vars in Vercel dashboard
3. **Database**: Set up PostgreSQL (recommend Neon or Supabase)
4. **Auto Deploy**: Automatic deployment on every push to main branch

### **Docker Deployment**
```dockerfile
FROM node:18-alpine AS base
WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm ci --only=production

# Build
COPY . .
RUN npm run build

# Production
EXPOSE 3000
CMD ["npm", "start"]
```

### **Environment Checklist**
- ✅ Database URL configured
- ✅ Clerk authentication keys set
- ✅ Google AI API key added
- ✅ Build completed successfully
- ✅ Database migrations applied

---

## 📸 Application Preview

<div align="center">
  <h3>🏠 Landing Page</h3>
  <img src="docs/images/landing-hero.png" alt="Landing Page" width="80%"/>
</div>

<div align="center">
  <h3>📊 Dashboard Analytics</h3>
  <img src="docs/images/dashboard-analytics.png" alt="Dashboard" width="80%"/>
</div>

<div align="center">
  <h3>📄 Resume Builder</h3>
  <img src="docs/images/resume-builder.png" alt="Resume Builder" width="80%"/>
</div>

<div align="center">
  <h3>🎯 Interview Preparation</h3>
  <img src="docs/images/interview-prep.png" alt="Interview Prep" width="80%"/>
</div>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Bug Reports**: Found an issue? Open a detailed bug report
- ✨ **Feature Requests**: Have ideas? Share them in our discussions
- 📝 **Documentation**: Help improve our docs and guides
- 🔧 **Code Contributions**: Submit PRs for bug fixes or new features

### **Development Process**
1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
4. **Develop** your changes with proper testing
5. **Commit** with conventional commit messages
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request with detailed description

### **Code Standards**
- Follow TypeScript best practices
- Maintain test coverage above 80%
- Use conventional commit messages
- Add JSDoc comments for functions
- Follow the existing code style

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

---

## 🌟 Star History

<div align="center">
  <img src="https://api.star-history.com/svg?repos=Sameeksha200416/Ai-Career-Coach&type=Date" alt="Star History Chart" width="600"/>
</div>

---

## 🙏 Acknowledgments

- **Google AI** for Gemini API integration
- **Vercel** for exceptional hosting platform
- **Clerk** for robust authentication solution
- **Prisma** for modern database experience
- **Open Source Community** for amazing tools and libraries

---

## 👩‍💻 Meet the Developer

<div align="center">
  <img src="https://github.com/Sameeksha200416.png" alt="Sameeksha" width="120" style="border-radius: 50%;"/>
  
  ### **Sameeksha**
  *Full-Stack Developer & AI Enthusiast*
  
  <p>Passionate about building innovative solutions that help people achieve their career goals through the power of AI and modern web technologies.</p>
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sameeksha200416)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sameeksha)
  [![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=web&logoColor=white)](https://sameeksha-portfolio.vercel.app)
</div>

---

## 💝 Support the Project

If you find SENSAi helpful, please consider:

- ⭐ **Starring** this repository
- 🐛 **Reporting** bugs or issues
- 💡 **Suggesting** new features
- 📢 **Sharing** with your network
- ☕ **Buying me a coffee** [here](https://buymeacoffee.com/sameeksha)

---

<div align="center">
  <h3>🚀 Ready to transform your career journey?</h3>
  <p><strong>Start your AI-powered career development today!</strong></p>
  
  <a href="https://ai-career-coach-seven-inky.vercel.app/">
    <img src="https://img.shields.io/badge/Try%20SENSAi%20Now-FF6B6B?style=for-the-badge&logo=rocket&logoColor=white" alt="Try SENSAi"/>
  </a>
  
  <br><br>
  
  <p><em>Made with ❤️ and lots of ☕ by Sameeksha</em></p>
  <p><strong>© 2025 SENSAi - AI Career Coach. All rights reserved.</strong></p>
</div>

🎯 **Lack of Industry Insights**  
💡 Get real-time updates on industry trends, in-demand skills, and career opportunities.

🧭 **Career Guidance**  
🤖 Personalized advice powered by AI to help users make smarter decisions based on their goals and skills.

📄 **Resume & Cover Letter Creation**  
📌 Auto-generate personalized, professional cover letters tailored to specific job roles.

🎤 **Interview Preparation**  
📈 Practice quizzes, mock interview tools, and performance analytics.

🖼 **Portfolio Builder**  
🔧 Tools to create and manage a digital portfolio to showcase skills and projects.

💬 **24/7 Career Chatbot**  
📚 Ask career-related questions and get instant responses with our AI chatbot assistant.

---

## 🛠️ Tech Stack

**Frontend:**
- `Next.js (React)`
- `Tailwind CSS`
- `shadcn/ui & Radix UI`
- `Recharts`

**Backend:**
- `Next.js API Routes`
- `Node.js`
- `Prisma ORM`

**Database:**
- `PostgreSQL`

**Authentication:**
- `Clerk` (`@clerk/nextjs`)

**AI Integrations:**
- `Google Generative AI (Gemini API)`

**Deployment:**
- `Vercel`

**Utilities:**
- `Zod` for schema validation  
- `date-fns` for formatting  
- `Git & GitHub` for version control

---

## 💡 Features Overview

### 🔐 1. User Authentication
Secure login/signup with Clerk integration, supporting user sessions and account management.

### 📝 2. AI Cover Letter Generator
Generate personalized cover letters using Google’s Gemini API — tailored to specific job titles and companies.

### 🧠 3. Interview Preparation Dashboard
- Quiz system with result tracking
- Performance graphs and scorecards using Recharts

### 📊 4. Performance Analytics
Track growth over time, identify weaknesses, and get smarter insights.

### 📚 5. Industry Insights
Stay ahead with curated or AI-generated articles and market trends.

### 📂 6. Portfolio & Resume Tools
- Smart resume creation tools
- Feedback systems to improve content
- Showcase project portfolios

### 💬 7. Smart Chatbot Support
Get career-related guidance instantly — 24/7 AI-based responses.

---

## 📸 Screenshots
<img width="1897" height="950" alt="sensai banner" src="https://github.com/user-attachments/assets/f5867d5b-4d18-4549-b855-99d911790e52" />
<img width="1910" height="962" alt="dashboard" src="https://github.com/user-attachments/assets/123eb80c-3748-49ec-968f-82a265cd84d4" />
<img width="1911" height="963" alt="resume" src="https://github.com/user-attachments/assets/4ff0c087-2b8d-4d67-9755-14ff579c2250" />
<img width="1902" height="956" alt="mock interview" src="https://github.com/user-attachments/assets/3a466ea2-a0b4-4d83-adc8-9a5ca811b5ed" />
<img width="1920" height="962" alt="performance" src="https://github.com/user-attachments/assets/d012888c-b3e1-4b0e-ad5e-5b0aead31535" />
<img width="1901" height="966" alt="coverletter" src="https://github.com/user-attachments/assets/ba19ab72-8592-49f0-8a56-79de325ab84f" />
<img width="1915" height="971" alt="aicoverletter" src="https://github.com/user-attachments/assets/648e3564-5d72-4c8e-895f-6a740ce723df" />





---

## 🚀 Getting Started Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/ai-career-coach.git
cd ai-career-coach

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Clerk, Gemini API, and Database credentials

# Run the development server
npm run dev
