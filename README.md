# Modern Professional Portfolio

A sleek, premium, and fully responsive portfolio crafted with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Now featuring a sophisticated **Modern Midnight & Lavender** theme.

## 🖥️ Technologies Used

- **Next.js**: High-performance React framework for optimized web applications.
- **Tailwind CSS**: Utility-first CSS for a clean, modern design system.
- **TypeScript**: Robust type safety for scalable and maintainable code.
- **Framer Motion**: Powerful animation library for smooth UI transitions and micro-interactions.
- **Nodemailer**: Seamless email integration for the contact form functionality.

## 🌟 New Feature: Modern Midnight & Lavender Theme

The portfolio now uses a premium Lavender-based color system that works beautifully across both light and dark modes.

- **Accent**: Vibrant Lavender (`#9333ea` family)
- **Background**: Soft Lavender Mist (Light) / Deep Midnight Purple (Dark)
- **Customizable**: Change the entire look and feel just by updating HSL variables in `src/styles/globals.css`.

## ✉️ Setup & Configuration

### 1. Environment Variables
Create a `.env` file in the root directory (you can use `.env.example` as a template):

```bash
NODEMAILER_USER=your-email@gmail.com
NODEMAILER_PASS=your-generated-app-password
```

### 2. Update Metadata
Customize your personal information in `src/data/siteMetaData.mjs`:
- Name, Author, Description
- Social links (Github, LinkedIn, Twitter)
- Google Site Verification code

### 3. Setup Nodemailer (App Passwords)
1. Go to your **Google Account Security** settings.
2. Enable **2-Step Verification**.
3. Go to **App passwords** (bottom of 2-Step Verification page).
4. Create a new app (e.g., "Portfolio") and copy the 16-character password.
5. Paste it into your `.env` file as `NODEMAILER_PASS`.

## ✨ SEO & Performance

- **Dynamic Sitemap**: Automatically generates `sitemap.xml` and `robots.txt` on build.
- **Next SEO**: Comprehensive SEO tags and OpenGraph support pre-configured.
- **Image Optimization**: Leverages `next/image` for lightning-fast loading.

## 🛠️ Installation & Development

### 1. Install dependencies:
```bash
npm install 
# or
pnpm install
```

### 2. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your new portfolio!

## 🌐 Open Source

This project is open-source. Feel free to use it as a template, modify it, and share your own version. If you find it helpful, a star on the repo would be much appreciated!

---
Crafted with ❤️ by Wasif Bin Nasir
