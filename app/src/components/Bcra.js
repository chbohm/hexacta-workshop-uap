import React, { useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Typography, Fab, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BcraOffLineResults from '../assets/bcraResults';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import config from '../assets/config';
import PeriodSelector from './PeriodSelector';

const useStyles = makeStyles(theme => ({
  typography: {
    margin: '20px',
    display: 'block'
  },
  left_fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  }
}));

const options = {
  title: {
    text: 'Banco'
  },
  series: [{
    name: 'Precio del Dolar',
    data: BcraOffLineResults.map((elem) => { return elem.v; })
  }],
  xAxis: {
    categories: BcraOffLineResults.map((elem) => { return elem.d; })
  }
}

const bcraToken = config.bcraToken;
const URI = config.bcraApi;


function Bcra() {
  const classes = useStyles();

  useEffect(() => {
    // fetch(URI, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': 'Bearer ' + bcraToken,
    //     'Content-Type': 'application/json'
    //   }
    // }).then((response) => {
    //   console.log('RESPONSE: ', response);
    // })
    console.log('token: ', bcraToken, ' URI: ', URI);
    // console.log(JSON.stringify(BcraOffLineResults));
  });

  return (
    <Container fixed>
      <Typography variant={'h4'} className={classes.typography}>
        Datos obtenidos del BCRA
      </Typography>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <PeriodSelector />
      <Link to={"/home"}>
        <Fab color="default" aria-label="ArrowBack" className={classes.left_fab}>
          <ArrowBack />
        </Fab>
      </Link>
      </Container>
  );
}

export default Bcra;