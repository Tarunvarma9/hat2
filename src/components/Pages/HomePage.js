import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import SecureLS from 'secure-ls';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
const HomePage = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
    ls.remove('authenticated');
    Navigate('/login');
    window.location.reload();
  };
  
  const handleHelloMonday = ()=>{
    Navigate('/hellomonday')
  }
  const handleprome =()=>{
    Navigate('/prometheus')
}
const handleredwood = ()=>{
    Navigate('/redwood')
}

  const handleHome = ()=>{
    Navigate('/')
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
            onClick={handleHome}
          />
      </Typography>
      <Button color='inherit' onClick={handleHelloMonday}>Hello Monday</Button>
      <Button color='inherit' onClick={handleprome}>Prometheus Fuels</Button>
      <Button color='inherit' onClick={handleredwood}>Redwood Empire</Button>
      <Button color="inherit" onClick={handleLogout}>Logout</Button>
    </Toolbar>
  </AppBar>
  <div sx={{ padding: '20px' }}>
    <Typography variant="h4" gutterBottom>HomePage: In Progress</Typography>
    <Typography variant="body1" paragraph>
     
    </Typography>
    <Typography variant="body1" paragraph>
    </Typography>

    {/* <iframe src="https://hellomonday.com/assets/video/animations/hm-hero-desktop.mp4" title="Hello Monday Website"></iframe> */}
    
  </div>
</div>
  );
}

export default HomePage;
