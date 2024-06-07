import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import SecureLS from 'secure-ls';
import ReactPlayer from 'react-player';
import { TextField } from '@mui/material';

const navItems = ['Message', 'Hello Monday', 'Prometheus Fuels', 'Redwood Empire', 'Spotify', 'Log Out'];
const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

function Navbar() {
    const navigate = useNavigate()
    const email = ls.get('email');
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [videoKey, setVideoKey] = useState(0);
    const Navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const getClickHandler = (item) => {
        switch (item) {
            case 'Message':
                return () => Navigate('/Message');
            case 'Hello Monday':
                return () => Navigate('/hellomonday');
            case 'Prometheus Fuels':
                return () => Navigate('/prometheus');
            case 'Redwood Empire':
                return () => Navigate('/redwood');
            case 'Spotify':
                return () => Navigate('/spotify');
            case 'Log Out':
                return () => {
                    ls.remove('authenticated');
                    Navigate('/login');
                    window.location.reload();
                };
            default:
                return () => Navigate('/');
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/Bg.png)', height: "100% !important" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: "150px", marginBottom: "50px" }}>
                {email === 'hat2' ? (
                    <img
                        onClick={() => navigate('/')}
                        src="/assets/Image.jpg"
                        alt="my Logo"
                        style={{ width: 100, height: 'auto', cursor: 'pointer', borderRadius:'50%' }}
                    />
                ) : (<img
                    onClick={() => navigate('/')}
                    src="/assets/logo.png"
                    alt="EffiGO Logo"
                    style={{ width: 100, height: 'auto', cursor: 'pointer' }}
                />)}
            </Typography>
            {navItems.map((item) => (
                <Button key={item} sx={{ width: '100%', color: "#ccc" }} onClick={getClickHandler(item)}>
                    {item}
                </Button>
            ))}
        </Box>
    );



    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="static" sx={{backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/Bg.png)' }}>
                    <Toolbar>
                        {isSmallScreen && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {email === 'hat2' ? (
                                <img
                                    onClick={() => navigate('/')}
                                    src="/assets/Image.jpg"
                                    alt="my Logo"
                                    style={{ width: '45px', height: '45px', cursor: 'pointer',borderRadius:'50%' }}
                                />
                            ) : (<img
                                onClick={() => navigate('/')}
                                src="/assets/logo.png"
                                alt="EffiGO Logo"
                                style={{ width: 100, height: '25px', cursor: 'pointer' }}
                            />)}
                        </Typography>
                        {!isSmallScreen && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {navItems.map((item) => (
                                    <Button key={item} style={{ color: "#fff" }} onClick={getClickHandler(item)}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    {drawer}
                </Drawer>

            </Box>
        </>
    );
};

export default Navbar;
