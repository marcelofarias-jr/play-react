import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__content">
          <div className="footer__content__logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="footer__content__copy">
            <p>© - Play - Todos os direitos reservados</p>
          </div>
        </div>
      </Container>
    </footer>

  );
};

