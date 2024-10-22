// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ bgcolor:"#F6F6F6", color: "#000",py:1}}>
            <Typography variant="body1" display={"flex"} justifyContent={"center"} alignContent={"center"}>© 2024 My React App</Typography>
        </Box>
    );
};

export default Footer;
