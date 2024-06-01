import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Navigate, useNavigate } from 'react-router-dom';
import SecureLS from 'secure-ls';
import ReactPlayer from 'react-player';
import { TextField } from '@mui/material';
import { connect } from 'react-redux';
import { Home, Password } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { addLogin } from './store';
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const navItems = ['Hello Monday', 'Prometheus Fuels', 'Redwood Empire', 'Log Out'];
const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
function HomePage() {
    const navigate = useNavigate();
    const email = ls.get('email');
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const rememberMe = useSelector((state) => state.auth.rememberMe);
    const loginCount = useSelector((state) => state.auth.loginCount);
    const logins = useSelector((state) => state.auth.logins);
    const rememberCount = useSelector((state) => state.auth.rememberCount);
    console.log(email);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [login, setLogin] = React.useState(false)
    const [videoKey, setVideoKey] = useState(0);

    useEffect(() => {
        const isAuthenticated = ls.get('authenticated');
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate]);
    const handleForceRerender = () => {
        setVideoKey(prevKey => prevKey + 1);
    };

    const handleButtonClick = () => {
        toast.success('Try username/password === "hat2"', {
            position: 'top-center'
        });
    };


    return (
        <>
            <Navbar />
            {email === "hat2" ? (<>

                <div style={{ background: "#000" }}>
                    <Button style={{ color: "#fff", fontSize: "12px", border: "1px solid #ccc" }} onClick={handleForceRerender} >
                        Force Re-render
                    </Button>
                    <ReactPlayer
                        url="/assets/sunflower.mp4"
                        key={videoKey}
                        controls={true}
                        playing={true}
                        loop={true}
                        width="100%"
                        height="80vh"
                        style={{ marginTop: "3%" }}
                    /></div>
            </>) : (
                <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100%", border: "10px solid blue" }}>
                    <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
                        * Home Page * :<br />
                        User- <b style={{ marginTop: "20px", fontFamily: "Poppins", color: "royalblue" }}>{`"${email}"`}</b>
                        <br />
                        <br />
                        {/* <Button
                            onClick={handleButtonClick}
                            variant="contained"
                            sx={{ backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/Bg.png)', height: "25px" }}
                        >
                            Try
                        </Button> */}
                    </Typography>
                </div>
            )}
            <ToastContainer position="top-center" autoClose={5000} />
        </>
    );
}
export default HomePage;