import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function callToBackend() {
  fetch('http://localhost:1635/api/cotizacion/dpacheco2',
  {
    method: 'GET'
  }).then(response => console.log(response.json()));
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta será nuestra aplicación hecha en React.js
      </p>
        <Link to={`/ingresar`}>
          <Button variant="contained">Ingresar datos</Button>
        </Link>
        <Link to={`/bcra`}>
          <Button variant="contained">Ver datos del banco</Button>
        </Link>
        <Button variant="contained" onClick={callToBackend}>Call to Backend</Button>
      </header>
    </div>
  );
}

export default Home;