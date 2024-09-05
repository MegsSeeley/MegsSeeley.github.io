import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAfrica, faGlobeAmericas, faSatellite } from '@fortawesome/free-solid-svg-icons'
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx';



const useStyles = makeStyles(theme => ({
  card: {
    mimWidth: 280,
    Width: "100%",
    minHeight:284,
  },
  head: {
    textAlign:"center",
    backgroundColor:"#9ccc65",
    height:100,
  },
  media: {
    height:5,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    height:"100%",
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


export default function Asu() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }


  return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardHeader 
        className={classes.head}
        title="Geography PhD Student"
        />
        <CardContent>
          <Typography variant="body2" color="primary" component="p" className = "center-text">
          <FontAwesomeIcon icon={faGlobeAfrica} />
            <FontAwesomeIcon icon={faSatellite} />
            <FontAwesomeIcon icon={faGlobeAmericas} />
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
                My disseration addresses the resilience of socio-environmental systems to drought.
          </Typography>
          
        </CardContent>
        <br /> <br />
        <center>
        <Typography variant="body2" color="primary" component="p" className = "center-text">
          Lab Pages
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Typography>
        </center>
        </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="primary" component="p" className = "small-text">
        <center>
        <a href="http://asnerlab.org/" target = "blank">
          <b>Asner Lab</b>
        </a>
        <br />
        <FontAwesomeIcon icon={faSatellite} /> <FontAwesomeIcon icon={faSatellite} /> <FontAwesomeIcon icon={faSatellite} />
        <br />
        <a href = "https://sites.google.com/a/asu.edu/turner/doctoral-advisees" target = "blank">
        <b>Turner Lab</b>
        </a>
        </center>
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}