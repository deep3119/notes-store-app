# 📝 Notes Store App

![License](https://img.shields.io/badge/license-MIT-green.svg) ![Status](https://img.shields.io/badge/status-active-brightgreen)

> A full-featured MERN stack web application offering free downloadable course notes, secure user authentication, and a clean, responsive UI.

---

## 📸 Screenshot

![App Screenshot](./Frontend/public/home.png)

---

## 📚 Overview

**Notes Store App** is a MERN stack-based web application designed as a learning platform where users can access **free course notes** on modern technologies such as **React JS**, **Node JS**, **Express JS**, **Artificial Intelligence**, **Machine Learning**, and **Deep Learning**.

The app includes secure authentication using **JWT**, downloadable course materials in **PDF format**, a responsive **Dark/Light mode**, and a dashboard to track user activity and progress.

---

## 🚀 Features

- 🎓 **Free Courses** — Access tutorials and notes on trending technologies (React, Node, AI, etc.)
- 📥 **Downloadable PDF Notes** — Get offline access to course materials
- 🔐 **JWT Authentication** — Secure signup/login with protected routes
- 🎨 **Dark/Light Theme Toggle** — Personalized reading experience
- 📬 **Contact Form** — Allow users to send feedback or queries
- 📱 **Responsive Design** — Optimized for mobile and desktop
- 📊 **User Dashboard** — Track enrolled courses and progress

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js** – UI library for building responsive interfaces
- **CSS / Tailwind CSS** – Styling and layout
- **React Router** – Navigation and route protection
- **localStorage** – Persist theme settings (Dark/Light Mode)

### 🔸 Backend
- **Node.js** – Runtime for server-side logic
- **Express.js** – Framework for API development
- **JWT** – For user authentication and session handling

### 🗄️ Database
- **MongoDB** – NoSQL database for user/course data

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB 

---

### 📦 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notes-store-app.git
cd notes-store-app
```

#### 2. Backend Setup

```bash
cd Backend
npm install
```
#### Create a .env file inside the server folder and add:

```bash
PORT=5001
MONGO_URI=<your_mongodb_connection_string>
```

#### Start the backend server:

```bash
npm start
```

#### 3. Frontend Setup

```bash
cd ../Frontend
npm install
npm start
```
