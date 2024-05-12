import React, { useEffect, useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import axios from 'axios';
import LoginForm from './components/loginForm/loginForm';
import DisconnectButton from './components/disconnectButton/disconnectButton';
import SearchPage from './pages/searchPage';

function App() {
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    axios.get('https://jarvis-nodejs.onrender.com/session', { withCredentials: true })
      .then(() => { setLogged(true); setIsLoading(false); })
      .catch(() => { setLogged(false); setIsLoading(false); });
  }, []);

  useEffect(() => {
    axios.get('https://jarvis-nodejs.onrender.com/discussion')
      .then((res) => setDiscussions(res.data
        // eslint-disable-next-line no-underscore-dangle
        .map((discussion) => ({ ...discussion, id: discussion._id }))))
      .catch((err) => err);
  }, [logged === true]);

  const handleDisconnect = () => {
    axios.delete('https://jarvis-nodejs.onrender.com/session/delete', { withCredentials: true })
      .then(() => { setLogged(false); });
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      width: '60vw',
      borderRadius: '8px',
    }}
    >
      {logged && <DisconnectButton handleClick={handleDisconnect} />}
      <h1>J.A.R.V.I.S</h1>
      {(!logged && !isLoading)
        ? (
          <LoginForm setLogged={setLogged} />
        )
        : (
          <SearchPage discussions={discussions} setDiscussions={setDiscussions} />
        )}
    </Box>
  );
}

export default App;
