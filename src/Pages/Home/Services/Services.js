import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whiteing from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';



const services = [
  
      {
        name: "Fluoride Treatment ",
        image: fluoride,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veniam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veniam?"
      },
      {
        name: "Teeth Whitening",
        image: whiteing,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veniam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veniam?"
      },
      {
        name: "Cavity Filling ",
        image: cavity,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veniam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veniam?"
      }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>

        <Typography sx={{fontWeight:500, m:3, color:'success.main'}} variant="h5" component="div">
           OUR SERVICES
          </Typography>
        <Typography sx={{fontWeight:600,m:3}} variant="h4" component="div">
           Services We Provide 
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

     
               {
                 services.map(service=> <Service service={service} ></Service> )
               }
        
   
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;