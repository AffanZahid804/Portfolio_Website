# Portfolio Website

A stunning, modern, one-page portfolio website built with React, Vite, and Framer Motion. Features eye-catching animations, beautiful gradients, and a fully responsive design.

## 🚀 Features

- **Modern Design**: Beautiful UI with gradients, animations, and smooth transitions
- **One-Page Layout**: All sections on a single page with smooth scrolling navigation
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Animated Sections**: Framer Motion animations for a professional touch
- **Experience Section**: Showcases Upwork and freelance work
- **Client Reviews**: Testimonials section with ratings
- **Projects Showcase**: Featured projects with live demo and GitHub links
- **Contact Form**: Interactive contact form
- **Skills Display**: Animated skill bars with progress indicators

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

The site is configured for **https://affanzahid804.github.io/Portfolio_Website/**.

1. **Use the GitHub Actions workflow** (included in this repo):
   - On push to `main`, the workflow builds the app and deploys the **built** files to GitHub Pages (so the site loads correctly).

2. **Set Pages to deploy from Actions** (one-time):
   - Go to your repo → **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
   - Save.

3. **Push the workflow and trigger deploy**:
   - Commit and push the `.github/workflows/deploy-pages.yml` file (and any other changes).
   - Open the **Actions** tab and confirm the "Deploy to GitHub Pages" workflow runs and completes.
   - The site will be live at **https://affanzahid804.github.io/Portfolio_Website/**.

If the page was blank before, it was because GitHub Pages was serving the **source** (raw `.jsx` files) instead of the **built** output. The workflow fixes this by building with Vite and deploying the `dist/` folder.

## 🎨 Customization

All content is hardcoded as requested. You can easily customize:

- **Personal Information**: Update name, title, and description in `src/components/Hero.jsx`
- **About Section**: Modify the about text and stats in `src/components/About.jsx`
- **Skills**: Update skills and proficiency levels in `src/components/Skills.jsx`
- **Experience**: Add/edit work experience in `src/components/Experience.jsx`
- **Projects**: Modify projects in `src/components/Projects.jsx`
- **Reviews**: Update client testimonials in `src/components/Reviews.jsx`
- **Contact Info**: Change contact details in `src/components/Contact.jsx`
- **Colors**: Modify CSS variables in `src/index.css` to change the color scheme

## 🛠️ Technologies Used

- React 18
- Vite
- Framer Motion (animations)
- React Icons
- Modern CSS (gradients, animations, custom properties)

## 📱 Sections

1. **Header**: Fixed navigation with smooth scrolling
2. **Hero**: Eye-catching introduction with CTA buttons
3. **About**: Personal story, stats, and key features
4. **Skills**: Technology stack with animated progress bars
5. **Experience**: Work history including Upwork projects
6. **Projects**: Portfolio showcase with featured projects
7. **Reviews**: Client testimonials and ratings
8. **Contact**: Contact form and social links

## 🎯 Next Steps

1. Replace placeholder content with your actual information
2. Update project links and GitHub repositories
3. Add your actual client reviews
4. Customize colors to match your brand
5. Add your profile picture (replace the avatar placeholder)
6. Update social media links
7. Configure contact form backend (currently frontend only)

## 📝 Notes

- All content is hardcoded as requested
- The contact form is frontend-only (you'll need to add backend functionality)
- Project links and GitHub URLs are placeholders
- Social media links are placeholders
- Email and phone number are examples - update with your real contact info

Enjoy your new portfolio! 🎉

