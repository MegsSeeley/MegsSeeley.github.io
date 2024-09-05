import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

library.add(fab)
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
         
          <div className = "iconAlign">
            
          <Typography variant="h6" noWrap >
          <div className = 'iconAlignL'>
            <a href = "malito:megs.seeley@gmail.com" target = "blank" className = 'black'><FontAwesomeIcon icon={faEnvelope} /></a> <a href = "https://twitter.com/MegsSeeley" target = "blank" className= 'black'> <FontAwesomeIcon icon={['fab', 'twitter']} /></a> 
          </div>
          <div className = 'iconAlignR'>
          <a href = "https://scholar.google.com/citations?user=KQ15ZSsAAAAJ&hl=en" target = "blank" className = 'black'><FontAwesomeIcon icon={faUserGraduate} /></a> <a href = "https://github.com/MegsSeeley" target = "blank" className = 'black'><FontAwesomeIcon icon={['fab', 'github']} /></a> 
          </div>
          
          </Typography>
          
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
