# 🎮 PixelHaven

Pixelhaven is a web platform for gamers to save, organize and discover games. The platform is inspired by BookCompass witch I created before and this project focuses on game tracking instead of books. 

**With PixelHaven, you can:**
-  🎮 Save games to personal lists for example "Want to play", "Playing now" and "Completed
- 🧩 Track what games you own
- 🔁 Get random game suggestions on what to play fromm your owed games or randoms
- 📝 Rate and give personal reviews

## 🚀 Project features:
- React + Typescript - Frontend framework and type-safe coding
- HTML5 & CSS3 - Structure and styling 
- ASP.NET Core 8 
- React Hooks - State and logic management 
- Local storage - Save user data locally in browser 
- MySQL - Used for storing game data and user collections
- JSON fallback - If MySQL is not configured, you can still explore the project using the included sample JSON data

## 📂 Project Structure
This repository contains both frontend and backend in the same repo: BookCompass/ │ ├── frontend/ # React + Vite + TypeScript app └── backend/ # ASP.NET Core Web API

## 🧩 Prerequisites: 
- Node.js (https.//nodejs.org/en)
- Visual studio code or any modern code editor
- A modern web browser (e.g Chrome, firefox)

## 🚀 Getting frontend and backend started: 
1. Start with clone the repository: 
```bash
git clone https://github.com/gytu24nn/pixelhaven.git
```

2. Navigate to the frontend floder and install dependencies: 
first: 

```bash
cd frontend
``` 

then:  
```bash
npm install
```

3. After that navigate to the backend folder and build the project:

First command (if you are in frontend folder):
```bash
cd ..
```

Second command: 
```bash
cd Backend
```

third command: 
```bash
dotnet build
```

4. Start backend in the backend folder
```bash
dotnet watch
```

5. Start frontend in the frontend folder:

**For development:**
```bash
npm run dev
```

**To build for productions:**
```bash
npm run build
```

**To preview the production build:**
```bash 
npm run preview
```

## 🔨 Build system:
This project uses **Vite** as the build system. Vite is configured to transpile and bundle the code for production when running. 

I decided to use Vite as the build system for this project because it makes it easy to get started with React. Additionally, when starting the project, I can choose whether to use JSX or TSX. For this project, I chose to use TSX because I wanted to practice with it, and I find it a bit easier than JSX because it allows you to see the type of each variable.

**To use the build system you can use:**
```bash
npm run build
```

