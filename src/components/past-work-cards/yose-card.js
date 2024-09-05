import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faWater } from '@fortawesome/free-solid-svg-icons'
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


export default function YoseCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardHeader
        className={classes.head}
        title="Yosemite National Park Service"
        />
        <CardContent>
        <br />
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faWind} />   <FontAwesomeIcon icon={faWater} /> 
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Physical Science Technician
          </Typography>
          <center>
              <a href = "https://www.nps.gov/yose/learn/nature/aqmonitoring.htm" target = "blank">
                <Button size="small" color="secondary">
                    Yosemite Air Quality Website
                </Button>
                </a>
            </center>
            <br /><br /><br /><br /><br />
        </CardContent>
        </CardActionArea>
    </Card>
  );
}