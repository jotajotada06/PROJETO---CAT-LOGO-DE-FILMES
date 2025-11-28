import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navegacao: React.FC = () => {
  const localizacao = useLocation();
  
  return (
    <nav className="navegacao">
      <div className="logo">
        <Link to="/">🎬 Catálogo de Filmes</Link>
      </div>
      
      <ul className="links-navegacao">
        <li>
          <Link to="/" className={localizacao.pathname === '/' ? 'ativo' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/explorar" className={localizacao.pathname === '/explorar' ? 'ativo' : ''}>
            Explorar
          </Link>
        </li>
        <li>
          <Link to="/minha-lista" className={localizacao.pathname === '/minha-lista' ? 'ativo' : ''}>
            Minha Lista
          </Link>
        </li>
        <li>
          <Link to="/sobre" className={localizacao.pathname === '/sobre' ? 'ativo' : ''}>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};