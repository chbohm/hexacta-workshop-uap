import React from 'react';
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

export default function DataInput({setData, hasValue}) {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [id, setId] = React.useState('');
  const classes = useStyles();

  function handleNameChange(event) {
    setName(event.target.value);
    handleSetData();
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    handleSetData();
  }

  function handleIdChange(event) {
    setId(event.target.value);
    handleSetData();
  }

  function handleSetData() {
    // if( name && lastName && id) {
      setData({
        name: name,
        lastName: lastName,
        id: id
      });
    // }
  }

  hasValue(name && lastName && id);

  return (
    <div className={classes.container}>
      <Typography variant='h6'>Ingresar datos personales</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-component">Nombre</InputLabel>
        <Input id="name-component" value={name} onChange={handleNameChange} />
        <FormHelperText>Nombre del participante</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="last-name-component">Apellido</InputLabel>
        <Input id="last-name-component" value={lastName} onChange={handleLastNameChange} />
        <FormHelperText>Apellido del participante</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="id-component">Documento</InputLabel>
        <Input id="id-component" type="number" value={id} onChange={handleIdChange} />
        <FormHelperText>Documento de identidad del participante</FormHelperText>
      </FormControl>
    </div>
  );
}
