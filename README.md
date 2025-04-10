# 🛒 Shopping Website — React + Fake Store API

This is a front-end internship assignment project. It’s a simple and responsive shopping website built using React and Fake Store API, with user login, product listing, category filters, product detail view, and a full cart flow.

---

## 🔧 Tech Stack

- **React.js (Vite)**
- **React Router v6**
- **React Hooks**
- **Plain CSS (mobile-first responsive design)**
- **Fake Store API** — [https://fakestoreapi.com](https://fakestoreapi.com)

---

## 🚀 Features

### ✅ Login Page
- Username & password form.
- Authenticates using `/auth/login` from Fake Store API.
- Stores JWT token in `localStorage`.
- Redirects to homepage after login.

> ✅ Use these valid credentials for testing:
> - **Username:** `mor_2314`  
> - **Password:** `83r5^_`

---

### 🏠 Product Listing (Home)
- Fetches all products using `/products`.
- Categories displayed as buttons using `/products/categories`.
- Filters products by category using `/products/category/:name`.
- Responsive grid layout (mobile-first).
- Optional search bar (if added).

---

### 📦 Product Detail Page
- Displays full product info (image, title, description, price).
- Add to Cart button.

---

### 🛒 Cart Page
- Shows added products.
- Allows quantity update and removal.
- Displays total price.
- Checkout button with a success popup.

---

### 🔝 Header / Navigation
- Includes links to `Home`, `Cart`, and `Logout`.
- Shows cart item count.
- Logout clears JWT and redirects to Login.

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Nishu-18/shoping_website.git

# 2. Move into project folder
cd shopping-app

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev

