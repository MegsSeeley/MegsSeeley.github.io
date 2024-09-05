import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faLeaf } from '@fortawesome/free-solid-svg-icons'
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


export default function Paleo() {
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
        title="Williams Paleoecology Lab"
        />
        <CardContent>
          <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faLeaf} /> <FontAwesomeIcon icon={faLayerGroup} />
            </Typography>
            <Typography variant="body2" color="secondaryText" component="p" className = "center-text">
            Student Researcher
          </Typography>
          <a href="https://onlinelibrary.wiley.com/doi/10.1111/jbi.13491" target = "blank">
          <Typography variant="body2" color="secondary" component="p" className = "center-text">
          Assessing the environmental and dispersal controls on Fagus grandifolia distributions in the Great Lakes region
          </Typography>
          </a>
        </CardContent>
        
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
            <b>Aim: </b>
            This paper assesses the relative importance of environmental filtering and dispersal limitations as controls on the western range limit of <i>Fagus grandifolia</i>, a common mesic late‐successional tree species in the eastern United States. We also test for differences in species–environment relationships between range‐edge populations of <i>F. grandifolia</i> in eastern Wisconsin and core populations in Michigan. Because environmental conditions between the states differ moderately, while in Michigan dispersal presumably no longer limits <i>F. grandifolia</i> distributions, <i>F. grandifolia</i> offers a classic case study for biogeographers, foresters, and palaeoecologists interested in understanding processes governing species range limits.
            <br /> 
            <b>Methods: </b>
            This study combines historical datasets of <i>F. grandifolia</i> from the Public Land Survey, environmental covariates from soil maps and historical climate data, three spatial scenarios of dispersal limitation, and five species distribution models (SDMs). We test dispersal limitation and environmental filtering hypotheses by assessing SDM transferability between core and edge populations, measuring the importance of dispersal and environmental predictors, and using a residual autocovariate model to test for spatial processes not represented by these predictors.
            <br /> 
            <b>Results: </b>
            <i>F. grandifolia</i> presence was best predicted by total snowfall in Michigan and by dispersal, summer precipitation, and potential evapotranspiration (PET) in Wisconsin. Following the addition of dispersal as a predictor, most Wisconsin models improved and spatial autocorrelation effects largely disappeared. Transferability between core and edge populations was moderate to low.
            <br /> 
            <b>Main conclusions: </b>
            Both environmental and dispersal limitations appear to govern the western range limit of <i>F. grandifolia</i>. Species–environment relationships differ between range‐edge and core populations, suggesting either stronger environmental filtering at the range edge or fine‐scale, spatially varying interactions between environmental factors governing moisture availability in core populations. Although lakes, like Lake Michigan, both moderate regional climates and act as dispersal barriers, these effects can be disentangled through the joint analysis of SDMs and historic observational datasets.
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}