# 🚀 JobTrack

**JobTrack** is an innovative and user-friendly job-hunting platform designed to connect job seekers with job opportunities from multiple companies — all within a sleek, single-page application. Whether you're browsing companies, filtering jobs, or applying directly, JobTrack offers a streamlined and modern solution for job seekers.

🌐 **Live Website:**  
🔗 [Visit JobTrack Live](https://jobtrack-ae487.web.app/)

---

## 🎯 Project Purpose

The purpose of **JobTrack** is to centralize the job search process. Users can:

- View detailed company profiles and job listings
- Filter jobs by criteria
- Apply directly via external company links
- Manage and update their personal profile

---

## 🧩 Key Features

- 🔐 Private/Protected Routes  
- 📄 JSON-driven Data  
- 📱 Fully Responsive Design  
- 💼 Modal-based Job Details with Apply Option  
- 🔁 Dynamic Routing using React Router DOM  
- 👤 User Profile Management and Update  
- ❌ Custom 404 Not Found Page  
- 🎞️ Smooth Animations with Framer Motion  
- 🎨 Styled with Tailwind CSS and DaisyUI  
- 🔒 Secure Password Validation

---

## 🛠️ Tech Stack & Dependencies

| Package/Library      | Purpose                        |
|----------------------|--------------------------------|
| **React**            | Frontend framework             |
| **React Router DOM** | SPA routing                    |
| **Firebase**         | Authentication and hosting     |
| **Tailwind CSS**     | Utility-first CSS styling      |
| **DaisyUI**          | Prebuilt component styling     |
| **Framer Motion**    | Smooth UI animations           |

---

### 🧑‍💻 Local Setup Instructions

Follow these steps to run the client project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/SazidSifat/job-portal-with-react.git
cd job-portal-with-react
```

### 📦 Dependencies

```json
{
    "dependencies": {
    "@heroicons/react": "^2.2.0",
    "@tailwindcss/vite": "^4.1.5",
    "daisyui": "^5.0.35",
    "firebase": "^11.6.1",
    "motion": "^12.10.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.5.3",
    "react-toastify": "^11.0.5",
    "tailwindcss": "^4.1.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}

```
### 2. Install dependencies
```bash
npm install
```
### 3. Create a .env file in the root directory and add the following:
```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_id
VITE_appId=your_app_id
```

### 4. Start the development server
```bash
npm run dev
```
