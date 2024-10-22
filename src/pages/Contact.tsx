// src/pages/Contact.tsx
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { contactsData } from '..//../src/mock/contact';
const Contact: React.FC = () => {

    const navgivate = useNavigate()
    const nagivateToDetails = (contact: any) => {
        navgivate?.(`/contact/details/${contact.id}`)
    }
    return (
        <TableContainer sx={{ maxHeight: '620px', overflowY: 'auto' }}>
            <Table stickyHeader >
                <TableHead >
                    <TableRow  >
                        <TableCell align='left' sx={{ bgcolor: "#F6F6F6", padding: '10px 40px' }} >ID</TableCell>
                        <TableCell align='left' sx={{ bgcolor: "#F6F6F6", padding: '10px 40px' }} >Name</TableCell>
                        <TableCell align='left' sx={{ bgcolor: "#F6F6F6", padding: '10px 40px' }}>Email</TableCell>
                        <TableCell align='left' sx={{ bgcolor: "#F6F6F6", padding: '10px 40px' }}>Phone</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    {contactsData.map(contact => (
                        <TableRow key={contact.id} hover onClick={() => { nagivateToDetails(contact) }} sx={{ cursor: "pointer" }}>
                            <TableCell align='left' sx={{ padding: '10px 40px' }}>
                                {/* <Link to={`/contact/details/${contact.id}`}>{contact.id}</Link> */}
                                <Typography>{contact.id}</Typography>
                            </TableCell>
                            <TableCell align='left' sx={{ padding: '10px 40px' }}>
                                <Typography>{contact.name}</Typography>
                            </TableCell>
                            <TableCell align='left' sx={{ padding: '10px 40px' }}>
                                <Typography>{contact.email}</Typography>
                            </TableCell>
                            <TableCell align='left' sx={{ padding: '10px 40px' }}>
                                <Typography>{contact.phone}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Contact;
