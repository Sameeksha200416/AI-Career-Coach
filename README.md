# 🚀 AI Career Coach – SensAI

🔗 [Live Demo](https://ai-career-coach-seven-inky.vercel.app/) | ✨ Powered by Next.js, Tailwind CSS, Prisma, Gemini AI

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
