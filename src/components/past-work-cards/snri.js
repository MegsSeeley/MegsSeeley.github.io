import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
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


export default function Snri() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardHeader
        className={classes.head}
        title="Sierra Nevada Research Institute"
      />
        <CardContent>
        <br />
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faSeedling} />
            <FontAwesomeIcon icon={faSeedling} />
            <FontAwesomeIcon icon={faSeedling} />
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Research Experience for Undergraduates
          </Typography>
          <center>
          <Typography variant="body2" color="secondary" component="p" className = "center-text">
            Short and long-term responses of nitrogen-fixing microbial organisms to fire
           </Typography>
            </center>
            <br /><br /><br />
        </CardContent>
        </CardActionArea>
    </Card>
  );
}