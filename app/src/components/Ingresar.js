import React from 'react';
import MapContainer from './MapContainer';
import DataInput from './DataInput'
import AddressInput from './AddressInput'
import { Container, Typography, Grid, Button, Fab, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import config from '../assets/config';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  left_fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  }
})
);


function Ingresar() {
  const classes = useStyles();
  const [data, setData] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [dataHasValue, setDataHasValue] = React.useState(false);
  const [addressHasValue, setAddressHasValue] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = {
      Nombre: data.name,
      Apellido: data.lastName,
      Documento: data.id,
      Mail: data.email,
      Telefono: data.tel,
      TokenBanco: data.token
      // ,
      // address: address
    }
    // 'http://localhost:1635/api/inversor/clbenito'
    fetch(config.backendApi + config.backendPost, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
  }).then((response) => {
      console.log(response);
  });
    
    console.log(formData);
  }

  return ( // ADD a BACK BUTTON IN ORDER TO GET BACK TO "HOME"
    <Container fixed>
      <Typography variant='h4'>Ingresar datos de los participantes</Typography>
      <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <DataInput setData={setData} hasValue={setDataHasValue} />
          </Grid>
          <Grid item xs={6}>
            <AddressInput setAddress={setAddress} hasValue={setAddressHasValue} />
          </Grid>
          <Button
            variant="contained"
            disabled={!dataHasValue || !addressHasValue}
            type={"submit"}
            value={"submit"}>
            Guardar
          </Button>
        </Grid>
      </form>
      <MapContainer />
      <Link to={"/home"}>
        <Fab color="default" aria-label="ArrowBack" className={classes.left_fab}>
          <ArrowBack />
        </Fab>
      </Link>
    </Container>
  );
}

export default Ingresar;