import React from 'react';
import MapContainer from './MapContainer';
import DataInput from './DataInput'
import AddressInput from './AddressInput'
import { Container, Typography, Grid, Button } from '@material-ui/core';

function Ingresar() {
  const [data, setData] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [dataHasValue, setDataHasValue] = React.useState(false);
  const [addressHasValue, setAddressHasValue] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = {
      data: data,
      address: address
    }
    console.log(formData);
  }

  return (
    <Container fixed>
      <Typography variant='h4'>Ingresar datos de los participantes</Typography>
      <form onSubmit={handleSubmit} style={{ padding: 20 }}>
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
    </Container>
  );
}

export default Ingresar;