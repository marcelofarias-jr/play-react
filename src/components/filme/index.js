import React, { Component } from "react";
import { Container } from "react-bootstrap";
// @ts-ignore
import './style.scss';
// @ts-ignore
import filmes from "../filmes/filmes.json"
import { Link } from "react-router-dom";


export const Filme = () => {
    return (
        <section className="filme">
          {
                        filmes.map(filmes => (
                            <div key={filmes.id}>
                                <Link to="/filmes/{filmes.id}">
                                    <img src={filmes.cover} />
                                    <span>{filmes.duration}</span>
                                    <h3>{filmes.name}</h3>
                                </Link>
                            </div>
                        ))
                    }
        </section>
    );
}