import React,{useState} from 'react';
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
import { useParams } from 'react-router-dom';

// Video data
const videoList = [
    { id: 1, url: '/assets/sunflower.mp4', title: 'Video 1' },
    { id: 2, url: '/assets/eternal.mp4', title: 'Video 2' },
    { id: 3, url: '/assets/h.mp4', title: 'Video 3' },
    { id: 4, url: '/assets/shelter.mp4', title: 'Video 4' },
    { id: 5, url: '/assets/Time.mp4', title: 'Video 5' },
    { id: 6, url: '/assets/success.mp4', title: 'Video 6' },
    { id: 7, url: '/assets/Challa Gaali Thakuthunna Full Video Song _ Yevade Subramanyam _ Nani, Malvika, Vijay Devara.mp4', title: 'Video 7' },
    { id: 8, url: '/assets/Idhera Full Video Song _ Yevade Subramanyam _ Nani, Malvika, Vijay Devara Konda.mp4', title: 'Video 8' },
];

const VideoPlayerPage = () => {
    const navigate=  useNavigate();
    const { id } = useParams();
    const [videoKey, setVideoKey] = useState(0);
    const video = videoList.find(v => v.id === parseInt(id));

    if (!video) {
        return <Typography variant="h6" color="error">Video not found!</Typography>;
    }

    const handleForceRerender = () => {
        // Increment the video key to force a re-render
        setVideoKey(prevKey => prevKey + 1);
    };


    return (
        <>
            <Navbar />
            <div style={{background:"#000"}}>
            <Button style={{color:"#fff", fontSize:"12px", border:"1px solid #ccc"}} onClick={handleForceRerender} >
                Force Re-render
            </Button>
            &nbsp;
            <Button style={{color:"#fff", fontSize:"12px", border:"1px solid #ccc"}} onClick={()=>{
                navigate(-1)
            }} >
                Back
            </Button>
            <ReactPlayer
                url={video.url}
                key={videoKey}
                controls={true}
                playing={true}
                loop={true}
                width="100%"
                height="80vh"
                style={{marginTop:"3%"}}
            />
               </div >
        </>
    );
};

export default VideoPlayerPage;
