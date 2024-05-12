import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function LoginForm({ setLogged }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSumbit = async () => {
    await axios.post('https://jarvis-nodejs.onrender.com/session', {
      password,
      username,
    }, {
      headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5174/',
      },
    })
      .then(() => setLogged(true))
      .catch((err) => err);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: '20px 40px',
      width: '25%',
      justifyContent: 'center',
      margin: '0 30px',
      borderRadius: '8px',
      alignItems: 'center',
      background: '#1d1e1e',
    }}
    >
      <Typography>Login</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          variant="filled"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ background: '#FFF', borderRadius: '8px' }}
          InputProps={{ disableUnderline: true }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ disableUnderline: true }}
          sx={{ background: '#FFF', borderRadius: '8px' }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleSumbit}
      >
        Submit
      </Button>
    </Box>
  );
}

LoginForm.propTypes = {
  setLogged: PropTypes.func.isRequired,
};

export default LoginForm;
