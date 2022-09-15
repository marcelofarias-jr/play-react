import { FilmesCarousel } from "components/filmes";
import { SeriesCarousel } from "components/series";
import { DocumentariosCarousel } from "components/documentarios";
import { Hero } from "components/hero";

import React from "react";
import { Container } from "react-bootstrap";


export const Home = () => {
    return (
        <>
            <Hero />
            <FilmesCarousel />
            <DocumentariosCarousel />
            <SeriesCarousel />
        </>
    );
}
