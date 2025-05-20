// src/components/Topbar.tsx
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Stack, Grid, Avatar,
  Menu, MenuItem, IconButton, TextField, InputAdornment, Tooltip,
  Popover
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Commons } from '../utils/commons';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { format } from 'date-fns';

const commons: any = new Commons();

const Topbar: React.FC = () => {
  let userInfo = JSON.parse(commons?.getLocalValues("UserInfoData"));
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [anchorElNotification, setAnchorElNotification] = useState(null);
  const [anchorElDropdown, setAnchorElDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const generateDatePeriod = (startDate: any, days: any) => {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + days);
    return `from ${format(start, 'MM-dd-yyyy')} to ${format(end, 'MM-dd-yyyy')}`;
  };

  const mockData = [
    { name: 'Sreedhar', datePeriod: generateDatePeriod('2024-07-01', 5), amount: '$200' },
    { name: 'Sujith', datePeriod: generateDatePeriod('2024-07-10', 3), amount: '$150' },
    { name: 'Surya', datePeriod: generateDatePeriod('2024-07-15', 2), amount: '$100' },
    { name: 'Sathish', datePeriod: generateDatePeriod('2024-07-20', 7), amount: '$350' },
    { name: 'Muthu', datePeriod: generateDatePeriod('2024-08-01', 4), amount: '$180' },
  ];

  const filteredData = mockData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1',
    '#33FFF5', '#FF8C33', '#8CFF33', '#33FF8C', '#FF3333',
    '#FF33F3', '#33F3FF', '#F3FF33', '#33F3A1', '#A1FF33'
  ];
  const getColorForLetter = (letter: any) => {
    const index = letter.charCodeAt(0) % colors.length;
    return colors[index];
  };

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

    <Grid container spacing={0}>
        {/* Search */}
        <Grid item xs={12} sm={5.5} md={5.5} lg={5.5} xl={5.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end" }}>
          <TextField
            placeholder="Search room name, other facilities"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            size='small'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiInputBase-input': { padding: '8px 12px' },
              '& .MuiOutlinedInput-root': { borderRadius: 1 },
            }}
          />
        </Grid>

        {/* Notification */}
        <Grid item sm={0.75} md={0.75} lg={0.75} xl={0.75} sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
          <Tooltip title="Notifications">
            <IconButton onClick={handleNotificationClick} sx={{ position: 'relative', '&:hover': { color: 'blue' } }}>
              <NotificationsOutlinedIcon />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'red'
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElNotification}
            open={Boolean(anchorElNotification)}
            onClose={handleCloseNotification}
            PaperProps={{ sx: { width: 380 } }}
          >
            {filteredData.map((member, index) => (
              <MenuItem key={index} sx={{ display: 'flex', flexDirection: 'column', padding: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ marginRight: 2, bgcolor: getColorForLetter(member.name.charAt(0)) }}>
                    {member.name.charAt(0)}
                  </Avatar>
                  <Stack direction={'column'}>
                    <Typography fontWeight="bold">{member.name}</Typography>
                    <Typography>Stay: {member.datePeriod}</Typography>
                    <Typography>Amount: {member.amount}</Typography>
                  </Stack>
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Grid>

        {/* Clock */}
        <Grid item sm={0.75} md={0.75} lg={0.75} xl={0.75} sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
          <Tooltip title="Clock">
            <IconButton sx={{ position: 'relative', '&:hover': { color: 'blue' } }}>
              <AccessTimeIcon />
              <Box
                sx={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'blue',
                }}
              />
            </IconButton>
          </Tooltip>
        </Grid>

        {/* Avatar and Dropdown */}
        {/* <Grid item xs={12} sm={5} md={5} lg={5} xl={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Stack direction={"row"} alignItems={"center"}>
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
              onClick={handleDropdownClick}
            >
              {userInfo?.Username?.charAt(0)?.toUpperCase()}
            </Avatar>
            <Typography variant='h6' color='#979FB4' onClick={handleDropdownClick} sx={{ cursor: "pointer" }}>
              Hi, {userInfo?.Username} {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Typography>
          </Stack>
          <Menu
            anchorEl={anchorElDropdown}
            open={isDropdownOpen}
            onClose={handleDropdownClose}
            PaperProps={{ sx: { width: 300 } }}
          >
            <MenuItem>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='h6'>User Profile</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Avatar sx={{ bgcolor: 'blue' }}>
                    {userInfo?.Username?.charAt(0)?.toUpperCase()}
                  </Avatar>
                </Grid>
                <Grid item xs={9}>
                  <Typography fontWeight="bold">{userInfo?.Username}</Typography>
                  <Typography variant="body2">Role: {userInfo?.Role || "User"}</Typography>
                </Grid>
              </Grid>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Grid> */}
          <Grid item xs={12} sm={5} md={5} lg={5} xl={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Stack direction={"row"} alignItems={"center"}>
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
          onClick={handleDropdownClick}
        >
          {userInfo?.Username?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography variant='h6' color='#979FB4' onClick={handleDropdownClick} sx={{ cursor: 'pointer' }}>
          Hi, {userInfo?.Username} {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Typography>
      </Stack>
      
      <Popover
        open={isDropdownOpen}
        anchorEl={anchorElDropdown}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            width: 300,
            padding: 2.5,
            borderRadius: 2,
            boxShadow: 3,
            mt: 1.3
          },
        }}
      >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">User Profile</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        {userInfo?.Username?.charAt(0)?.toUpperCase()}
                    </Avatar>
                    <Stack direction="column">
                        <Typography fontWeight="bold">{userInfo?.Username}</Typography>
                        <Typography variant="body2">Role: {userInfo?.Role || "User"}</Typography>
                    </Stack>
                    </Stack>
                </Grid>
            </Grid>


          {/* Logout Button */}
          <Button sx={{ mt: 2 }} variant="contained" fullWidth onClick={handleLogout}>Logout</Button>
      </Popover>
    </Grid>
    </Grid>

  );
};

export default Topbar;
