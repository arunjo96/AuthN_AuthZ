# 🔐 User Authentication and Authorization with Bearer Token  

This project demonstrates a **authentication and authorization system** using **JWT (Bearer Tokens)**.  
It follows the **MVC pattern** and integrates **MongoDB (via Mongoose)** for data persistence.  

Users can **register, log in, and access protected routes** with role-based access support.  

---

## 🚀 Tech Stack  

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB + Mongoose** – Database and ORM  
- **JWT (jsonwebtoken)** – Authentication tokens  
- **bcryptjs** – Password hashing  
- **dotenv** – Environment variable management  

---

## 📂 Project Structure  

📦 authn_and_authz
├── src
│ ├── config
│ │ └── DB.js
│ ├── controllers
│ │ └── authController.js
│ ├── middlewares
│ │ ├── authMiddleware.js
│ │ └── errorHandler.js
│ ├── model
│ │ └── User.js
│ └── routes
│ └── authRoutes.js
├── index.js
├── package.json
├── .env
├── authn_authz_collection.json 

## 🚀 Environment Variables

**PORT**: Server port (default: 7000)

**DB_USER**: MongoDB username

**DB_PASSWORD**: MongoDB password

**DB_NAME**: MongoDB database name

**ENCRYPT_SALT_ROUNDS**: Salt rounds for bcrypt password hashing

**JWT_AUTH_SECRET_KEY**: Secret key for JWT token signing


## 📖 API Documentation

Import the included `authn_authz_collection.json` into Postman to test all APIs.

## ⚙️ Installation & Setup

 Clone the repo
   ```bash
   git clone https://github.com/arunjo96/AuthN_AuthZ.git


