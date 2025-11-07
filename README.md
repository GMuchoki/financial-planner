# 💰 Financial Planner

A full-stack **financial planner web app** for tracking income, expenses, budgets, goals, and insights.
Built with **React**, **Express**, and **Supabase**.

---

## 🚀 Tech Stack

**Frontend:**

* React (Vite)
* Tailwind CSS
* Axios

**Backend:**

* Express.js
* Supabase JS Client
* dotenv for environment variables
* CORS + JSON middleware

**Database:**

* Supabase (PostgreSQL)

  * `transactions` table with RLS enabled

---

## 🧱 Project Structure

```
financial-planner/
│
├── client/                   # React frontend
│   ├── src/
│   │   ├── pages/            # Landing, Login, Dashboard, etc.
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # Auth context and hooks
│   │   ├── services/         # API calls (axios)
│   │   └── App.jsx
│   └── package.json
│
└── server/                   # Express backend
    ├── src/
    │   ├── app.js            # Express app configuration
    │   ├── server.js         # Entry point (runs server)
    │   ├── routes/           # API routes (auth, transactions)
    │   └── services/
    │       └── supabase.js   # Supabase client setup
    ├── .env
    └── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/GMuchoki/financial-planner.git
cd financial-planner
```

### 2. Setup Supabase

* Create a Supabase project at [https://supabase.com](https://supabase.com)
* Create a table named `transactions` with columns:

| Column           | Type      | Default        |
| ---------------- | --------- | -------------- |
| id               | bigint    | auto increment |
| user_id          | uuid      | `auth.uid()`   |
| date             | date      |                |
| item             | text      |                |
| category         | text      |                |
| amount           | numeric   |                |
| payment_method   | text      |                |
| payment_provider | text      |                |
| transaction_type | text      |                |
| created_at       | timestamp | `now()`        |
| updated_at       | timestamp | `now()`        |

Enable **Row-Level Security (RLS)** and add policies for:

* Insert/Select rows where `auth.uid() = user_id`

### 3. Configure `.env`

In `/server/.env`:

```
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-service-role-key
PORT=5000
```

### 4. Install dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 5. Run the backend

```bash
npm run dev
```

### 6. Run the frontend

In another terminal:

```bash
cd client
npm run dev
```

---

## 🔐 Authentication Flow

* Users register and log in via **Supabase Auth**
* Upon login, Supabase returns a JWT access token
* The React app stores the token and sends it with every API request
* Express middleware validates the token
* Supabase Row-Level Security ensures users only access their own data

---

## 🧮 Core Features (MVP)

* ✅ Landing page introduction
* ✅ Login & Signup
* ✅ Dashboard (date filters + totals)
* ✅ Income & Expense tracking
* ✅ Transactions overview
* 🔄 Budget planning (coming soon)
* 🎯 Goals tracking (coming soon)
* 🔁 Recurring payments (coming soon)
* 💡 AI Insights (future enhancement)

---

## 🧠 Development Notes

* Backend can be tested using **Postman**
* Use Supabase SQL editor for schema updates
* Authentication via Supabase `auth.uid()` ensures secure multi-user data

---

## 📄 License

MIT License © 2025 [Geoffrey Munene Muchoki](https://github.com/GMuchoki)
