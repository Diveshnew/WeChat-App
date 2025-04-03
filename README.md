# **Real-Time Chat App**

A **real-time chat application** built with **React, Express, and Socket.io** that allows users to send and receive messages instantly.

## **Features**

✅ Real-time messaging with **Socket.io**  
✅ Modern UI with **Tailwind CSS**  
✅ Express.js server for handling WebSocket connections  
✅ Fully responsive design  

---

## **Tech Stack**

### **Frontend (React + Tailwind CSS)**
- React.js (useState, useEffect for state management)
- Tailwind CSS for styling
- Socket.io-client for WebSocket communication

### **Backend (Node.js + Express + Socket.io)**
- Express.js for server setup
- Socket.io for real-time bidirectional communication
- CORS middleware for cross-origin requests

---

## **Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Diveshnew/WeChat-App.git
cd WeChat-App
```

### **2️⃣ Install Dependencies**
#### **Backend**
```sh
cd server
npm install
```

#### **Frontend**
```sh
cd ../client
npm install
```

### **3️⃣ Start the Application**
#### **Run Backend**
```sh
cd server
npm start
```

#### **Run Frontend**
```sh
cd client
npm run dev
```

The app will be available at: **http://localhost:5173**  
The server runs on: **http://localhost:3000**

---

## **Deployment (Future Suggestion)**
If you want to deploy the application, consider the following options:

### **Backend Deployment**
You can deploy the **Express.js server** on platforms like **Render, Railway, or a VPS** like AWS/DigitalOcean.

### **Frontend Deployment**
Deploy the **React app** using services like **Vercel, Netlify, or Firebase Hosting**.

Once deployed, update the **client-side Socket.io connection**:
```jsx
const socket = io("https://your-backend-url.com");
```

---

## **Project Structure**
```sh
reactchatapp/
│-- client/        # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│-- server/        # Express backend
│   ├── index.js
│   ├── package.json
│-- .gitignore
│-- README.md
```

---

## **Contributing**
1. **Fork** the repository.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Commit your changes** (`git commit -m "feat: add new feature"`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Open a Pull Request**.

---

## **License**
This project is licensed under the **MIT License**.

