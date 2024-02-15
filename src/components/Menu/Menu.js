import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => (
    {
    menu: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    }
));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <AppBar 
      position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Code Tropical
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          {/* <Button component={Link} to="/contact" color="inherit">Contact</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;
