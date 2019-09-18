import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Esta será nuestra aplicación hecha en React.js
      </p>
      <Link to={`/ingresar`}>
      <Button>Ingresar</Button>
      </Link>
    </header>
  </div>
  );
}

export default Home;