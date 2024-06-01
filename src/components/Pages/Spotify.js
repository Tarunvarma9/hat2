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
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
function Spotify() {

    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const Navigate = useNavigate();
    const [videoKey, setVideoKey] = useState(0);
    const email = ls.get('email');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleButtonClick = () => {
        toast.success('Try username/password === "hat2"', {
            position: 'top-center'
        });
    };

    const handleSpotifyButton1Click = () => {
        window.location.href = 'https://ts4h.vercel.app/';
      };

      const handleSpotifyButton2Click = () => {
        window.location.href = 'https://newts4h.vercel.app/';
      };  


    return (
        <>
            <Navbar />
            {email === 'hat2' ? (<>
                <div style={{ height: "90vh", width:'100%', display:'flex', alignItems:"center", justifyContent:'center', gap:'1rem' }}>
                <Button
                    onClick={handleSpotifyButton1Click}
                    variant="contained"
                    sx={{ backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/Bg.png)', height: "25px" }}
                >
                     Spotify App V1
                </Button>
            
                
                <Button
                    onClick={handleSpotifyButton2Click}
                    variant="contained"
                    sx={{ backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/Bg.png)', height: "25px" }}
                >
                   Spotify App V2
                </Button>
                    {/* <iframe src='https://tspotify4hat.vercel.app/' width={'100%'} height={'100%'} /> */}
                </div>
            </>) : (<>
                {/* <Button
                    onClick={handleButtonClick}
                    variant="contained"
                    sx={{ backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/Bg.png)', height: "25px" }}
                >
                    Try
                </Button> */}

            </>)}
            <ToastContainer position="top-center" autoClose={5000} />
        </>
    );
};

export default Spotify