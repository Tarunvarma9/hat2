import React, { useState } from "react";
import SecureLS from 'secure-ls';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
const HelloMonday = () => {
    const Navigate = useNavigate();

  const handleLogout = () => {
    ls.remove('authenticated');
    Navigate('/login');
    window.location.reload();
  };
  
  const handleHelloMonday = ()=>{
    Navigate('/hellomonday')
  }

  return (
    <div>
           <AppBar position="static" sx={{ background: "#012954" }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, }}>
      <img
            src="https://s3-alpha-sig.figma.com/img/9455/b753/959d2df4e7b3b977e33f6e5111a76887?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDwYXsMhEdr2RUzi62naXC1TKJ9sf1jPLLu4oWNT5p-gObhfvc84XqGxCQOC46vDaHtJ5mRnRRWJk2AypJ0Q~mAmeuimp4xL78LRvAjREQPRfNZMELxnD5kr3uKktdF3jj8Cn3-wveacEIA2BNG6jRtlq8Nxppk5rg6xbRuFlhQgOgk5HnESZWk5ci0RwV3sezOHJO4FRXEGBxa1by9BmQNmkF6ap6LR1ZrRK93Y95ciRsITBrn-7doRziKG7Muygb7OT86boKoIDaVdsaLgiMityaqPaTgNSCUZTFWVhz205Cc7m1DbpYhSbXLvmZ~yBBScozrvKuirUbBJRFAomQ__"
            alt="EffiGO Logo"
            style={{ width: 100, height: 'auto' }} 
          />
      </Typography>
      <Button color='inherit' onClick={handleHelloMonday}>Hello Monday</Button>
      <Button color="inherit" onClick={handleLogout}>Logout</Button>
    </Toolbar>
  </AppBar>
     {/* <iframe width="1400" height="720"  src="https://go.screenpal.com/player/cZfjIJVsOdA?title=0&controls=1&share=1&download=1&embed=1&cl=1&width=1400&height=720&overlays=1&ff=1" allowfullscreen="true" autopla></iframe> */}
     {/* <iframe width="1400" height="720"  src="https://go.screenpal.com/watch/cZfjIJVsOdA?sec=0" allowfullscreen="true"></iframe> */}

     <iframe src="https://player.vimeo.com/video/932085700?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute",top:0,left:0,width:"100%",height:"80%",marginTop:"10%"}} title="hm-hero-desktop"></iframe>
     {/* <canvas width="983" height="878" style={{background: "black", width: "787px", height: "703px", pointerEvents:"none"}}></canvas> */}
    </div>
  );
};

export default HelloMonday;
