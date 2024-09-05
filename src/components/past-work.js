import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DevelopCard from './past-work-cards/develop-card';
import YoseCard from './past-work-cards/yose-card';
import Snri from './past-work-cards/snri';
import Paleo from './past-work-cards/paleoecology';
import Biogeo from './past-work-cards/biogeo';
import Tnc from './past-work-cards/tnc';
import SarTutorial from './past-work-cards/sarTutorial';


function Pastwork() {
    return (
      <div className="main-background"> 
        <Typography variant="h3" className="white-background-text padded-text">
            Project Archive
        </Typography> 
        <br /><br /><br />
        <Grid container spacing={3} className = 'padding-2'>
            <Grid item xs={12} sm ={6} md ={4}>
                <DevelopCard/>
            </Grid>
            <Grid item xs={12} sm ={6} md ={4}>
                <Typography variant="h3" className="white-background-text">
                    <Biogeo />
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md ={4}>
                <Typography variant="h3" className="white-background-text">
                    <Paleo />
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md ={4}>
                <Typography variant="h3" className="white-background-text">
                    <SarTutorial />
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md ={4}>
                <Typography variant="h3" className="white-background-text">
                    <YoseCard />
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md ={4}>
                <Typography variant="h3" className="white-background-text">
                    <Tnc />
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md ={4}>
                <Typography variant="h3" className="white-background-text">
                    <Snri />
                </Typography>
            </Grid>
        </Grid>
        <div className = 'padded-text'></div>
      </div>
    );
  }
  
  export default Pastwork;