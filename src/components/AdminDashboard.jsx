import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        navigate('/admin');
        return;
      }

      try {
        const response = await fetch('https://portfolio-backend-3c2a.onrender.com/api/messages', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError('Error loading messages. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  if (loading) {
    return <div className="dashboard-loading">Loading messages...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="font-display">INBOX</h1>
          <p>You have {messages.length} messages</p>
        </div>
        <button onClick={handleLogout} className="glass-btn logout-btn">LOGOUT</button>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <div className="messages-grid">
        {messages.length === 0 && !error ? (
          <div className="no-messages">No messages received yet.</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <div className="msg-card-header">
                <div className="msg-sender">
                  <h3 className="msg-name">{msg.name}</h3>
                  <a href={`mailto:${msg.email}`} className="msg-email">{msg.email}</a>
                </div>
                <div className="msg-date">
                  {new Date(msg.created_at).toLocaleDateString()}
                  <br />
                  <span className="msg-time">{new Date(msg.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
              </div>
              <div className="msg-body">
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
