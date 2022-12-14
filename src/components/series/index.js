import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                                <Link to={filmes.url}>
                                    <img src={filmes.cover} />
                                    <span>{filmes.duration}</span>
                                    <h3>{filmes.name}</h3>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}