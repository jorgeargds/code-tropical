import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menu: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 110,
    height: 70,
  },
  spacer: {
    flexGrow: 1,
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <AppBar position="static">
        <Toolbar>
          <img src='/code-tropical.png' alt="Logo" className={classes.logo} /> {/* Use your logo */}
          <div className={classes.spacer} /> {/* Spacer to push buttons to the right */}
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          {/* <Button component={Link} to="/contact" color="inherit">Contact</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;
