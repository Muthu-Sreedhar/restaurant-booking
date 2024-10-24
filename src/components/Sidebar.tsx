import React, { useState } from 'react';
import { Box, Drawer, Grid2, List, ListItemButton, ListItemText, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

const Sidebar: React.FC = () => {
    const [reduceSideBar, setReduceSideBar] = useState<any>(false);
    const [selectedIndex, setSelectedIndex] = useState<any>(null);

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    const listItemStyles = (index: number) => ({
        // backgroundColor: selectedIndex === index ? '#1976d2' : 'transparent',
        color: selectedIndex === index ? 'blue' : '#757575',
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            // transform: "scale(1.2)",
            color: "blue",
        }
    });

    return (
        <Grid2 sx={{ width: !reduceSideBar ? "70px" : "180px", overflowY: "auto", height: 'calc(100vh - 64px - 28px)', position: "relative" }}>
            <Box sx={{ pl: !reduceSideBar ? 0 : 4 }}>
                {!reduceSideBar ? <img src="/logo.png" alt="React Logo" width={"70px"} height={"90px"} /> : <img src="/logo.png" alt="React Logo" width={"100px"} height={"100px"} />}
            </Box>
            <List>
                <Stack spacing={!reduceSideBar ? 1 : 0} color={"#757575"}>
                    <ListItemButton
                        component={Link}
                        to="/home"
                        onClick={() => handleListItemClick(0)}
                        sx={listItemStyles(0)}
                    >
                        {!reduceSideBar ? (
                            <span className="material-symbols-outlined">home</span>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">home</span>
                                &nbsp;<ListItemText primary="Home" />
                            </>
                        )}
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        to="/about"
                        onClick={() => handleListItemClick(1)}
                        sx={listItemStyles(1)}
                    >
                        {!reduceSideBar ? (
                            <span className="material-symbols-outlined">dns</span>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">dns</span>
                                &nbsp;<ListItemText primary="About" />
                            </>
                        )}
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        to="/contact"
                        onClick={() => handleListItemClick(2)}
                        sx={listItemStyles(2)}
                    >
                        {!reduceSideBar ? (
                            <span className="material-symbols-outlined">person</span>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">person</span>
                                &nbsp;<ListItemText primary="User" />
                            </>
                        )}
                    </ListItemButton>
                </Stack>
            </List>
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    py: 1,
                }}
            >
                {reduceSideBar ? (
                    <KeyboardArrowLeftOutlinedIcon onClick={() => { setReduceSideBar(false); }} />
                ) : (
                    <ChevronRightOutlinedIcon onClick={() => { setReduceSideBar(true); }} />
                )}
            </Box>
        </Grid2>
    );
};

export default Sidebar;
