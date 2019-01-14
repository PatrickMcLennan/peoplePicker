import React from 'react';
import { Link } from 'react-router-dom';
import { headerCSS as css } from '../style';

const Header = () => (
  <header className="App-header" style={css.section}>
    <h1 style={css.h1}>Welcome to People Picker</h1>
    <h3 style={css.h3}>&amp; get ready for the funnest Web App you&apos;ve ever seen</h3>
    <div>
      <Link to="/myPeople" style={css.link}>My People</Link>
      <h3 style={css.h3}> | </h3>
      <Link to="/newPeople" style={css.link}>Find New People</Link>
    </div>
  </header>
);

export default Header;
