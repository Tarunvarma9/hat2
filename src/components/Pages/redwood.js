import  React,{useState} from 'react';
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

const navItems = ['Hello Monday', 'Prometheus Fuels', 'Redwood Empire', 'Log Out'];
const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

 function Redwood() {
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

   

    const handleForceRerender = () => {
        // Increment the video key to force a re-render
        setVideoKey(prevKey => prevKey + 1);
    };




return (
    <>
        <Navbar/>
            <div style={{background:"#000"}}>
            <Button style={{color:"#fff", fontSize:"12px", border:"1px solid #ccc"}} onClick={handleForceRerender} >
                Force Re-render
            </Button>
            <ReactPlayer
                url="/assets/Redwood.mp4"
                key={videoKey}
                controls={true}
                playing={true}
                loop={true}
                width="100%"
                height="80vh"
                style={{marginTop:"3%"}}
            />
            </div>
        </>
    );
};

export default Redwood;
