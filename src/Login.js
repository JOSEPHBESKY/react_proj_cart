import React, {useContext, useState} from "react";
import username from './username.json' 
import { useNavigate } from "react-router-dom";
import { stateContext } from "./Context";
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

 function Login() {
  const navigate = useNavigate()
  const [name,setname] = useState("")
  const [pass,setpass] = useState("")
  const [err,seterr] = useState("")
  const [password,setPassword] = useState("password")
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const theme = createTheme();

   const {dispatch} = useContext(stateContext)
    function handlename(event){
        
        setname(event.target.value)
    }

    function handlepassword(event){
      setpass(event.target.value)
    }

    function togglePass(){
        if(password === "password"){
          setPassword("text")
        }
        else{
          setPassword("password")
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        username.forEach(e=>{
          if (e.name === name && e.password === pass){
              
              localStorage.setItem("isLoggedIn",true)
              navigate("Home/")
              dispatch({
                type: "login",
                payLoad : {isAuthenticated : true}
              })
          } else{
            if(pass === ""){
              seterr("")
            }
            else{
              seterr("invalid username or password")
            }
          }
        })
    }

  return (
    <div >
    
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={handlename}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handlepassword}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <span onClick={togglePass} className="showPass"></span>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          > <p>{err}</p>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  </div>
);
}
export default Login;