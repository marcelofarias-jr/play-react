import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './style.scss';
import logo from "../../assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = () => {
  return (
    <Container>
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/">
          <img src={logo} alt="Logo"/>
          </Link>
        </div>
        <div className="menu__nav">
          <ul>
            <li>
              <Link to="/filmes">Filmes</Link>
            </li>
            <li>
              <Link to="/documentarios" state={'This is state from ABOUT'}>
                Documentários
              </Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>

  );
};
