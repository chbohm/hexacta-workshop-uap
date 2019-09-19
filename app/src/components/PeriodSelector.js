import React from 'react';
import { Typography, Input, Grid, Button, FormControl, InputLabel, FormHelperText, makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  }
}));

function PeriodSelector() {
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [name, setName] = React.useState('');

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (startDate > endDate) {
      alert('La fecha de comienzo debe ser menor a la fecha de fin.');
      return;
    }
    console.log('START DATE: ', startDate, ' END DATE: ', endDate, 'NAME: ', name);
  }

  return (
    <div style={{ margin: '30px' }}>
      <Typography variant={'h4'}>Seleccione el período</Typography>
      <form onSubmit={handleSubmit} style={{ padding: '20px', margin: '30px' }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography variant='subtitle1'>Fecha de comienzo</Typography>
            <Input id="start-date-component" type="date" value={startDate} onChange={handleStartDateChange} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>Fecha de fin</Typography>
            <Input id="end-date-component" type="date" value={endDate} onChange={handleEndDateChange} />
          </Grid>
          <Grid item xs={4}>
            {/* <Typography variant='h8'>Nombre de usuario</Typography> */}
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-component">Nombre de usuario</InputLabel>
              <Input id="name-component" value={name} onChange={handleNameChange} />
              <FormHelperText>Nombre de usuario del participante</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          disabled={!startDate || !endDate || !name}
          type={"submit"}
          value={"submit"}>
          Guardar
        </Button>
      </form>
    </div >
  )
}

export default PeriodSelector;