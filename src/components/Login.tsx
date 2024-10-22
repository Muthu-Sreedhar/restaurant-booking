// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Snackbar, IconButton, Grid, Box, Link } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Commons } from '../utils/commons';
import LoginImage from "../../src/assets/images/Login.jpg"
const commons = new Commons()
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [storeData, setStoreData] = useState(null)
    const navigate = useNavigate();
    const { login } = useAuth();
    // const [userData, setUserData] = useState<any>(null);
    // const [messageActive, setMessageActive] = useState(false)
    const [message, setMessage] = useState<any>('');
    const [errorMessage, setErrorMessage] = useState<any>('')
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleCheckEmail = async () => {
        const CheckEmailrequest = {
            Email: email
            // Password: password,
        };

        await axios.post('http://localhost:6002/users/checkappuser', CheckEmailrequest)
            ?.then((checkEmailResponse: any) => {
                if (checkEmailResponse?.status === 200) {
                    setStoreData(checkEmailResponse?.data?.outputResponse)
                }
            })
            .catch((error: any) => {
                if (error.response?.status === 404) {
                    setSnackbarOpen(true);
                    setErrorMessage('InCorrect Email ID')
                } else {
                    setErrorMessage('An error occurred. Please try again.');
                }
            });




    };

    const handleCheckPassword = async () => {
        const checkPassword = {
            Email: email,
            Password: password,
        };

        await axios.post('http://localhost:6002/users/checkpassword', checkPassword)
            .then((checkPasswordResponse: any) => {
                if (checkPasswordResponse?.status === 200) {
                    console.log("222");
                    setMessage("Login Successfully");
                    setSnackbarOpen(true);
                    commons?.setLocalValues("UserInfoData", JSON.stringify(storeData));

                    setTimeout(() => {
                        login();
                        navigate('/');
                        setMessage('');
                        setSnackbarOpen(false);
                    }, 3000);
                }
            })
            .catch((error: any) => {
                if (error.response?.status === 404) {
                    setSnackbarOpen(true);
                    setErrorMessage('Incorrect Password');
                } else {
                    setErrorMessage('An error occurred. Please try again.');
                }
            });
    };




    const handleClose = (
        event: any,
        reason?: any,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <>

            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={false} sm={4} md={7}
                    sx={{
                        backgroundImage: `url(${LoginImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Box} display="flex" flexDirection="column" justifyContent="center" p={5}>
                    {/* <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom> Logo Here </Typography> */}
                    <Typography variant="h5" gutterBottom> Welcome back !!</Typography>
                    <Typography variant="h3" fontWeight="bold" gutterBottom> Log In </Typography>


                    <TextField variant="outlined" margin="normal" required fullWidth label="Email" type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {storeData !== null &&
                        <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    }
                    {storeData !== null &&
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Link href="#" underline="hover" variant="body2">
                                Forgot Password?
                            </Link>
                        </Box>
                    }
                    {storeData !== null ?
                        <Button fullWidth variant="contained" color="primary" onClick={() => { handleCheckPassword() }}
                            sx={{ mt: 2, mb: 2, py: 1.5 }}
                        >
                            LOGIN IN
                        </Button>
                        :
                        <>
                            <Button fullWidth variant="contained" color="primary" onClick={() => { handleCheckEmail() }}
                                sx={{ mt: 2, mb: 2, py: 1.5 }}
                            >
                                continue
                            </Button>
                        </>
                    }
                    {/* <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography>or continue with</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
                        <Button startIcon={<GoogleIcon />} sx={{ mx: 1 }}> Google </Button>
                        <Button startIcon={<FacebookIcon />} sx={{ mx: 1 }}>Facebook </Button>
                    </Box>

                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="body2">
                            Don't have an account yet?{' '}
                            <Link href="#" underline="hover" onClick={handleSignUp}>
                                Sign up here
                            </Link>
                        </Typography>
                    </Box> */}
                </Grid>


            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message={message || errorMessage}
                ContentProps={{
                    sx: { backgroundColor: message ? 'green' : '#CC0000' },
                }}
                action={action}
            />
        </>
    );
};

export default Login;
