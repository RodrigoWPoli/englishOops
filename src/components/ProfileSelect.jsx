import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3001/api';
const COLORS = ['#e50914', '#54b9f5', '#b9090b', '#000', '#eee']; // Netflix-ish colors

export function ProfileSelect({ onSelect }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/profiles`)
      .then(res => res.json())
      .then(data => {
        setProfiles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch profiles:', err);
        setLoading(false);
      });
  }, []);

  function handleAdd() {
    const name = prompt('Enter your name:');
    if (!name) return;
    const avatar = `/avatar_student_frustrated_...png`; // Placeholder/Default
    fetch(`${API_BASE}/profiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, avatar })
    })
    .then(res => res.json())
    .then(newP => setProfiles([...profiles, newP]));
  }

  if (loading) return <div className="loading">Loading profiles...</div>;

  return (
    <div className="profile-select">
      <h1 className="profile-select-title">Who's Learning?</h1>
      <div className="profile-grid">
        {profiles.map((p, idx) => (
          <button 
            key={p.id} 
            className="profile-card"
            onClick={() => onSelect(p)}
          >
            <div className="profile-avatar-wrap" style={{ 
              backgroundColor: COLORS[idx % COLORS.length] 
            }}>
              {p.avatar ? (
                <img src={p.avatar} alt={p.name} className="profile-avatar" />
              ) : null}
            </div>
            <div className="profile-name">{p.name}</div>
            <div className="profile-lvl">Level {p.level || 1}</div>
          </button>
        ))}
        
        <button className="profile-card profile-add" onClick={handleAdd}>
          <div className="profile-avatar-wrap add-icon">
            <span>+</span>
          </div>
          <div className="profile-name">Add Profile</div>
        </button>
      </div>
      <button className="manage-profiles-btn">Manage Profiles</button>
    </div>
  );
}
