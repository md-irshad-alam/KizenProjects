# 📊 Lead Generation Analytics Dashboard

A SaaS platform for marketing agencies to analyze and optimize lead generation campaigns across multiple channels (Paid Ads, Email, Social Media, etc.).

## 🧾 Overview

This dashboard empowers marketing managers to monitor campaign performance, track lead quality, and allocate budgets more effectively using real-time analytics.

Built with:

- **Frontend**: React.js + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Deployment**: Vercel / Netlify (frontend), Render / Heroku (backend)

---

## ✅ Features

| Feature                            | Description                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| 🔐 Authentication                  | Login and Signup using JWT tokens                               |
| 📊 Real-time Dashboard             | Visualize key metrics like leads, conversion rate, budget spent |
| 🔍 Interactive Filters             | Filter by date range, campaign, lead score                      |
| 📈 Performance Charts              | Line, Bar, and Donut charts powered by Chart.js                 |
| 🌐 Multi-channel Tracking          | Track leads from Facebook, Instagram, Google Ads, Email         |
| 💾 Secure Data Storage             | Leads stored in MongoDB securely                                |
| 🚀 Optimized for Millions of Leads | Backend optimized with aggregation pipelines and indexing       |

---

## 🛠️ Tech Stack

| Layer        | Technology                                           |
| ------------ | ---------------------------------------------------- |
| **Frontend** | React.js + TailwindCSS                               |
| **Styling**  | TailwindCSS                                          |
| **Backend**  | Node.js + Express                                    |
| **Database** | MongoDB                                              |
| **Auth**     | JWT                                                  |
| **Charts**   | react-chartjs-2                                      |
| **Hosting**  | Frontend: Vercel / Netlify; Backend: Render / Heroku |

---

## 🌐 API Endpoints

| Method | Endpoint             | Description                                      |
| ------ | -------------------- | ------------------------------------------------ |
| `POST` | `/api/auth/register` | Register a new user                              |
| `POST` | `/api/auth/login`    | Authenticate and receive JWT token               |
| `GET`  | `/api/leads`         | Fetch all leads with optional filters            |
| `POST` | `/api/leads`         | Create a new lead                                |
| `POST` | `/api/create-lead`   | Alternative route for capturing form submissions |

> All routes are protected except auth and create-lead (public route).

---

## 📁 Folder Structure

lead-generation-dashboard/
├── backend/
│ ├── controllers/
│ │ └── leadController.js
│ │ └── authController.js
│ ├── models/
│ │ └── User.js
│ │ └── Lead.js
│ ├── routes/
│ │ └── leadRoutes.js
│ │ └── authRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── config/
│ │ └── db.js
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── tailwind.config.js
│ └── package.json
│
└── README.md

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/lead-generation-dashboard.git
cd lead-generation-dashboard
```

MONGO_URI=mongodb://localhost:27017/lead_dashboard
JWT_SECRET=your_jwt_secret_key
PORT=5000
Dashboard UI Overview
Key Components:
KPI Summary Cards : Total Leads, Conversion Rate, Budget Spent, High-Quality Leads
Interactive Filters : Date Range, Campaign, Source, Lead Score
Performance Charts :
Line Chart – Performance Over Time
Bar Chart – Channel Comparison
Donut Chart – Lead Quality Distribution
Recent Leads Table
Responsive Design – Works on desktop, tablet, and mobile
