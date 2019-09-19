import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '10px'
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function AddressInput({ setAddress, hasValue }) {
  const [calle, setCalle] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [depto, setDepto] = React.useState('');
  const classes = useStyles();

  function handleCalleChange(event) {
    setCalle(event.target.value);
  }

  function handleNumeroChange(event) {
    setNumero(event.target.value);
  }

  function handleDeptoChange(event) {
    setDepto(event.target.value);
  }

  useEffect(
    () => {
      handleSetAddress();
    },
    [calle, numero, depto], //watches over those variables and calls to action
  );

  function handleSetAddress() {
    if (calle && numero && depto) {
      setAddress({
        calle: calle,
        numero: numero,
        depto: depto
      });
    }
  }

  hasValue(calle && numero && depto);



  return (
    <div className={classes.container}>
      <Typography variant='h6'>Ingresar dirección</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="calle-component">Calle</InputLabel>
        <Input id="calle-component" value={calle} onChange={handleCalleChange} />
        <FormHelperText>Nombre de la calle</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="numero-component">Numero</InputLabel>
        <Input id="numero-component" type="number" value={numero} onChange={handleNumeroChange} />
        <FormHelperText>Altura de la calle</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="departamento-component">Piso - departamento</InputLabel>
        <Input id="departamento-component" value={depto} onChange={handleDeptoChange} />
        <FormHelperText>Piso o departamento</FormHelperText>
      </FormControl>
    </div>
  );
}
