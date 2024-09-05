import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faLeaf, faRuler } from '@fortawesome/free-solid-svg-icons'
import CardHeader from '@material-ui/core/CardHeader';



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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


export default function Tnc() {
  const classes = useStyles();




  return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardHeader 
        className={classes.head}
        title="Management Plans"
        />
        <CardContent className = 'padding-bottom'>
        <br />
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faLeaf} />
            <FontAwesomeIcon icon={faRuler} />
            <FontAwesomeIcon icon={faTree} />
            </Typography>
            <br />
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            The Nature Conservancy Baraboo Hills, Wisconsin
            <br />
            Ice Age Trail - Cross Plains Unit, Wisconsin
          </Typography>
        
        </CardContent>
    
        </CardActionArea>
      
    </Card>
  );
}