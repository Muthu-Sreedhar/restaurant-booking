// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
export default function Home() {
    const [message, setMessage] = useState("");
    const [userData, setUserData] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:6002/');
                setMessage(response.data.msg);  // Should display "Hello Student"
            } catch (error) {
                console.error('Error fetching data from backend:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const request = {
                    Email: "sreedhar@gmail.com",
                    Password: "sree@02",
                };

                const response = await axios.post('http://localhost:6002/users/readuser', request);
                if (response.status === 200) {
                    setUserData(response.data.outputResponse); 
                } else {
                    setError(response.data.serviceResponse.message); 
                }
            } catch (err) {
                console.error('Error fetching user:', err);
                setError('Failed to fetch user.');
            }
        };

        fetchUser();
    }, []);


    return (
        <div>
            <h1>Message from Backend: {message}</h1>
            <h1>User Data</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : userData ? (
                <div>
                    <p>Email: {userData.Email}</p>
                    <p>Name: {userData.Name}</p>
                    {/* Render other user details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}
