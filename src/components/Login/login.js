import { useState } from 'react';
import { Input, Checkbox, Button, Typography, FormControlLabel, Box, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Corrected import statement
import { MailOutline, Visibility, VisibilityOff } from '@mui/icons-material';
import SecureLS from 'secure-ls';
import { useNavigate } from 'react-router-dom';

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
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = 'effigo@global.com';
    const enteredPassword = '222';

    if (email === username && password === enteredPassword) {
      ls.set('authenticated', true);
      alert("success")
      Navigate("/")
      window.location.reload();
    } else {
      alert('Invalid credentials');

    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
           sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(64.3deg, #001225 6.75%, rgba(0, 13, 27, 0.95) 20.87%, rgba(1, 13, 27, 0.9) 36.96%, rgba(4, 19, 35, 0.83) 52.99%, rgba(0, 0, 0, 0) 91.8%)',
            },
          }}
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/567f/649b/b308c233645385a9c299e4c895c08787?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro6l2~X7NDl0ApHJLT9j3vXtGuaEpTRTQ9y3NpfJQbDbP~HXSH0V85IXCoZRm2TK5Jeohdv50U4QVAFPEennh0k1tC9gL~TUjMIcXyE-84cLqUNlrQCQFkYzC3XkAcevNs4OIPs6uYgtUCEONVtX8WIn~GBAFUQQocesCVHzeSEawdy1vO3lyEhFR09V0LWShjShlAo6ZlzomqHi1PaKyh4WGItO2i5fgto4BTUVjuJSLMrCG5XvvdCuweC0Z27UuOi2sQ3MrixIt~IjOclacuq3AYAiVegHNcuRLBQZs78DFN36QiMihhRvCPM3VTHw0V-4i68vA06kxn0H7AUuFQ__"
          alt="Background"
          style={{ position: 'absolute', width: 'calc(100% - 30%)', minHeight: '100%', objectFit: 'cover', mixBlendMode: 'overlay'}}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '30%', 
            transform: 'translate(-50%, -50%)',
            textAlign: 'left',
            width: '50%',
            color: '#fff',
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9455/b753/959d2df4e7b3b977e33f6e5111a76887?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDwYXsMhEdr2RUzi62naXC1TKJ9sf1jPLLu4oWNT5p-gObhfvc84XqGxCQOC46vDaHtJ5mRnRRWJk2AypJ0Q~mAmeuimp4xL78LRvAjREQPRfNZMELxnD5kr3uKktdF3jj8Cn3-wveacEIA2BNG6jRtlq8Nxppk5rg6xbRuFlhQgOgk5HnESZWk5ci0RwV3sezOHJO4FRXEGBxa1by9BmQNmkF6ap6LR1ZrRK93Y95ciRsITBrn-7doRziKG7Muygb7OT86boKoIDaVdsaLgiMityaqPaTgNSCUZTFWVhz205Cc7m1DbpYhSbXLvmZ~yBBScozrvKuirUbBJRFAomQ__"
            alt="EffiGO Logo"
            style={{ width: 100, height: 'auto', marginBottom: theme.spacing(10) }} 
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontSize: 35,
              fontWeight: 700,
              lineHeight: '40px',
              textAlign: 'left',
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
              fontSize: 28,
              fontWeight: 500,
              lineHeight: '40px',
              textAlign: 'left',
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
              fontSize: 24,
              fontWeight: 400,
              lineHeight: '36px',
              textAlign: 'left',
              width: '100%',
              opacity: 1,
            }}
          >
            Automate. Transform. Evolve procurement to bring business progress with transparency, savings, and overall efficiency. Let's realize this with our end-to-end technology solution and in-depth functional expertise in today's procurement process
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              width: '100%',
              padding: theme.spacing(4),
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              boxShadow: theme.shadows[3],
              right: 0,
            }}
          >
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Typography variant="h6" sx={{  mb: 10, mt:10,
fontSize: "26px",
fontWeight: "600",
lineHeight: "42px",
textAlign: "center",
  }}>Supply chain collaboration<br></br> Log in</Typography>
              <OutlinedInput
                id="email"
                placeholder="Email address"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                }
                sx={{ mb: 2, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#D9DBE9' } }}
                InputLabelProps={{
                  style: {
                    color: '#D9DBE9',
                    fontSize: '14px',
                    fontWeight: 500,
                  },
                }}
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
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ mb: 2, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#D9DBE9' } }}
                InputLabelProps={{
                  style: {
                    color: '#D9DBE9',
                    fontSize: '14px',
                    fontWeight: 500,
                  },
                }}
              />
                <FormControlLabel
                  control={<Checkbox id="remember-me" color="primary" />}
                  label="Remember me"
                />
                {/* <Typography variant="body2" sx={{ textDecoration: 'underline' }}>Generate Password</Typography> */}
              
              <Button type="submit" variant="contained" style={{background: "#012954"}} fullWidth>
                Log In
              </Button>
              
            </form>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;


