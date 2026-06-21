# Girls Club

A community web app built for women to share skills, ideas, knowledge and wellness resources. This was a solo project I did in my second semester. Users can create an account, log in, browse club events and get in touch through the contact page.

## What it does

- Home page with a banner introducing the community
- About us section explaining what the club is about
- Events page showing club activities
- Contact page
- Sign up and login with data saved to a MongoDB database

  Screenshots of the Platform:
  <img width="1918" height="1019" alt="image" src="https://github.com/user-attachments/assets/2a1577f0-0888-480f-8e35-56c01c8ed34a" />
  <img width="1919" height="959" alt="image" src="https://github.com/user-attachments/assets/fbe2e66e-16cf-4886-9a03-7ec0a52740f3" />
<img width="1919" height="956" alt="image" src="https://github.com/user-attachments/assets/d3de687a-f038-4d89-ada3-05df086af746" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/fbc8bcb4-0fb5-45a6-b5a8-c5b9652bbbeb" />
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/d2b2e7db-f6ef-4c6f-a56d-9bcc03c5851c" />



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
