const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = 5000;

// 1. Middlewares
app.use(cors()); 
app.use(express.json()); 

// --- NEW MIDDLEWARE: The Security Guard ---
const requireLogin = (req, res, next) => {
    // This checks the request headers for a 'user-id' [cite: 33, 34]
    const userId = req.headers['user-id'];
    
    if (!userId) {
        console.log("🛑 ACCESS DENIED: No user ID found in headers");
        return res.status(401).json({ message: "Please login to join events! ✨" });
    }
    
    // If user-id exists, proceed to the next function [cite: 35]
    next(); 
};

// 2. Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/girlsClubDB')
    .then(() => console.log(" ✅ MONGODB CONNECTED"))
    .catch(err => console.log(" ❌ MONGODB ERROR:", err));

// 3. Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// 4. Routes

// Public: Registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "Successfully joined the club!" });
    } catch (error) {
        res.status(400).json({ message: "Username taken or server error." });
    }
});

// Public: Login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        res.status(200).json({ message: "Welcome back!", user: user.username });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// PROTECTED ROUTE: Uses requireLogin middleware [cite: 31, 34]
app.post('/join-event', requireLogin, (req, res) => {
    const { eventTitle } = req.body;
    const currentUser = req.headers['user-id'];
    console.log(`🎟️ RSVP: ${currentUser} joined ${eventTitle}`);
    res.status(200).json({ message: `You're on the list for ${eventTitle}! ❤️` });
});


// 5. Health Check & Start
app.get('/', (req, res) => res.send("🚀 SERVER RESTARTED: Capacity Logic Active!"));


// --- CAPACITY LOGIC ---
const eventCapacities = {
    1: { max: 10, current: 5 }, // Checkmate & Chill
    2: { max: 15, current: 8 }, // Bloom & Build
    3: { max: 5,  current: 2 }, // Code & Coffee
    4: { max: 20, current: 10}, // Pilates
    5: { max: 12, current: 4 }  // Healing
};

// New Route to get the counts
app.get('/event-slots', (req, res) => {
    res.json(eventCapacities);
});

// Update your existing /join-event to check these numbers
app.post('/join-event', requireLogin, (req, res) => {
    const { eventId, eventTitle } = req.body;
    const currentUser = req.headers['user-id']; // The ID from your login

    // If the middleware (requireLogin) passes, we proceed:
    if (eventCapacities[eventId]) {
        if (eventCapacities[eventId].current >= eventCapacities[eventId].max) {
            return res.status(400).json({ message: "🛑 Sorry, this event is full!" });
        }
        eventCapacities[eventId].current += 1;
    }

    console.log(`🎟️ RSVP SUCCESS: ${currentUser} joined ${eventTitle}`);
    res.status(200).json({ message: `You're on the list for ${eventTitle}! ❤️` });
});
app.listen(PORT, () => {
    console.log(` 🚀 Server listening at http://localhost:${PORT}`);
});