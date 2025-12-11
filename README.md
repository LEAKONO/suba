# Beautah Mwanza Suba - Professional Portfolio
A modern, responsive portfolio website showcasing the professional achievements and expertise of Beautah Mwanza Suba, an award-winning humanitarian policy and security expert with 18+ years of experience in East, Central, and Horn of Africa.

## Features
- Modern UI/UX: Clean, professional design with gradient effects and animations

- Fully Responsive: Mobile-first design that works on all devices

- Interactive Components:

   - AI Chatbot for professional inquiries

   - Image carousels for awards and training

   - Animated transitions and hover effects

   - Smooth scroll navigation

- Comprehensive Sections:

   - Professional profile with key highlights

   - Skills with proficiency indicators

   - Work experience timeline

   - Training and development showcase

    - Awards and achievements gallery

    - Recent publications with direct links

    - Contact form with email integration

    - Testimonials from colleagues

## Live Demo
[https://suba-ruby.vercel.app/]

## Tech Stack
- Frontend: React 18, Vite

- Styling: Tailwind CSS

- Animations: Framer Motion

- Icons: Lucide React

- Typewriter Effect: Custom Typewriter component

- Form Handling: React state management

- Email Integration: Backend API for contact forms

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx 
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Training.jsx
│   ├── Achievements.jsx
│   ├── Publications.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── ChatBot.jsx
│   ├── Footer.jsx
│   └── ui/
│       └── Typewriter.jsx 
├── utils/
│   └── constants.js
├── hooks/
│   └── useScrollAnimation.js
├── animations.js
└── main.jsx
```
### Getting Started
#### Prerequisites
- Node.js 16+ and npm/yarn

### Installation
Clone the repository:

```bash
git clone https://github.com/LEAKONO/suba
cd beautah-portfolio
```
### Install dependencies:

```bash
npm install
```
### Start the development server:

```bash
npm run dev
```
Open your browser and visit:

```text
http://localhost:5173
```




## Styling
- Colors: Edit tailwind.config.js for theme colors

- Animations: Modify src/utils/animations.js

- Global styles: Edit src/index.css





## Deployment
Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Netlify
```bash
npm run build
# Drag dist folder to Netlify
```
GitHub Pages
```bash
npm install --save-dev gh-pages
# Update package.json scripts
npm run deploy
```
###  License
This project is for personal portfolio use. All rights to the content belong to Beautah Mwanza Suba.



