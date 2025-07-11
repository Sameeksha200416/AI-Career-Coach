# 🚀 AI Career Coach – SensAI

🔗 [Live Demo](https://ai-career-coach-seven-inky.vercel.app/) | ✨ Powered by Next.js, Tailwind CSS, Prisma, Gemini AI

![SensAI Banner](./assets/sensai-banner.png) <!-- Replace with your banner image path -->

SensAI is a full-stack AI-powered **Career Coaching Platform** designed to help individuals unlock their true professional potential with tools for **interview preparation**, **cover letter generation**, **industry insights**, and more — all in one place.

---

## 🌟 Key Challenges We Solve

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

### 🧑‍💼 AI Cover Letter Generator  
![Cover Letter](./assets/cover-letter.png) <!-- Replace with your image path -->

### 📊 Performance Dashboard  
![Dashboard](./assets/dashboard.png) <!-- Replace with your image path -->

### 🧠 Quiz Attempt Page  
![Quiz](./assets/quiz.png) <!-- Replace with your image path -->

> 📽️ **Want to see it in action?**  
> 🎥 [Watch the Demo Video](https://www.loom.com/) *(Insert your Loom/Youtube link)*

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
# Add your Clerk, Gemini, and DB credentials

# Run the development server
npm run dev
