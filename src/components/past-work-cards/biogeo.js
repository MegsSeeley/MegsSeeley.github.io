import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faMicroscope} from '@fortawesome/free-solid-svg-icons'
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx';



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


export default function Biogeo() {
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
        title="Marin-Spiotta Biogeography Lab"
        />
        <CardContent>
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faMicroscope} /> <FontAwesomeIcon icon={faSeedling} />
            </Typography>
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Student Researcher
          </Typography>
          <a href="https://onlinelibrary.wiley.com/doi/10.1111/jbi.13491" target = "blank">
          <Typography variant="body2" color="secondary" component="p" className = "center-text">
          A Meta-analysis of land change effects on tropical soil microbiome: Emerging patterns and knowledge gaps 
          </Typography>
          </a>
        </CardContent>
        <br />
        <center>
        <Typography variant="body2" color="primary" component="p" className = "center-text">
          Abstract
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
        Modifications in vegetation due to land use conversions (LUC) between primary forests, pasture, cropping systems, tree plantations, and secondary forests drive shifts in soil microbial communities. These microbial community alterations affect carbon sequestration, nutrient cycling, aboveground biomass, and numerous other soil processes. Despite their importance, little is known about soil microbial organisms’ response to LUC, especially in tropical regions where LUC rates are greatest. This project identifies current trends and uncertainties in tropical soil microbiology by comparing 56 published studies on LUC in tropical regions. This review indicates that microbial biomass and functional groups shifted in response to LUC, supporting demonstrated trends in changing soil carbon stocks due to LUC. Microbial biomass was greatest in primary forests when compared to secondary forests and in all forests when compared to both cropping systems and tree plantations. No trend existed when comparing pasture systems and forests, likely due to variations in pasture fertilizer use. Cropping system soils had greater gram positive and less gram negative bacteria than forest soils, potentially resulting in greater respiration of older carbon stocks in agricultural soils. Bacteria dominated primary forests while fungal populations were greatest in secondary forests. To characterize changes in microbial communities resulting from land use change, research must reflect the biophysical variation across the tropics. A chi-squared test revealed that the literature sites represented mean annual temperature variation across the tropics (p-value=0.66).
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}