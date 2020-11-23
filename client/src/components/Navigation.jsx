import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 2rem;
    align-items: center;
    font-family: 'Fredoka One', cursive;
    font-size: 24px;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-size: 28px;
    color: #f0f8ff;
  }
`;
const Navigation = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Moodsic</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Navigation;
