import React from 'react';
import { Nav, Navlink } from './Header.styled';

function Header() {
  return (
    <Nav>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/movies">Muvies</Navlink>
    </Nav>
  );
}

export default Header;
