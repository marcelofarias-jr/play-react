import React, { Component } from "react";
import { Container } from "react-bootstrap";
// @ts-ignore
import filmes from "./filmes"
import './style.scss';


export const FilmesCarousel = () => {
    return (
        <section className="filmes">
            <Container>
                <h2>Filmes</h2>
                <div className="filmes__caroussel">
                    {
                        filmes.map(filmes => (
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