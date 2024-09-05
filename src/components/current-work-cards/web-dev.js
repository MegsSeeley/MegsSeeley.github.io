import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faKeyboard} from '@fortawesome/free-solid-svg-icons'
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx';



const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 280,
    Width:'100%',
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


export default function Webdev() {
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
        title="Website Development"
        />
        <CardContent>
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faLaptopCode} /> <FontAwesomeIcon icon={faKeyboard} /> <FontAwesomeIcon icon={faLaptopCode} />
            </Typography>
            < br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Developer
          </Typography>
        </CardContent>
        <center>
        <Typography variant="body2" color="primary" component="p" className = "center-text">
          Website Examples
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
        <Typography variant="body2" color="secondaryText" component="p" className = "small-text">
            Pending
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}