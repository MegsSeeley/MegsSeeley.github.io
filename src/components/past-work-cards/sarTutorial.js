import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSatellite } from '@fortawesome/free-solid-svg-icons'
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
  card: {
    minWidth: 280,
    height:284,
  },
  head: {
    height:100,
    textAlign:"center",
    backgroundColor:"#9ccc65",
  }
});


export default function SarTutorial() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardHeader
        className={classes.head}
        title="Synthetic Aperature Radar Tutorial"
      />
        <CardContent>
        <br />
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faSatellite} />
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Sentinel-1 Web Tutorial
          </Typography>
          <center>
              <br />
          <Typography variant="body2" color="secondary" component="p" className = "center-text">
            <a href = "https://megsseeley.github.io/tutorials/sarTutorial.html" target = 'blank'>
            VIEW TUTORIAL 
            </a>
           </Typography>
            </center>
            <br /><br /><br />
        </CardContent>
        </CardActionArea>
    </Card>
  );
}