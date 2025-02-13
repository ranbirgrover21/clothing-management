import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message').then((res) => res.text())
    .then((data) => setMessage(data))
    .catch((err) => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );

}

export default App;
