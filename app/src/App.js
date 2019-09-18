import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppTheme } from './theme';
import { theme } from './appTheme'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import { Box, Typography, AppBar, Toolbar } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Ingresar from './components/Ingresar'

// const appTheme = createMuiTheme();

function App() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="body2" display="block">HX Workshop - UAP</Typography>
        </Toolbar>
      </AppBar>
      <Box pt={8} minHeight="90vh">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/home" />
            )} />
            <Route path='/home' exact component={Home} />
            <Route path='/ingresar' exact component={Ingresar} />
          </Switch>
        </BrowserRouter>
      </Box>
    </React.Fragment>
  );
}

export default App;
