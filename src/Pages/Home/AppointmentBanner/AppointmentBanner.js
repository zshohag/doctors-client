import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';


const appointmentBanner = {
    background:  `url(${bg})`,
    backgroundColor:' rgba(45 , 58, 74, 0.9)',
    backgroundBlendMode : 'darken, luminosity ',
    marginTop: 150
}
 
const AppointmentBanner = () => {
    return (
      <Container>
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>     
           <img style={{width:400,marginTop:'-120px'}} src={doctor} alt="" />
          </Grid>

          <Grid item xs={12} md={6} sx={{
              display:'flex',
              justifyContent:'flex-start',
              alignItems:'center',
              textAlign:'left'
                }} >
              <Box>
            <Typography sx={{mb:5}} variant='h6' style={{color:'#5CE7ED'}}  >
                 Appointment
            </Typography>
            <Typography variant='h4' style={{color:'white'}} >
                 Make an Appointment Today
            </Typography>
            <Typography variant='h6' sx={{my:5}} style={{color:'white',fontSize:14,fontWeight:300}} >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque maiores quam dolor tempore eaque non, quia culpa. Ea, quibusdam? Consectetur adipisci provident placeat! Veniam.
            </Typography>
            <Button variant="contained" style={{backgroundColor:'#5CE7ED'}} >Learn More </Button>
          </Box>
          </Grid>
        </Grid>
      </Box>         
      </Container>
    );
};

export default AppointmentBanner;