# 🚀 CubeZoo Laravel Frontend Developer Test

This is a pixel-perfect implementation of the CubeZoo frontend developer test, built using **Laravel 12**, **Inertia.js**, **React**, and **Tailwind CSS**. The layout and components are based on the provided Figma design file: _Web Design FE Test - 10 October 2024_.

---

## 🛠 Tech Stack

- **Laravel 12**
- **Inertia.js**
- **React**
- **Tailwind CSS**
- **Breeze Starter Kit**

---

## 🧩 Features

- Fully responsive layout (desktop, tablet, mobile)
- Reusable layout and components
- Mobile-friendly hamburger menu
- Clean, modular React + Tailwind UI
- Figma design system (typography, colors, spacing) faithfully implemented

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cubezoo-fe-test.git
cd cubezoo-fe-test
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install JavaScript Dependencies

```bash
npm install
```

### 4. Set Up Environment File

```bash
cp .env.example .env
php artisan key:generate
```

> **Note:** You don't need database access unless adding features that require it.

### 5. Build Assets and Run the App

```bash
npm run dev
php artisan serve
```

Now open [http://localhost:8000](http://localhost:8000) in your browser to view the app.

---

## 📂 Folder Structure Highlights

```bash
resources/
├── js/
│   ├── Components/      # Reusable UI elements
│   ├── Layouts/         # Main layout with navbar and footer
│   ├── Pages/           # Individual page views (e.g., Home.jsx)
│   └── app.jsx          # Main JS entry
public/
└── images/              # Exported assets from Figma
```

---

## 🖼 Assets

All required images were exported from Figma and placed in the `public/images` directory. Update the filenames in components if needed.

---

## 📬 Submission Notes

- All dependencies are declared in `composer.json` and `package.json`
- Project structured for maintainability and scalability
- Mobile and desktop views tested for responsiveness
- Navbar collapses into a burger menu on mobile devices

---

## 🔗 Useful Commands

```bash
# Compile frontend assets
npm run dev         # For development
npm run build       # For production

# Start Laravel dev server
php artisan serve
```

---

## 📄 License

This project is for evaluation purposes only.
