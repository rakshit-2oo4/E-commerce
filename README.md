MERN E-commerce Platform
 Project Overview
A single-vendor e-commerce web app using MERN stack (MongoDB, Express, React, Node). Features product display, user authentication, a shopping cart, and admin tools. Aims for robust functionality and an attractive UI.

Key Features
Authentication: User registration/login, JWTs, admin roles, protected routes.

Product Management (Admin): Add, edit, delete, and view products (name, description, price, stock, images).

Product Display (User): Browse products, view details. (Planned: Search/filter).

Shopping Cart: Add/remove items, adjust quantities, view summary.

Order Management: (Planned: Checkout, user order history, admin order status).

User Profile: (Planned: View/edit user info).

Responsive Design: Built with Bootstrap 5.

 Technologies
Backend
Node.js, Express.js: Server-side runtime and web framework.

MongoDB, Mongoose: Database and ODM.

Security: JWT, Bcryptjs.

Utilities: Dotenv, Express-Async-Handler.

Frontend
React.js, Vite: UI library and fast build tool.

React Router DOM: Client-side routing.

Redux Toolkit: State management.

React Bootstrap: UI components.

Tools: Axios (HTTP client), Font Awesome (icons).

 Getting Started
Clone Repository: git clone <your-repo-url.git>

Backend Setup:

cd backend

npm install

Create .env (PORT, MONGO_URI, JWT_SECRET, NODE_ENV).

npm run server (starts on http://localhost:5000).

Frontend Setup:

cd ../frontend

npm install

npm run dev (starts on http://localhost:5173).

 Usage
Guest: Browse products.

Registered User: Cart, (planned: checkout, order history).

Admin: Manage products, (planned: users, orders).

Admin Access
Register a user, then manually set isAdmin: true in MongoDB:
db.users.updateOne({ email: "your_registered_email@example.com" }, { $set: { isAdmin: true } })

 Future Enhancements
Product Reviews & Ratings.

Full checkout and order tracking.

Image upload for products.

Advanced UI/UX.

Payment Gateway Integration.

Deployment.
