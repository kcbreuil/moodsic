import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: white;
  height: 80px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  a {
    color: black;
  }
  ul {
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 2rem;
    align-items: center;
    font-family: 'Fredoka One', cursive;
    margin-top: 0;
  }
  li {
    margin-top: 20px;
    font-size: 2rem;
  }
  a:link {
    text-decoration: none;
  }
  a:hover {
    color: red;
    --rotate: -2deg;
    transform: rotate(var(--rotate));
  }
`;
const Navigation = () => {
  return (
    <NavStyles>
      <ul>
        <li>{/* <Link to="/">MoodsicApp</Link> */}</li>
        <li>
          <Link to="/">MoodsicApp</Link>
        </li>
        <li>{/* <Link to="/">MoodsicApp</Link> */}</li>
      </ul>
    </NavStyles>
  );
};

export default Navigation;
