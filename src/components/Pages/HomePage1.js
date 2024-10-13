import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Box, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Favorite } from '@mui/icons-material'; // Using Material UI heart icon
import { useEffect } from 'react';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

function HomePage() {
    const navigate = useNavigate();
    const email = ls.get('email');

    useEffect(() => {
        const isAuthenticated = ls.get('authenticated');
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate]);

    // List of videos
    const videoList = [
        { id: 1, title: 'Video 1', thumbnail: 'assets/thumbnails/sunflower-postmalone.jpg' },
        { id: 2, title: 'Video 2', thumbnail: 'assets/thumbnails/eternal-sunshine-couple.avif' },
        { id: 3, title: 'Video 3', thumbnail: 'assets/thumbnails/download.jfif' },
        { id: 4, title: 'Video 4', thumbnail: 'assets/thumbnails/hq720.jpg' },
        { id: 5, title: 'Video 5', thumbnail: 'assets/thumbnails/hqdefault.jpg' },
        { id: 6, title: 'Video 6', thumbnail: 'assets/thumbnails/yevade_subramanyam.jpg' },
        { id: 7, title: 'Video 7', thumbnail: 'assets/thumbnails/yevade_subramanyam.jpg' },
        { id: 8, title: 'Video 8', thumbnail: 'assets/thumbnails/yevade_subramanyam.jpg' }
    ];

    const handleCardClick = (id) => {
        navigate(`/video/${id}`); // Navigate to video player page
    };

    return (
        <>
            <Navbar />
            <Box sx={{ position: 'relative', p: 2, backgroundColor: '#d1c6ee', minHeight: '100vh', overflow: 'hidden' }}>
                {/* Text in the background */}
                {/* Grid of Video Cards */}
                <Grid container spacing={3} justifyContent="center">
                    {videoList.map((video) => (
                        <Grid item xs={12} sm={4} md={3} key={video.id}>
                            <Card
                                onClick={() => handleCardClick(video.id)}
                                sx={{
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={video.thumbnail}
                                    alt={video.title}
                                />
                                {/* <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6">
                                        {video.title}
                                    </Typography>
                                    <Favorite sx={{ color: 'red' }} />
                                </CardContent> */}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Typography
                    variant="h1"
                    sx={{
                        opacity: 0.1,
                        fontSize: {
                            xs: '2rem', // small screen
                            sm: '3rem', // medium screen
                            md: '4rem', // large screen
                            lg: '5rem', // extra-large screen
                        },
                        color: '#cbb2ff',
                        fontFamily: 'cursive',
                        zIndex: 1000,
                        fontWeight:800,
                        textAlign: 'center',
                        transition: 'color 0.3s', // Add smooth transition for hover effect
                        '&:hover': {
                            color: '#ff009e', // Color change on hover for whole text
                        },
                        '& span': {
                            color: '#cbb2ff', // Initial color for the highlighted text
                            fontWeight: 'bold',
                            textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
                            transition: 'color 0.3s, transform 0.3s', // Smooth transition for hover effects
                        },
                        '& span:hover': {
                            color: '#ff009e', // Hover color change for span
                            transform: 'scale(1.1)', // Slight zoom-in effect on hover
                        },
                    }}
                >
                    HARSHITHA, Watashi wa anata o eien ni aishiteimasu
                </Typography>


            </Box>
        </>
    );
}

export default HomePage;
