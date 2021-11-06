import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Grid from '@mui/material/Grid';
import { Container, TextField, Button } from '@mui/material';
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';


const Login = () => {
     

    const [loginData,setLoginData]  = useState({})
    const handleOnChange = e => {

       const field = e.target.name
       const value = e.target.value
       const newLoginData = {...loginData}

       newLoginData[field] = value
        setLoginData(newLoginData)

       console.log(field,value) 
    }

    const handleLoginSubmit = e => {
       alert('Z')
        e.preventDefault()
    }
    return (

      <>
      <Navigation></Navigation>

        <Container>

            <Grid container spacing={2}>

            
            <Grid item xs={12} md={6} sx={{mt:8}}  >
            <Typography variant="body1" gutterBottom>Login</Typography>
                <form  onSubmit={handleLoginSubmit} >

                <TextField 
                sx={{width:'75%',m:1}}
                id="standard-basic" 
                label="Your Email" 
                name='email'
                onChange={handleOnChange}
                variant="standard" />  

                <TextField 
                sx={{width:'75%',m:1}}
                label="Your Password" 
                id="standard-basic" 
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard" /> 

                <Button sx={{width:'75%',mt:2}} variant='contained' type='submit' > Login </Button>     

                <NavLink
                style={{textDecoration:'none'}}
                 to='/register' >
                <Button sx={{width:'75%',mt:3}} variant='text' type='submit' > New User? Please Register  </Button>      
                </NavLink>
                </form>
            </Grid>

            <Grid item xs={6} md={5} >
              <img style={{width:'100%'}} src={login} alt="" />
            </Grid>

            </Grid> 
        </Container>

        </>
    );
};

export default Login;