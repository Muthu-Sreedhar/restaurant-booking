// src/layouts/MainLayout.tsx
import React from 'react';

import { Grid, Box } from '@mui/material';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    
    return (
        <>
            <Grid container direction="column" sx={{ }}>
                {/* Topbar */}
                <Grid item >
                    <Topbar />
                </Grid>

                {/* Content with Sidebar */}
                <Grid container item sx={{ flexGrow: 1 }}>
                    {/* Sidebar */}
                    <Grid item sx={{height: 'calc(100vh - 64px - 60px)' }}> {/* Adjust height calculation based on Topbar and Footer height */}
                        <Sidebar />
                    </Grid>

                    {/* Main Content */}
                    <Grid item sx={{ flexGrow: 1, p: 2 }}>
                        <Box >{children}</Box>
                    </Grid>
                </Grid>

                {/* Footer */}
                <Grid item >
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
};

export default MainLayout;
