import React from 'react';
import { Pesquisa } from './Pesquisa';

interface PropsCabecalho {
  aoBuscar: (termo: string) => void;
}

export const Cabecalho: React.FC<PropsCabecalho> = ({ aoBuscar }) => {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <h1>🎬 Encontre Seu Próximo Filme Favorito</h1>
        <p>Explore nosso catálogo e descubra grandes histórias</p>
        <Pesquisa aoBuscar={aoBuscar} placeholder="Buscar filmes, diretores..." />
      </div>
    </header>
  );
};