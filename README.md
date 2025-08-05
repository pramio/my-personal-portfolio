# my-personal-portfolio

**A modern developer portfolio that features animated sections, responsive design, smooth scrolling, React Toastify notifications, GSAP and Framer Motion effects, and a full-featured contact form with email sending powered by a secure Node.js backend.**

## ✨ Features

- **Beautiful animated sections** (Hero, About, Projects, Experience, Contact)
- **Sleek dark mode design** with gradient accents
- **Responsive layout**; works perfectly on desktop, tablet, and mobile
- **Horizontal scroll project gallery with GSAP animations**
- **Contact form** with real email sending via Nodemailer (Gmail App Password support!)
- **React Toastify notifications** for user feedback
- **Custom animated cursor and parallax background effects**
- **Easy customization** of projects, skills, and sections

## 📦 Installation & Setup

### 1. **Clone the Repository**

```bash
git clone https://github.com/pramio/my-personal-portfolio.git
cd fullstack-portfolio
```

### 2. **Backend Setup (API/Email Service)**

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend/` directory with the following content:
  ```
  PORT=5000
  EMAIL_SERVICE=gmail
  EMAIL_USER=your.email@gmail.com
  EMAIL_PASS=your_16_character_app_password
  EMAIL_TO=your.email@gmail.com
  ```
  - Be sure to use a **Gmail App Password** (not your main Gmail password). [How to generate](https://support.google.com/accounts/answer/185833)
- Start the backend server:
  ```bash
  npm run dev
  ```

### 3. **Frontend Setup (React App)**

```bash
cd ../frontend
npm install
```

- Start the frontend development server:
  ```bash
  npm start
  ```

- If your frontend and backend run on different ports AND you want to use fetch without CORS or proxy issues, set up a proxy in the React frontend's `package.json`:
  ```json
  "proxy": "http://localhost:5000"
  ```

## ⚡️ Usage

- Visit `http://localhost:5173` (or your configured frontend port).
- Explore your animated portfolio sections.
- Try submitting the contact form — you’ll receive a real email notification!
- Edit project data/sections/skills in the React code as needed.

## 🛠️ Customization

- **Portfolio content:**  
  Edit the `src/components` files to customize your name, bio, skills, experience, and projects.
- **Project gallery images:**  
  Add or change image files in the assets folder and update your projects array or JSON accordingly.
- **Contact Email:**  
  Edit the `EMAIL_TO` field in your backend `.env` to change the recipient.
- **Styling and branding:**  
  Modify Tailwind config or use your own CSS for unique branding.

## 💡 Troubleshooting

- **Contact form isn’t working?**
  - Make sure your backend is running
  - Ensure your `.env` has a valid Gmail & App Password  
  - Restart backend if you change `.env`
  - Check the backend terminal for error messages

- **GSAP/animation issues?**
  - Confirm animations are imported and registered
  - See browser console for JS errors

- **Toastify not showing notifications?**
  - Ensure `` is placed inside root App and React Toastify CSS is imported.

---
   ## 📬 Contact

Have questions or suggestions?

**Palash Ch Sarkar**
📧 [palashchsarkar42@gmail.com]

---

## ⭐️ Show Your Support

If you found this project helpful, feel free to:

* ⭐ Star this repo
* 🍴 Fork it
* 🧠 Submit ideas or improvements via issues or pull requests

---


