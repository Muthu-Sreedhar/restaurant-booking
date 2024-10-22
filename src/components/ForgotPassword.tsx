import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ForgotPass from "../../src/assets/images/FP-1.jpg";

const ForgotPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (newPassword === confirmPassword) {
            setSuccessMessage('Password Changed Successfully');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else {
            setSuccessMessage('Passwords do not match');
        }
    };

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item xs={false} sm={4} md={7}>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    style={{ height: '100%' }}
                >
                    <Box
                        sx={{
                            backgroundImage: `url(${ForgotPass})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </motion.div>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Box}
                display="flex" flexDirection="column" justifyContent="center" p={5}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Reset Password
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
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
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 2, mb: 2, py: 1.5 }}
                    >
                        Submit
                    </Button>
                    {
                        successMessage && (
                        <Typography color="green" variant="body2" align="center">
                            {successMessage}
                        </Typography>
                    )}
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default ForgotPassword;
