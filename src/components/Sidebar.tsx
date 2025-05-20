import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Grid } from "@mui/material"
import { Avatar, Box, useMediaQuery, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PieChartIcon from "@mui/icons-material/PieChart";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Menu as MenuIcon, Close as CloseIcon} from "@mui/icons-material";


const SideBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const iconSize = isSmallScreen ? "small" : "medium";
  const iconData = [
    { icon: <PieChartIcon fontSize={iconSize} />, link: "main", text: "Home" },
    { icon: <GroupOutlinedIcon fontSize={iconSize} />, link: "team", text: "Team" },
    { icon: <CalendarMonthOutlinedIcon fontSize={iconSize} />, link: "calender", text: "Calender" },
    { icon: <AccessTimeIcon fontSize={iconSize} />, link: "clock", text: "Clock" },
    { icon: <HotelOutlinedIcon fontSize={iconSize} />, link: "hotel", text: "Hotel" },
    { icon: <ArticleOutlinedIcon fontSize={iconSize} />, link: "notes", text: "Notes" },
    { icon: <SettingsOutlinedIcon fontSize={iconSize} />, link: "settings", text: "Settings" },
  ];
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      {/* Mobile Menu Icon */}
      <IconButton
        onClick={toggleDrawer}
        sx={{ position: "left", top: 16, right: 16, zIndex: 1300, color: "#000",
          display: { sm: "none", lg: "none", xl: "none" }
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Sidebar */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Grid container alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1 }}>
          <Grid item>
            <Avatar
              sx={{
                bgcolor: "#07075e",
                width: { xs: 40, sm: 40, md: 50 },
                height: { xs: 40, sm: 40, md: 50 },
                fontSize: { xs: 12, sm: 14, md: 16 },
              }}
            >
              CHM
            </Avatar>
          </Grid>
          <Grid item>
            <IconButton onClick={toggleDrawer} sx={{ color: "#000" }}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <List sx={{ width: 250 }}>
          {iconData.map(({ icon, link, text }) => (
            <ListItemButton key={text} onClick={() => {}}>
              <ListItemIcon> {icon} </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Desktop Sidebar */}
      <List
        sx={{
          position: "fixed", top: 0, left: 0, height: "100vh", 
          width: { sm: 80, md: 90 }, padding: 0, margin: 0,
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#fff",
          borderRight: "1px solid #e0e0e0",
          boxShadow: 2,
          zIndex: 1100,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#07075e",
            width: { xs: 30, sm: 40, md: 50 },
            height: { xs: 30, sm: 40, md: 50 },
            fontSize: { xs: 12, sm: 14, md: 16 },
            mt: 2, // margin top for spacing
            mb: 2,
          }}
        >
          CHM
        </Avatar>
        {iconData.map(({ icon, link, text }, index) => (
          <IconButton
            title={text}
            key={index}
            sx={{
              color: "#00172d",
              "&:hover": { transform: "scale(1.1)" },
              transition: "transform 0.3s",
              cursor: "pointer",
              mb: 1,
            }}
          >
            {icon}
          </IconButton>
        ))}
      </List>

    </>
  );
};

export default SideBar;
