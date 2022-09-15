import { Filme } from "components/filme";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// @ts-ignore
import filmes from "./filmes"
import './style.scss';


export const FilmesCarousel = () => {
    return (
        <section className="filmes">
            <Container>
                <h2>Filmes</h2>
                <div className="filmes__caroussel">
                   <Filme />
                </div>
            </Container>
        </section>
    );
}