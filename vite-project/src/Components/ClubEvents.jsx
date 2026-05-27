import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClubEvents() {
  const [joinedEvents, setJoinedEvents] = useState({});
  const [capacities, setCapacities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/event-slots')
      .then(res => res.json())
      .then(data => setCapacities(data));
  }, []);

  const handleJoin = async (id, title) => {
    const savedUser = localStorage.getItem('username');
    
    if (!savedUser) {
      alert("🛑 Access Denied: You must sign in first!");
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/join-event', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'user-id': savedUser 
        },
        body: JSON.stringify({ eventId: id, eventTitle: title })
      });

      const data = await response.json();

      if (response.ok) {
        // 1. Mark this specific button as "Confirmed"
        setJoinedEvents(prev => ({ ...prev, [id]: true }));

        // 2. FORCE THE UI UPDATE (Optimistic Update)
        // We create a brand new object to trigger a re-render
        setCapacities(prevCapacities => {
          const updated = { ...prevCapacities };
          if (updated[id]) {
            updated[id] = { 
              ...updated[id], 
              current: updated[id].current + 1 
            };
          }
          return updated;
        });

        console.log("✅ State forced to update for ID:", id);

      
    } else {
      const data = await response.json();
      alert(data.message);
    }
  } catch (error) {
    alert("Server connection failed.");
  }
};

  const eventsList = [
    { id: 1, title: "Checkmate & Chill", date: "April 25, 2026", location: "Connect Coffee, Westlands", type: "Strategy", img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=500", desc: "Master aggressive openings and connect with fellow tacticians in our monthly tournament." },
    { id: 2, title: "Bloom & Build: Live", date: "April 30, 2026", location: "Ikigai, Riverside", type: "Podcast", img: "https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=500", desc: "A live podcast recording on generational growth, career pivots, and finding your voice in Nairobi's tech scene." },
    { id: 3, title: "Code & Coffee", date: "May 2, 2026", location: "Kesh Kesh, Kilimani", type: "Tech", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500", desc: "Troubleshooting registration routes and server logic together. Bring your laptop!" },
    { id: 4, title: "Pilates Sunday", date: "May 10, 2026", location: "The Nairobi Arboretum", type: "Wellness", img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=500", desc: "Find your core strength and unwind with a guided sunset session on the lawn." },
    { id: 5, title: "Generational Healing", date: "May 18, 2026", location: "KOFISI Centres", type: "Wellness", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=500", desc: "A safe space to discuss mother-daughter dynamics and navigating personal growth." }
  ];

  return (
    <section style={{ padding: '120px 20px', backgroundColor: '#fff9fa' }}>
      <h2 style={{ textAlign: 'center', color: '#ff85a1', fontSize: '2.5rem' }}>Upcoming Club Events</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {eventsList.map(event => {
          const stats = capacities[event.id] || { max: 10, current: 0 };
          const spotsLeft = stats.max - stats.current;

          return (
            <div key={event.id} style={{ backgroundColor: 'white', width: '310px', borderRadius: '25px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <img src={event.img} style={{ width: '100%', height: '180px', objectFit: 'cover' }} alt={event.title} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0' }}>{event.title}</h3>
                <p style={{ color: '#ff85a1', fontSize: '0.8rem', margin: '5px 0' }}>📍 {event.location} | 📅 {event.date}</p>
                <p style={{ fontSize: '0.85rem', color: '#666', height: '60px' }}>{event.desc}</p>
                
                <p style={{ color: spotsLeft <= 2 ? 'red' : '#ff85a1', fontWeight: 'bold', fontSize: '0.8rem' }}>
                   {spotsLeft > 0 ? `✨ Only ${spotsLeft} spots left!` : "🛑 FULL"}
                </p>

                <button 
                  onClick={() => handleJoin(event.id, event.title)}
                  disabled={joinedEvents[event.id] || spotsLeft <= 0}
                  style={{ width: '100%', padding: '12px', borderRadius: '15px', border: 'none', backgroundColor: joinedEvents[event.id] ? '#e0e0e0' : '#ff85a1', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  {joinedEvents[event.id] ? "RSVP Confirmed" : "Count Me In ✨"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}