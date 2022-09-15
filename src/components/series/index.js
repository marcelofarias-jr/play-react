import React, { Component } from "react";
import { Container } from "react-bootstrap";
// @ts-ignore
import series from "./series"
import './style.scss';


export const SeriesCarousel = () => {
    return (
        <section className="filmes">
            <Container>
                <h2>Series</h2>
                <div className="filmes__caroussel">
                    {
                        series.map(filmes => (
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