import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Grid from '@mui/material/Grid';
import { Container, TextField, Button } from '@mui/material';
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Register = () => {
    
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

        if(loginData.password !== loginData.password2){
            alert(' Password Did not match ')
            return;
        }

       alert('Z')
        e.preventDefault()
    }


    return (
        <>
            <Navigation></Navigation>

            <Container>

<Grid container spacing={2}>


<Grid item xs={12} md={6} sx={{mt:8}}  >
<Typography variant="body1" gutterBottom>Register</Typography>
    <form  onSubmit={handleLoginSubmit} >

    <TextField 
    sx={{width:'75%',m:1}}
    id="standard-basic" 
    label="Your Email" 
    autoComplete = 'off'
    name='email'
    type="email"
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
    
    <TextField 
    sx={{width:'75%',m:1}}
    label="Confirm Password" 
    id="standard-basic" 
    type="password"
    name="password2"
    onChange={handleOnChange}
    variant="standard" /> 

    <Button sx={{width:'75%',mt:3}} variant='contained' type='submit' > Login </Button>      
    <NavLink
    style={{textDecoration:'none'}}
     to='/login' >
    <Button sx={{width:'75%',mt:4}} variant='text' type='submit' >Already Registered? Please Login  </Button>      
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

export default Register;