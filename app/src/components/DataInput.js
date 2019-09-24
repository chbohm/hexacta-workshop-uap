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

export default function DataInput({ setData, hasValue }) {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [id, setId] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [token, setToken] = React.useState('');
  const [tel, setTel] = React.useState('');
  const classes = useStyles();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleIdChange(event) {
    setId(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleTelChange(event) {
    setTel(event.target.value);
  }

  function handleTokenChange(event) {
    setToken(event.target.value);
  }

  useEffect(
    () => {
      handleSetData();
    },
    [name, lastName, id, email, tel, token], //watches over those variables and calls to action
  );

  function handleSetData() {
    if (name && lastName && id && email && tel && token) {
      setData({ //agregar user
        name: name,
        lastName: lastName,
        id: id,
        email: email,
        tel: tel,
        token: token
      });
    }
  }

  hasValue(name && lastName && id && email && token);

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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="id-component">Teléfono</InputLabel>
        <Input id="id-component" type="number" value={tel} onChange={handleTelChange} />
        <FormHelperText>Telefono del participante</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="id-component">E-mail</InputLabel>
        <Input id="id-component" type="email" value={email} onChange={handleEmailChange} />
        <FormHelperText>Correo electrónico del participante</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="id-component">Token</InputLabel>
        <Input id="id-component" type="text" value={token} onChange={handleTokenChange} />
        <FormHelperText>Token del participante</FormHelperText>
      </FormControl>
    </div>
  );
}
