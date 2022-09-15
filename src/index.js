import { Filme } from 'components/filme';
import { Footer } from 'components/footer';
import { Menu } from 'components/menu';
import { Documentarios } from 'pages/documentarios';
import { PageFilmes } from 'pages/filmes';
import { Home } from 'pages/home';
import { NotFound } from 'pages/NotFound';
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
          <Route path="/filmes" element={<PageFilmes />} >
            <Route path=":id" element={<Filme />} />
          </Route>
          <Route path="/documentarios" element={<Documentarios />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
