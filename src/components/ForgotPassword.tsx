import axios from 'axios';
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ForgotPass from "../../src/assets/images/FP-1.jpg";
import { useLocation } from 'react-router-dom';
const ForgotPassword: React.FC = () => {
    const location = useLocation();
    const email = location.state?.Data;

    const [password, setPassword] = useState<any>({
        "newPassword": "",
        "confirmPassword": ""
    })
    console.log('password', password);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;
    const handleSubmit = async () => {
        let request = {
            "Username": email?.Username,
            "Email": email?.Email,
            "NewPassword": password?.newPassword,
            "ConfirmPassword": password?.confirmPassword
        }
        if (password?.newPassword === password?.confirmPassword) {
            await axios.patch(`${API_URL}/appuser/updatepassword`, request)?.then((response: any) => {
                if (response?.status === 200) {
                    setSuccessMessage('Password Changed Successfully');
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
            })?.catch((error: any) => {
                // if (error?.response?.status ===) {
                setSuccessMessage('Passwords do not match');
                // }
            })

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
                        value={password?.newPassword}
                        name='newPassword'
                        onChange={(newvalue: any) => {
                            setPassword((prev: any) => ({ ...prev, "newPassword": newvalue?.target?.value }))
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        value={password?.confirmPassword}
                        name='confirmPassword'
                        onChange={(newvalue: any) => {
                            setPassword((prev: any) => ({ ...prev, "confirmPassword": newvalue?.target?.value }))
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!password}
                        onClick={handleSubmit}
                        sx={{ mt: 2, mb: 2, py: 1.5 }}
                    >
                        Submit
                    </Button>
                    {
                        successMessage && (
                            <Typography color={successMessage ? "green" : "red"} variant="body2" align="center">
                                {successMessage}
                            </Typography>
                        )}
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default ForgotPassword;
