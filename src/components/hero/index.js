import React from "react";
import { Container } from "react-bootstrap";
import './style.scss';

export const Hero = () =>{
    return (
        <section className="hero">
            <Container>
            <div className="hero__container">
                <div className="hero__container__tag">
                    <span className="hero__container__tag__category">Filmes</span>
                    <span className="hero__container__tag__duration">130m</span>
                </div>
                <div className="hero__container__title">
                    <h1>Pellentesque habitant morbi</h1>
                </div>
                <div className="hero__container__button">
                    <button className="hero__container__button__info">Mais informações</button>
                </div>
            </div>
            </Container>

        </section>
    );
}