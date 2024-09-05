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
import Slider from '../slider/slider';



const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 280,
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


export default function DevelopCard() {
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
        title="NASA DEVELOP"
        />
        <CardContent className = 'padding-bottom'>
        <br />
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faGlobeAfrica} />
            <FontAwesomeIcon icon={faSatellite} />
            <FontAwesomeIcon icon={faGlobeAmericas} />
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Geoinformatics Fellow and
            <br />
            Assistant Center Lead
          </Typography>
        
        </CardContent>
        <center>
        <Typography variant="body2" color="primary" component="p" className = "center-text">
          View Projects
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
          <Slider />
        </CardContent>
      </Collapse>
    </Card>
  );
}