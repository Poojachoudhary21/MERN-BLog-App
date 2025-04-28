
# 📝 Blog Management App

A **Full-Stack Blog Management Application** with:

- **Frontend**: React.js
- **Backend**: Node.js + Express.js + Sequelize (ORM) + PostgreSQL + JWT Authentication

Users can **Sign Up**, **Login**, and **Create Blogs** after authentication.  
Protected Routes ensure **no access without login**.

---

## 📂 Project Structure

```
/frontend
  - src/
    - components/
      - BlogForm.jsx
      - BlogList.jsx
      - Login.jsx
      - SignUp.jsx
      - Navbar.jsx
      - ProtectedRoute.jsx
    - App.jsx
    - App.css
  - index.js

/backend
  - controllers/
    - authController.js
    - blogController.js
  - models/
    - index.js (Sequelize initialization)
    - user.js
    - blog.js
  - routes/
    - authRoutes.js
    - blogRoutes.js
  - middleware/
    - authMiddleware.js (JWT auth check)
  - config/
    - db.js (Sequelize configuration)
  - server.js
```

---

## 🛠 Tech Stack

| Frontend         | Backend                  |
|------------------|---------------------------|
| React.js         | Node.js                   |
| React Router DOM | Express.js                |
| Axios            | PostgreSQL + Sequelize ORM |
| CSS (Simple)     | JWT (Authentication)      |
| React Toastify   | Bcrypt (Password hashing)  |

---

## 🚀 How to Run the Project Locally

Follow these steps carefully:

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
(or download ZIP and extract)

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

This installs backend packages like Express, Sequelize, pg (PostgreSQL driver), JWT, Bcrypt, etc.

---

### 3. Install Frontend Dependencies

```bash
cd ../frontend/BLOG-MANAGEMENT
npm install
```

This installs frontend packages like React, React Router DOM, Axios, etc.

---

### 4. Setup Environment Variables

Inside the `/backend` folder, create a `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=your_database_name
DB_PORT=5432
JWT_SECRET=your_jwt_secret
```

✅ Replace:
- `your_postgres_username` → your PostgreSQL username
- `your_postgres_password` → your PostgreSQL password
- `your_database_name` → your database name
- `your_jwt_secret` → any strong secret string

---

### 5. Set Up PostgreSQL Database

Ensure PostgreSQL is installed and running.

Create a database:

```sql
CREATE DATABASE your_database_name;
```

✅ No need to manually create tables!  
**Sequelize will automatically sync and create the `users` and `blogs` tables** based on models when backend server runs.

---

### 6. Run Backend Server

```bash
cd backend
npm run dev
```
Backend will start at `http://localhost:5000`.

---

### 7. Run Frontend Development Server

```bash
cd BLOG-MANAGEMENT
npm run dev
```
Frontend runs typically on `http://localhost:5173/` (if Vite) or `http://localhost:3000/` (if CRA).

---

## 🌟 Features

- **JWT Authentication** (token saved in localStorage)
- **Sequelize ORM** (for PostgreSQL database interaction)
- **User Signup & Login** (secure with Bcrypt hashed passwords)
- **Protected Routes** (user cannot access Home page without login)
- **Create Blogs** (admin or user after login)
- **Simple Navbar** (Links for Login, Signup, Home)
- **Role Based Access** (Create Blog visible only for admin users)

---

## 📢 Important Points

- Unauthorized access to `/` (Home) redirects automatically to `/login` with a message: **"Please login first"**.
- Sequelize Models automatically generate tables on first run.
- User passwords are securely hashed.
- JWT is used for session authentication and protection.

---

## 📄 API Endpoints

| Method | Route | Purpose |
|--------|-------|---------|
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Login user and get JWT token |
| GET    | `/api/blogs`       | Get all blogs (protected route) |
| POST   | `/api/blogs/create` | Create new blog (protected route) |

---

## 🎯 Future Improvements

- Logout functionality
- Refresh Tokens and Expiry handling
- Profile pages
- Blog Editing/Deleting
- Admin Dashboard
- UI/UX Improvements

---

## 🖥️ Requirements

- Node.js installed
- PostgreSQL installed
- npm installed
- Basic knowledge of React, Node.js, Sequelize

---

## 🧡 Thank You!

If you find this project helpful, kindly give it a ⭐ star on GitHub and share feedback.  
Happy Coding! 🚀

---

# ✅ Extra Suggestions (Optional)

You should also add these files:

### 1. `.gitignore` (backend and frontend)

**backend/.gitignore**
```
node_modules
.env
```

**frontend/.gitignore**
```
node_modules
dist
```

---

# 📢 Final Quick Note:

To login as an admin, first go on postman and on postman write down this url 'youlocalhost/api/auth/signup' and add following details on the json body 🚀
```json
{
  "name": "Your name",
  "email": "your email",
  "role": "admin",
}
```

Here now you become an admin and now you can login from the frontend and can do CRUD operation.
