import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Asu from './current-work-cards/asu';
import ConsIS from './current-work-cards/cons-is'
import HiGeneticWater from './current-work-cards/hiGeneticWater';
import RidgeToReef from './current-work-cards/ridge-to-reef';



function Currentwork() {
    return (
        <div className="main-background"> 
          <Typography variant="h3" className="white-background-text padded-text">
              Current Projects
          </Typography> 
          <br /><br /><br />
          <Grid container spacing={3} className = 'padding-2'>
              <Grid item xs={12} sm ={6} md ={4}>
                  <Asu/>
              </Grid>
              <Grid item xs={12} sm ={6} md ={4}>
                  <ConsIS/>
              </Grid>
              <Grid item xs={12} sm ={6} md ={4}>
                  <HiGeneticWater />
              </Grid>
              <Grid item xs={12} sm ={6} md ={4}>
                  <RidgeToReef />
              </Grid>

        </Grid>
        <div className = 'padded-text' />
      </div>

   );
}
  
export default Currentwork;