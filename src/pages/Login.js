/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { TextField, Button, Paper, Typography } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f4f6f8'
      }}
    >
      <Paper style={{ padding: 30, width: 350, borderRadius: 12 }}>
        <Typography variant="h5" gutterBottom>
          KOWE Admin Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          style={{ marginTop: 20 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </div>
  );
}

export default Login; 
*/

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { TextField, Button, Paper, Typography } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    try {
      setLoading(true);

      const res = await API.post('/auth/login', {
        email,
        password
      });

      // Save token
      localStorage.setItem('token', res.data.token);

      // Redirect
      navigate('/dashboard');

    } catch (err) {
      console.error('Login error:', err?.response?.data || err.message);

      const message =
        err?.response?.data?.message || 'Login failed';

      alert(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f4f6f8'
      }}
    >
      <Paper style={{ padding: 30, width: 350, borderRadius: 12 }}>
        <Typography variant="h5" gutterBottom>
          KOWE Admin Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          style={{ marginTop: 20 }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
}

export default Login;