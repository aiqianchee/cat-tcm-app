# 🐾 Meow Meow TCM Web Application

A full-stack web application for a fictional Traditional Chinese Medicine (TCM) clinic, built to simulate a real-world clinic website with both static and dynamic content.

## 🌐 Live Demo
https://aiqianchee.github.io/cat-tcm-app/

---

## 🧠 Project Overview

This project demonstrates a **full-stack architecture** with:

- Frontend deployed on GitHub Pages
- Backend REST API deployed on Render
- Static and dynamic content separation

### Key Design Decisions
- Scope of Treatment is **hardcoded** as it is relatively static
- Physician Profile is **data-driven via API**
- Appointment booking is simplified using **external form integration (Google Form)**

---

## 🚀 Key Highlights

- Built a multi-page React application using React Router
- Configured `basename` to support deployment under GitHub Pages subpath
- Integrated frontend with backend API deployed on cloud (Render)
- Handled **CORS issues** between frontend and backend
- Implemented **loading state handling** to manage API latency (Render cold start)
- Designed a clean and modular full-stack architecture

---

## 🛠 Tech Stack

**Frontend**
- React
- React Router
- CSS

**Backend**
- Spring Boot (Java)
- RESTful APIs

**Deployment**
- Frontend: GitHub Pages
- Backend: Render (Docker-based deployment)

---

## ⚠️ Notes

- The backend is hosted on a **free cloud instance (Render)**  
- First request may take a few seconds due to cold start  
- Loading state is implemented in the UI to improve user experience  

---

## 📸 Screenshots

![Home](./screenshots/home.png)  
![Scope](./screenshots/scope.png)

---

## 📁 Project Structure

```text
.
├── Meow/                # Spring Boot backend (Java + Maven)
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
├── cat-tcm-frontend/    # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
├── screenshots/
├── README.md