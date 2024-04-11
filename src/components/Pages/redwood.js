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

    //   const handleLogout = () => {
    //     ls.remove('authenticated');
    //     Navigate('/login');
    //     window.location.reload();
    //   };

    //   const handleHelloMonday = () => {
    //     Navigate('/hellomonday');
    //   };

    //   const handlePrometheus = () => {
    //     Navigate('/prometheus');
    //   };

    //   const handleRedwood = () => {
    //     Navigate('/redwood');
    //   };

    //   const handleHome = () => {
    //     Navigate('/');
    //   };

    const getClickHandler = (item) => {
        switch (item) {
            case 'Hello Monday':
                return () => Navigate('/hellomonday');
            case 'Prometheus Fuels':
                return () => Navigate('/prometheus');
            case 'Redwood Empire':
                return () => Navigate('/redwood');
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

    const handleForceRerender = () => {
        // Increment the video key to force a re-render
        setVideoKey(prevKey => prevKey + 1);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(https://s3-alpha-sig.figma.com/img/567f/649b/b308c233645385a9c299e4c895c08787?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro6l2~X7NDl0ApHJLT9j3vXtGuaEpTRTQ9y3NpfJQbDbP~HXSH0V85IXCoZRm2TK5Jeohdv50U4QVAFPEennh0k1tC9gL~TUjMIcXyE-84cLqUNlrQCQFkYzC3XkAcevNs4OIPs6uYgtUCEONVtX8WIn~GBAFUQQocesCVHzeSEawdy1vO3lyEhFR09V0LWShjShlAo6ZlzomqHi1PaKyh4WGItO2i5fgto4BTUVjuJSLMrCG5XvvdCuweC0Z27UuOi2sQ3MrixIt~IjOclacuq3AYAiVegHNcuRLBQZs78DFN36QiMihhRvCPM3VTHw0V-4i68vA06kxn0H7AUuFQ__)', height: "100%" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: "150px", marginBottom: "50px" }}>
            <img
            onClick={() => navigate('/')}
                src="https://s3-alpha-sig.figma.com/img/9455/b753/959d2df4e7b3b977e33f6e5111a76887?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDwYXsMhEdr2RUzi62naXC1TKJ9sf1jPLLu4oWNT5p-gObhfvc84XqGxCQOC46vDaHtJ5mRnRRWJk2AypJ0Q~mAmeuimp4xL78LRvAjREQPRfNZMELxnD5kr3uKktdF3jj8Cn3-wveacEIA2BNG6jRtlq8Nxppk5rg6xbRuFlhQgOgk5HnESZWk5ci0RwV3sezOHJO4FRXEGBxa1by9BmQNmkF6ap6LR1ZrRK93Y95ciRsITBrn-7doRziKG7Muygb7OT86boKoIDaVdsaLgiMityaqPaTgNSCUZTFWVhz205Cc7m1DbpYhSbXLvmZ~yBBScozrvKuirUbBJRFAomQ__"
                alt="EffiGO Logo"
                style={{ width: 100, height: 'auto', cursor: 'pointer' }}
            />
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
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(https://s3-alpha-sig.figma.com/img/567f/649b/b308c233645385a9c299e4c895c08787?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro6l2~X7NDl0ApHJLT9j3vXtGuaEpTRTQ9y3NpfJQbDbP~HXSH0V85IXCoZRm2TK5Jeohdv50U4QVAFPEennh0k1tC9gL~TUjMIcXyE-84cLqUNlrQCQFkYzC3XkAcevNs4OIPs6uYgtUCEONVtX8WIn~GBAFUQQocesCVHzeSEawdy1vO3lyEhFR09V0LWShjShlAo6ZlzomqHi1PaKyh4WGItO2i5fgto4BTUVjuJSLMrCG5XvvdCuweC0Z27UuOi2sQ3MrixIt~IjOclacuq3AYAiVegHNcuRLBQZs78DFN36QiMihhRvCPM3VTHw0V-4i68vA06kxn0H7AUuFQ__)' }}>
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
                            <img
                            onClick={() => navigate('/')}
                                src="https://s3-alpha-sig.figma.com/img/9455/b753/959d2df4e7b3b977e33f6e5111a76887?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDwYXsMhEdr2RUzi62naXC1TKJ9sf1jPLLu4oWNT5p-gObhfvc84XqGxCQOC46vDaHtJ5mRnRRWJk2AypJ0Q~mAmeuimp4xL78LRvAjREQPRfNZMELxnD5kr3uKktdF3jj8Cn3-wveacEIA2BNG6jRtlq8Nxppk5rg6xbRuFlhQgOgk5HnESZWk5ci0RwV3sezOHJO4FRXEGBxa1by9BmQNmkF6ap6LR1ZrRK93Y95ciRsITBrn-7doRziKG7Muygb7OT86boKoIDaVdsaLgiMityaqPaTgNSCUZTFWVhz205Cc7m1DbpYhSbXLvmZ~yBBScozrvKuirUbBJRFAomQ__"
                                alt="EffiGO Logo"
                                style={{ width: 100, height: 'auto', cursor: 'pointer' }}
                            />
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
