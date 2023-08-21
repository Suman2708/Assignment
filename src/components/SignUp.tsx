import React, { useRef, useEffect, useState } from 'react';
import { Avatar, Grid, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import '../index.css';
import './Login.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Homesection from './Homesection';

const Login: React.FC = () => {
  const handlestyle = { padding: 20, height: '60vh', width: 280, margin: '120px auto' };
  const AvatarStyle = { backgroundColor: '#1c1d73' };
  const name = useRef<HTMLInputElement>(null);
  const mobile = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const [showHomesection, setShowHomesection] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem('signUp');
  const localEmail = localStorage.getItem('email');
  const localMobile = localStorage.getItem('mobile');
  const localName = localStorage.getItem('name');

  useEffect(() => {
    if (localSignUp) {
      setShowHomesection(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);

  const handlesubmit = () => {
    if (name.current?.value && mobile.current?.value && email.current?.value) {
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('mobile', mobile.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('signUp', email.current.value);
      alert('Success');
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (email.current?.value === localEmail && mobile.current?.value === localMobile) {
      localStorage.setItem('signUp', email.current.value);
      window.location.reload();
    } else {
      alert('Please Enter valid Credentials');
    }
  };

  return (
    <div>
      {showHomesection ? (
        <Homesection />
      ) : show ? (
        <Grid>
          <Paper elevation={10} style={handlestyle}>
            <Grid className="center">
              <Avatar className="lock_center" style={AvatarStyle}>
                <LoginIcon />
              </Avatar>
              <h3> Hello {localName}</h3>
            </Grid>
            <div className="form">
              <form>
                <TextField
                  id="standard-basic3"
                  label="email"
                  placeholder="enter your email"
                  variant="standard"
                  fullWidth
                  required
                  inputRef={email}
                />
                <TextField
                  id="standard-basic2"
                  label="mobile no"
                  placeholder="enter your mobile number"
                  variant="standard"
                  type="number"
                  fullWidth
                  required
                  inputRef={mobile}
                />
                <div className="btn">
                  <Button type="submit" variant="contained" fullWidth onClick={handleSignIn}>
                    Sign In
                  </Button>
                </div>
              </form>
             <a href='/' >Forget email or phone? click on Delete</a> 
            </div>
          </Paper>
        </Grid>
      ) : (
        <Grid>
          <Paper elevation={10} style={handlestyle}>
            <Grid className="center">
              <Avatar className="lock_center" style={AvatarStyle}>
                <LockIcon />
              </Avatar>
              <h3>Sign Up</h3>
            </Grid>
            <div className="form">
              <form>
                <TextField
                  id="standard-basic1"
                  label="name"
                  placeholder="enter your name"
                  inputRef={name}
                  variant="standard"
                  fullWidth
                  required
                />
                <TextField
                  id="standard-basic2"
                  label="mobile no"
                  placeholder="enter your mobile number"
                  variant="standard"
                  type="number"
                  fullWidth
                  required
                  inputRef={mobile}
                />
                <TextField
                  id="standard-basic3"
                  label="email"
                  placeholder="enter your email"
                  variant="standard"
                  fullWidth
                  required
                  inputRef={email}
                />
                <div className="btn">
                  <Button type="submit" variant="contained" fullWidth onClick={handlesubmit}>
                    submit
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </Grid>
      )}
    </div>
  );
};

export default Login;
