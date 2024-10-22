import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Box, Link, CardContent, Snackbar, Alert } from '@mui/material';
import { keyframes } from '@mui/system';
import axios from 'axios';
import SignUpImage from '../../src/assets/images/LogIn3.jpg';
import { useNavigate } from 'react-router-dom';

// Define Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounceHover = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', severity: 'success', open: false });
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setNotification({ message: 'Passwords do not match', severity: 'error', open: true });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      setNotification({ message: 'Invalid email format', severity: 'error', open: true });
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      setNotification({ message: 'Invalid phone number format', severity: 'error', open: true });
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/signup', { username, email, password, phoneNumber });
      setNotification({ message: 'Sign Up Successful', severity: 'success', open: true });
      navigate('/login');
    } catch (error) {
      setNotification({ message: 'Sign Up Failed', severity: 'error', open: true });
    } finally {
      setLoading(false);
    }
  };

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid 
        item 
        xs={12} sm={7} md={7} lg={7} xl={7}
        sx={{
          backgroundImage: `url(${SignUpImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: `${fadeIn} 1.5s ease-out`
        }}
      />
      <Grid 
        item 
        xs={12} sm={5} md={5} lg={5} xl={3.5} 
        container 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <Box sx={{ width: '80%', animation: `${fadeIn} 1.5s ease-out` }}>
          <CardContent>
            <Typography component="h1" variant="h5" textAlign="center" fontWeight="bold">
              Sign Up
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ animation: `${fadeIn} 0.8s ease-out` }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ animation: `${fadeIn} 1s ease-out` }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ animation: `${fadeIn} 1.2s ease-out` }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ animation: `${fadeIn} 1.4s ease-out` }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ animation: `${fadeIn} 1.6s ease-out` }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSignUp}
              sx={{
                mt: 3, mb: 2,
                animation: `${fadeIn} 2s ease-out`,
                transition: 'all 0.3s ease',
              }}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <Link onClick={handleLogIn} variant="body2" textAlign="center" display="block">
              Already have an account? Login
            </Link>
          </CardContent>
        </Box>
      </Grid>

      {/* Notification Snackbar */}
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleCloseNotification}>
        <Alert onClose={handleCloseNotification} severity={notification.severity as any} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default SignUp;
