import React, { Component } from "react";
import { Container } from "react-bootstrap";
// @ts-ignore
import documentarios from "./documentarios"
import './style.scss';


export const DocumentariosCarousel = () => {
    return (
        <section className="filmes">
            <Container>
                <h2>Documentarios</h2>
                <div className="filmes__caroussel">
                    {
                        documentarios.map(filmes => (
                            <div key={filmes.id}>
                                <img src={filmes.cover} />
                                <span>{filmes.duration}</span>
                                <h3>{filmes.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}