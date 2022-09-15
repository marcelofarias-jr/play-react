import { Footer } from 'components/footer';
import { Menu } from 'components/menu';
import { Documentarios } from 'pages/documentarios';
import { Filmes } from 'pages/filmes';
import { Home } from 'pages/home';
import { Series } from 'pages/series';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/documentarios" element={<Documentarios />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
