import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faPlane } from '@fortawesome/free-solid-svg-icons'
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
  card: {
    minWidth: 280,
    minHeight:284,
  },
  head: {
    height:100,
    textAlign:"center",
    backgroundColor:"#9ccc65",
  }
});


export default function ConsISCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardHeader
        className={classes.head}
        title="Imaging Spectroscopy in Conservation Decision-Making"
        />
        <CardContent>
        <br />
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faPlane} />   <FontAwesomeIcon icon={faTree} /> 
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Details Pending
          </Typography>
          
        </CardContent>
        </CardActionArea>
    </Card>
  );
}