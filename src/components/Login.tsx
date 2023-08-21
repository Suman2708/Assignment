// import React from 'react'
import { Avatar, Grid, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import '../index.css';
import './Login.css';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Link from '@mui/material';
const Login = () => {


    const handlestyle={padding:20,height:'60vh',width:280, margin:'120px auto'};
    const AvatarStyle={backgroundColor:'#1c1d73'}
   
  return (
    <div>
        <Grid>
            <Paper elevation={10} style={handlestyle}>
                <Grid className='center'>
                <Avatar   className='lock_center'  style={AvatarStyle}>
                    <LockIcon />
                </Avatar>
                 <h3>Sign In</h3>
                 </Grid>
                 <div className='form' >
                    <form>
                    <TextField id="standard-basic1" label="name"  placeholder='enter your name' variant="standard" fullWidth required />
                    <TextField id="standard-basic2" label="mobile no"   placeholder='enter your mobile number' variant="standard" type='number' fullWidth  required/>
                    <TextField id="standard-basic3" label="email" placeholder='enter your email' variant="standard" fullWidth   required />
                     <div className='btn'>
                     <Button type='submit' variant='contained' fullWidth >submit</Button>
                     </div>
                   
                    </form>
                 </div>
            </Paper>
        </Grid>
    </div>
  )
}

export default Login