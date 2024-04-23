import { useEffect, useState } from 'react';
import { Input, Checkbox, Button, Typography, FormControlLabel, Box, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MailOutline, Visibility, VisibilityOff } from '@mui/icons-material';
import SecureLS from 'secure-ls';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, addLogin } from '../Pages/store';
import HomePage from '../Pages/HomePage';
import'./login.css'


const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D9DBE9',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4E5DF5',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4E5DF5',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#4E5DF5',
          },
        },
      },
    },
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username1 = 'supplier_chain';
    const username2 = 'hat2';
    const enteredPassword1 = '222';
    const enteredPassword2 = 'hat2';
    const isValidCredentials =
      (email.toLocaleLowerCase() === username1 || email.toLocaleLowerCase() === username2) &&
      (password === enteredPassword1 || password === enteredPassword2);
    if (isValidCredentials) {
      dispatch(loginUser());
      dispatch(addLogin(email.toLocaleLowerCase()));
      ls.set('authenticated', true);
      ls.set("email", email.toLocaleLowerCase());
      window.location.reload();
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    const isAuthenticated = ls.get('authenticated');
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  return (
   
      <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          position: 'relative', 
          backgroundImage: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%), url(/assets/bg.png)',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {/* <Typography variant="h4" gutterBottom>
          Drive your Procurement from Process to Progress
        </Typography>
        <Typography variant="body1" gutterBottom>
          With Technology & Domain Proficiency As Your Throttle
        </Typography>
        <Typography variant="body1" gutterBottom>
          Automate. Transform. Evolve procurement to bring business progress with transparency, savings, and overall efficiency. Let's realize this with our end-to-end technology solution and in-depth functional expertise in today's procurement process
        </Typography> */}
        <img
            src="/assets/logo.png"
            alt="EffiGO Logo"
            style={{ width: 100, height: 'auto', marginBottom: theme.spacing(10) }} 
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontSize: 28,
              fontWeight: 700,
              lineHeight: '40px',
              textAlign: 'center',
              width: '100%',
              opacity: 1,
              wordBreak:"break-word"

            }}
          >
            Drive your Procurement from Process to Progress 
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins',
              fontSize: 24,
              fontWeight: 500,
              lineHeight: '40px',
              textAlign: 'center',
              width: '100%',
              opacity: 1,
              wordBreak:"break-word",
              marginBottom: theme.spacing(5)
            }}
          >
             With Technology & Domain Proficiency As Your Throttle
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins',
              fontSize: 20,
              fontWeight: 400,
              lineHeight: '36px',
              textAlign: 'center',
              width: '100%',
              opacity: 1,
              wordBreak:"break-word"
            }}
          >
            Automate. Transform. Evolve procurement to bring business progress with transparency, savings, and overall efficiency. Let's realize this with our end-to-end technology solution and in-depth functional expertise in today's procurement process
          </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px', zIndex: 1 }}> {/* Added zIndex for form overlay */}
          <OutlinedInput
            id="email"
            placeholder="Email address"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <MailOutline sx={{ color: '#fff' }} /> 
              </InputAdornment>
            }
            sx={{ marginBottom: '10px',color:"#fff", paddingLeft:"10px"}} 
          />
          <OutlinedInput
            id="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="start">
                  {showPassword ? <Visibility sx={{ color: '#fff' }} /> : <VisibilityOff sx={{ color: '#fff' }} />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ marginBottom: '10px', color:"#fff", paddingLeft:"10px"}} 
          />
          <FormControlLabel
            control={<Checkbox id="remember-me" style={{color:"#fff"}} />}
            label="Remember me"
            sx={{ marginBottom: '10px',color:"#fff" }}
          />
          <Button type="submit" variant="contained" style={{ background: "#012954" }} fullWidth>
            Log In
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
