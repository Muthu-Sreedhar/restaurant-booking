import React, { useState, useEffect } from 'react';
import {Card,CardContent, Typography, Divider, TextField, IconButton, Button, Grid, Box, MenuItem, Modal, Backdrop, Fade, Stack, Dialog, DialogTitle, DialogContent} from '@mui/material';
import { CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Add, Remove, Sort, BedroomParent, Bathtub, Shower } from '@mui/icons-material';
import Room1 from "../assets/images/room1.jpg"
import Room2 from "../assets/images/room2.jpg"
import Room3 from "../assets/images/room3.jpg"

import { LocalizationProvider, DesktopDatePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


function ContentDetail() {
  const currentDate = new Date();
  const [checkInDate, setCheckInDate] = useState(() => {
    const savedCheckInDate = localStorage.getItem('checkInDate');
    return savedCheckInDate ? new Date(savedCheckInDate) : new Date();
  });

  const [checkOutDate, setCheckOutDate] = useState(() => {
    const savedCheckOutDate = localStorage.getItem('checkOutDate');
    return savedCheckOutDate ? new Date(savedCheckOutDate) : new Date();
  });
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [roomType, setRoomType] = useState('Deluxe');
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', phone: '', family: '' });

  const handleAdultChange = (value: any) => setAdults((prev) => Math.max(1, prev + value));
  const handleChildrenChange = (value: any) => setChildren((prev) => Math.max(0, prev + value));
  const handleRoomsChange = (value: any) => setRooms((prev) => Math.max(1, prev + value));

  const handleReservationClick = (id: any) => setReservationModalOpen(true);
  const handleCloseModal = () => setReservationModalOpen(false);
  const handleFeedbackModal = () => setFeedbackModalOpen(true);
  const closeFeedbackModal = () => setFeedbackModalOpen(false);

  useEffect(() => {
    localStorage.setItem('checkInDate', checkInDate.toISOString());
  }, [checkInDate]);

  useEffect(() => {
    localStorage.setItem('checkOutDate', checkOutDate.toISOString());
  }, [checkOutDate]);


  const roomData = [
    {
      id: 1,
      image: Room1,
      type: 'Deluxe Room',
      rent: '$1000 / night',
      features: [
        { icon: <BedroomParent />, label: 'Double Bed' },
        { icon: <Bathtub />, label: 'Bathtub' },
        { icon: <Shower />, label: 'Shower' }
      ]
    },
    {
      id: 2,
      image: Room2,
      type: 'Standard Room',
      rent: '$350 / night',
      features: [
        { icon: <BedroomParent />, label: 'Single Bed' },
        { icon: <Bathtub />, label: 'Bathtub' }
      ]
    },
    {
      id: 3,
      image: Room3,
      type: 'Twin Room',
      rent: '$650 / night',
      features: [
        { icon: <BedroomParent />, label: 'Single Bed' },
        { icon: <Bathtub />, label: 'Bathtub' },
        { icon: <Shower />, label: 'Shower' }
      ]
    }
  ];


  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        handleCloseModal()
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2.5} sx={{justifyContent: "space-evenly"}}>
        <Grid item xs={10} sm={3.6} md={3.6} lg={3.6} xl={2}>
          <Card sx={{backgroundColor: "#f5f5f5"}}>
            <CardContent>
              <Typography variant="h5" fontWeight={'bold'}>Search Room</Typography>
              <Typography variant="subtitle1">Search available room for reservation</Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2}>
                {/* Check In Card */}
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Card sx={{ backgroundColor: '#f5f5f5', padding: 1 }}>
                    <Typography variant="body1" sx={{pb:1.5}}>Check In</Typography>
                    <DatePicker
                      label="Check-In Date"
                      format="MMMM d, yyyy"
                      value={checkInDate}
                      onChange={(date: any) => setCheckInDate(date)}
                      minDate={currentDate}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                        },
                      }}
                    />
                  </Card>
                </Grid>

                {/* Check Out Card */}
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Card sx={{ backgroundColor: '#f5f5f5', padding: 1 }}>
                    <Typography variant="body1" sx={{pb:1.5}}>Check Out</Typography>
                    {/* <Typography variant="body2"
                      sx={{pt:1, pb:1, display: "flex", alignItems: "center", justifyContent:"center"}}
                    >{checkOutDate.toDateString()}</Typography> */}
                    <DatePicker
                      label="Check-Out Date"
                      format="MMMM d, yyyy"
                      value={checkOutDate}
                      onChange={(date: any) => setCheckOutDate(date)}
                      minDate={currentDate}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                        },
                      }}
                    />
                  </Card>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Adults Section */}
              <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography>Adults</Typography>
                  <Typography variant="caption">Older than 12 years</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container justifyContent="flex-end" alignItems="center">
                  <IconButton onClick={() => handleAdultChange(-1)}><Remove /></IconButton>
                  <Typography>{adults}</Typography>
                  <IconButton onClick={() => handleAdultChange(1)}><Add /></IconButton>
                </Grid>
              </Grid>

              {/* Children Section */}
              <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography>Children</Typography>
                  <Typography variant="caption">0 - 12 years</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container justifyContent="flex-end" alignItems="center">
                  <IconButton onClick={() => handleChildrenChange(-1)}><Remove /></IconButton>
                  <Typography>{children}</Typography>
                  <IconButton onClick={() => handleChildrenChange(1)}><Add /></IconButton>
                </Grid>
              </Grid>

              {/* Rooms Section */}
              <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography>Rooms</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container justifyContent="flex-end" alignItems="center">
                  <IconButton onClick={() => handleRoomsChange(-1)}><Remove /></IconButton>
                  <Typography>{rooms}</Typography>
                  <IconButton onClick={() => handleRoomsChange(1)}><Add /></IconButton>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Room Type Selection */}
              <TextField
                fullWidth
                label="Room Type"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                select
                placeholder="Room Type"
              >
                <MenuItem value="Deluxe">Deluxe</MenuItem>
                <MenuItem value="Standard">Standard</MenuItem>
                <MenuItem value="Suite">Suite</MenuItem>
              </TextField>

              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: 'blue', color: 'white', mt: 2 }}
                //onClick={handleReservationClick}
              >
                Search
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Available Rooms Section */}
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <Card sx={{backgroundColor: "#f5f5f5"}}>
            <CardContent>
              <Grid container spacing={0} sx={{mb: 3}}>
                <Grid item xs={8} sm={6} md={8} lg={8} xl={9}>
                  <Stack direction={"column"} spacing={0.5}>
                    <Typography variant="h6" fontWeight={'bold'}>Available Rooms</Typography>
                    <Typography>120+ Rooms Available</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={4} xl={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                  <Stack direction={"row"} spacing={1.5}>
                    <Sort />
                    <Typography sx={{ color: 'blue' }}>Sort by: Relevance</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                  sx={{mt:3, display: 'flex', alignItems: 'left', justifyContent:"space-between"}}
                >
                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> All Rooms </Button>
                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> Deluxe</Button>
                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> Standart </Button>

                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> Presidential </Button>
                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> Suite </Button>
                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> Junior Suite </Button>
                  <Button variant="outlined" size='small' sx={{borderRadius: "7px", fontSize: "10px"}}> Twin Rooms </Button>
                </Grid>
              </Grid>

              {/* List Rooms */}
              <Grid container spacing={2}>
                {/* Room - 1 */}
                {
                  roomData.map((room) => (
                    <React.Fragment key={room.id}>
                      <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                        <img src={room.image} alt={room.type} key={room.id}
                          style={{ width: '100%', height: "auto", maxHeight: "100px" , objectFit: 'cover' }}
                        />
                      </Grid>
                      <Grid item xs={4.8} sm={4.8} md={4.8} lg={4.8} xl={4.8}>
                        <Stack direction={"column"} spacing={0.5}>
                          <Typography variant="body1">{room.type}</Typography>
                          <Typography variant="body2">{room.rent}</Typography>
                        </Stack>
                        {
                          room.features && room.features.length > 0 && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              {
                                room.features.map((feature, index) => (
                                  <Stack
                                    key={index}
                                    direction={"row"}
                                    spacing={0.5}
                                    sx={{ mt: 2 }}
                                  >
                                    {feature.icon}
                                    <Typography>{feature.label}</Typography>
                                  </Stack>
                                ))
                              }
                            </Box>
                          )
                        }
                      </Grid>
                      <Grid item xs={5.2} sm={5.2} md={5.2} lg={5.2} xl={5.2} 
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}
                      >
                        <Button variant="text" onClick={() => ""}
                          sx={{ borderRadius: "20px", fontSize: "11px" }}
                        >
                          Room Detail
                        </Button>
                        <Button variant="contained" onClick={() => handleReservationClick(room.id)}
                          sx={{ borderRadius: "20px", fontSize: "11px" }}
                        >
                          Make Reservation
                        </Button>
                      </Grid>
                    </React.Fragment>
                  ))
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Modal for Reservation */}
        <Dialog
          open={reservationModalOpen}
          onClose={handleCloseModal}
          fullWidth
          maxWidth="sm"
        >
          <Card
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              width: '100%',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            <CardContent>
              {/* Show success message if success is true */}
              {success ? (
                <Box sx={{ textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
                  <CheckCircleOutlineIcon color="success" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6">
                    I got your information, thanks for the reservation!
                  </Typography>
                  <span role="img" aria-label="emoji" style={{ fontSize: '2rem' }}>
                    🎉
                  </span>
                </Box>
              ) : (
                <>
                  <DialogTitle>Reservation Form</DialogTitle>
                  <DialogContent>
                    {/* Display form */}
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      sx={{ my: 1 }}
                    />
                    <TextField
                      fullWidth
                      label="Age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      sx={{ my: 1 }}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      sx={{ my: 1 }}
                    />
                    <TextField
                      fullWidth
                      label="Family Members"
                      name="family"
                      value={formData.family}
                      onChange={handleInputChange}
                      sx={{ my: 1 }}
                    />
                    {/* Loading spinner while submitting */}
                    {loading ? (
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                        <CircularProgress />
                      </Box>
                    ) : (
                      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
                        Submit
                      </Button>
                    )}
                  </DialogContent>
                </>
              )}
            </CardContent>
          </Card>
        </Dialog>

        {/* Modal for Feedback */}
        <Modal
          open={feedbackModalOpen}
          onClose={closeFeedbackModal}
          closeAfterTransition
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          // BackdropComponent={Backdrop}
          // BackdropProps={{ timeout: 500 }}
        >
          <Card 
            sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              width: { xs: '80%', sm: '50%', md: '35%', lg: '30%', xl: '20%' },
              mx: 'auto',
              my: 'auto'
            }}
          >
            <CardContent>
              <Typography variant="h6">Thank you for your reservation!</Typography>
              <Typography variant="body2">
                We hope you enjoy your stay. Please provide feedback after your visit.
              </Typography>
            </CardContent>
            <Button variant="contained" onClick={closeFeedbackModal} sx={{ mt: 1}}>Close</Button>
          </Card>
        </Modal>

      </Grid>
    </LocalizationProvider>
  );
}

export default ContentDetail;
