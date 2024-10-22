// src/components/Topbar.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack, Grid, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Commons } from '../utils/commons';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const commons: any = new Commons()
const Topbar: React.FC = () => {

    let userInfo = JSON.parse(commons?.getLocalValues("UserInfoData"))
    console.log('userInfo', userInfo?.Username);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call logout from AuthContext
        navigate('/login'); // Redirect to login page
    };


    function generateRandomColor(user: any) {
        const letterColorMap: any = {
            'A': '#B22222', 'B': '#8B4513', 'C': '#556B2F', 'D': '#00FF00',
            'E': '#008080', 'F': '#191970', 'G': '#4B0082', 'H': '#00FF8B',
            'I': '#FF00FF', 'J': '#FF8C00', 'K': '#00B6FF', 'L': '#FFD700',
            'M': '#B8860B', 'N': '#3CB371', 'O': '#87CEFA', 'P': '#1E90FF',
            'Q': '#F0E68C', 'R': '#8B008B', 'S': '#FF1493', 'T': '#D2691E',
            'U': '#708090', 'V': '#F08080', 'W': '#808000', 'X': '#2F4F4F',
            'Y': '#5F9EA0', 'Z': '#6495ED'
        };

        return letterColorMap[user];
    }
    const [anchorElNotification, setAnchorElNotification] = useState(null);
    const [anchorElDropdown, setAnchorElDropdown] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleNotificationClick = (event: any) => {
        setAnchorElNotification(event.currentTarget);
    };

    const handleDropdownClick = (event: any) => {
        setAnchorElDropdown(event.currentTarget);
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCloseNotification = () => {
        setAnchorElNotification(null);
    };

    const handleDropdownClose = () => {
        setAnchorElDropdown(null);
        setIsDropdownOpen(false);
    };

    return (

        // <>
        //     <Box sx={{ bgcolor: "#FAFBFB", color: "#000", p: 2 }}>

        //         <Grid container spacing={0}>
        //             <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>

        //                 <>
        //                     <Avatar
        //                         alt={userInfo?.Username}
        //                         sx={{
        //                             backgroundColor:'blue',
        //                             width: 30,
        //                             height: 30,
        //                             fontSize: '17px',
        //                             marginRight: '8px', // space between avatar and text
        //                         }}
        //                     >
        //                         {userInfo?.Username?.charAt(0)?.toUpperCase()}
        //                     </Avatar>
        //                 </>
        //                 <Typography variant='h6' color='#979FB4' >
        //                     {`Hi, ${userInfo?.Username}`}
        //                 </Typography>
        //             </Grid>
        //         </Grid>

        //         {/* <Button color="inherit" onClick={handleLogout}>
        //                 Logout
        //             </Button> */}
        //     </Box>
        // </>
        <>
            <Box sx={{ bgcolor: "#FAFBFB", color: "#000", p: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Stack direction={"row"} display={"flex"} alignItems={"center"}>
                            <Avatar
                                alt={userInfo?.Username}
                                sx={{
                                    bgcolor: 'blue',
                                    marginRight: 2,
                                    '&:hover': {
                                        animation: 'pulse 1.5s infinite',
                                        cursor: 'pointer',
                                    },
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:active': {
                                        transform: 'scale(0.95)',
                                    },
                                }}

                            >
                                {userInfo?.Username?.charAt(0)?.toUpperCase()}
                            </Avatar>
                            <Typography variant='h6' color='#979FB4' onClick={handleDropdownClick} sx={{ cursor: "pointer" }}>
                                {`Hi, ${userInfo?.Username}`}
                            </Typography>
                        </Stack>
                        {/* <Stack direction={'column'} spacing={0.5} alignItems="center"
                            sx={{
                                marginLeft: 3,
                                marginRight: 3
                            }}
                        >
                            <Typography fontWeight="bold" fontSize={"14px"} justifyContent={'left'}> John Doe </Typography>
                            <Typography fontSize={"14px"}> Role: Manager </Typography>
                        </Stack>
                        <IconButton onClick={handleDropdownClick}>
                            {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton> */}
                        <Menu
                            anchorEl={anchorElDropdown}
                            open={isDropdownOpen}
                            onClose={handleDropdownClose}
                            PaperProps={{
                                sx: { width: 350 },
                            }}
                        >
                            <MenuItem>
                                <Grid container spacing={2} m={0.5} p={0.5}>
                                    <Grid item xs={12}>
                                        <Typography variant='h6'>User Profile </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Avatar
                                            alt={userInfo?.Username}
                                            sx={{
                                                bgcolor: 'blue',
                                                '&:hover': {
                                                    animation: 'pulse 1.5s infinite',
                                                    cursor: 'pointer',
                                                },
                                                transition: 'transform 0.3s ease-in-out',
                                                '&:active': {
                                                    transform: 'scale(0.95)',
                                                },
                                            }}

                                        >
                                            {userInfo?.Username?.charAt(0)?.toUpperCase()}
                                        </Avatar>

                                    </Grid>
                                    <Grid item xs={5}>
                                        <Stack direction={'column'} display={"flex"} alignItems={"flex-start"} >
                                            <Typography fontSize={"18px"}> {userInfo?.Username} </Typography>
                                            <span style={{ display: "flex", alignItems: "center" }}>
                                                <EmailOutlinedIcon sx={{ fontSize: "18px", color: '#C0C0C0' }} />
                                                &nbsp;
                                                <Typography fontSize={"14px"} color='#C0C0C0'> {userInfo?.Email} </Typography>
                                            </span>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button sx={{ color: "white", bgcolor: "blue",width:"100%" }} onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </Grid>
                                </Grid>
                            </MenuItem>
                        </Menu>
                        {/* <Avatar
                            alt={userInfo?.Username}
                            sx={{
                                bgcolor: '#07075e',
                                marginRight: 1,
                                '&:hover': {
                                    animation: 'pulse 1.5s infinite',
                                    cursor: 'pointer',
                                },
                                transition: 'transform 0.3s ease-in-out',
                                '&:active': {
                                    transform: 'scale(0.95)',
                                },
                            }}
                            onClick={handleDropdownClick}
                        >
                            {userInfo?.Username?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        <Menu
                            anchorEl={anchorElDropdown}
                            open={isDropdownOpen}
                            onClose={handleDropdownClose}
                            PaperProps={{
                                sx: { width: 250 },
                            }}
                        >
                            <MenuItem>
                                <Avatar sx={{ marginRight: 2, bgcolor: '#07075e' }}>JD</Avatar>
                                <Stack direction={'column'}  >
                                    <Typography fontWeight="bold" justifyContent={'left'}> John Doe </Typography>
                                    <Typography> Role: Manager </Typography>
                                </Stack>
                            </MenuItem>
                        </Menu> */}
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};

export default Topbar;
