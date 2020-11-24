import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-principal.jpg';

const Home = () => (
  <header className="head-waiter">
    <Link to="/"><img src={logo} alt="imagen de product" className="logo-pg" /></Link>
    <h1>Procter and Gamble </h1>
  </header>
);
export default Home;
