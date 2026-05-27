# Girls Club

A community web app built for women to share skills, ideas, knowledge and wellness resources. This was a solo project I did in my second semester. Users can create an account, log in, browse club events and get in touch through the contact page.

## What it does

- Home page with a banner introducing the community
- About us section explaining what the club is about
- Events page showing club activities
- Contact page
- Sign up and login with data saved to a MongoDB database

## Tech stack

Frontend: React, React Router, CSS

Backend: Node.js, Express, MongoDB, Mongoose

## Project structure

```
girls-club/
├── src/
│   ├── Components/
│   │   ├── Navigation.jsx
│   │   ├── Banner.jsx
│   │   ├── Services.jsx
│   │   ├── ClubEvents.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SignUp.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   └── App.css
└── backend/
    ├── index.js
    └── package.json
```

## How to run it

Install frontend dependencies and start the app:

```bash
npm install
npm start
```

In a separate terminal, start the backend:

```bash
cd backend
npm install
node index.js
```

Make sure you have MongoDB running locally or swap in your own connection string.

## Notes

This was one of my first fullstack projects so there's definitely room to improve — things like proper auth with JWT, form validation and a more polished UI are on my list for whenever I revisit it.