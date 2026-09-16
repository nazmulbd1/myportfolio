# Nazmul Sheikh Nahid — Portfolio

React + Tailwind CSS দিয়ে বানানো পোর্টফোলিও ওয়েবসাইট। Vite দিয়ে সেটআপ করা।

## চালু করবেন যেভাবে

```bash
npm install
npm run dev
```

তারপর টার্মিনালে দেখানো লোকাল লিংকে (সাধারণত http://localhost:5173) ব্রাউজারে খুলুন।

Production build বানাতে:

```bash
npm run build
npm run preview
```

## যা যা customize করবেন

1. **আপনার তথ্য** — `src/data/portfolioData.js` ফাইলে name, email, phone, social links, skills, services, projects, experience/education — সবকিছু একজায়গায় করা আছে। এই ফাইলটা এডিট করলেই পুরো সাইট আপডেট হয়ে যাবে।
2. **আপনার ছবি** — `src/components/Banner.jsx` ফাইলে placeholder box আছে (কমেন্ট করা আছে ঠিক কোথায়)। `public/` ফোল্ডারে আপনার ছবি (যেমন `profile.jpg`) রেখে সেই কমেন্ট অনুযায়ী `<img src="/profile.jpg" ... />` বসিয়ে দিন।
3. **CV/Resume** — `public/cv.pdf` এখন একটা placeholder ফাইল। এটাকে আপনার real CV দিয়ে replace করে দিন (একই ফাইলের নাম `cv.pdf` রাখলে কোড পরিবর্তন লাগবে না)।
4. **Contact form** — এই মুহূর্তে ফর্মটা সাবমিট হলে শুধু একটা মেসেজ দেখায়, সত্যিকারের ইমেইল পাঠায় না। `src/components/Contact.jsx`-এ `handleSubmit` ফাংশনে কমেন্ট আছে — Formspree, EmailJS বা নিজের Express backend (আপনি যেটা শিখছেন) দিয়ে সহজেই যুক্ত করতে পারবেন।
5. **Blog মেনু** — Navbar-এ "Blog" লিংক এখন কোথাও যায় না (`#`)। ভবিষ্যতে ব্লগ পেজ বানালে `src/data/portfolioData.js`-এর `navLinks`-এ href আপডেট করে দিন।

## কী দিয়ে বানানো

- React 18 + Vite
- Tailwind CSS (custom color palette — `tailwind.config.js`)
- lucide-react (আইকনের জন্য)

## ফোল্ডার স্ট্রাকচার

```
src/
  components/   → Navbar, Banner, About, Skills, Services, Projects, Experience, Contact, Footer
  data/         → portfolioData.js (সব কনটেন্ট এখানে)
  App.jsx       → সব সেকশন এখানে সাজানো
  index.css     → Tailwind + কিছু global style
public/
  cv.pdf        → placeholder CV, replace করুন
```
