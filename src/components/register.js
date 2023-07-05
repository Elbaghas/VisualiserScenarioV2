import React, { useState } from 'react';
import axiosInstance from '../axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './register.css'
// import { makeStyles } from '@mui/styles';



export default function SignUp() {


    const defaultTheme = createTheme();
    // const useStyles = makeStyles({
    //     root: {
    //         backgroundColor: 'red'
    //     },
    // });
    // const classes = useStyles();

    const initialFormData = Object.freeze({
        email: '',
        name: '',
        password: '',
        subject: '',
        start_date: '',
        username: ''
    });

    const navigate = useNavigate();


    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`teachers/register/`, {
                email: formData.email,
                name: formData.username,
                username: formData.username,
                password: formData.password,
                subject: formData.subject,
                start_date: formData.start_date,
            })
            .then((res) => {
                navigate('/login');
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <>
            {/* <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="start_date">Start Date:</label>
                    <input type="text" id="start_date" name="start_date" onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form> */}

            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* /* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {/* <LockOutlinedIcon /> */
                        /* </Avatar> */}
                        {/* <Typography component="h1" variant="h5">
                            S'inscrire
                        </Typography> */}
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoFocus
                                name="email"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                label="username"
                                type="text"
                                id="username"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="subject"
                                label="subject"
                                type="text"
                                id="subject"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="start_date"
                                label="start_date"
                                type="date"
                                id="start-date"
                                onChange={handleChange}
                            />
                            <Button

                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>

        </>
    );
}