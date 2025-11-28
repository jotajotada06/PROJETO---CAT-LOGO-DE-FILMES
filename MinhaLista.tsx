import React from 'react';
import { Filme } from '..//tipos/Filme';
import { ListasFilmes } from '../componentes/ListasFilmes';
import { Link } from 'react-router-dom';

interface PropsMinhaLista {
  favoritos: Filme[];
  aoAlternarFavorito: (filme: Filme) => void;
}

export const MinhaLista: React.FC<PropsMinhaLista> = ({ 
  favoritos, 
  aoAlternarFavorito 
}) => {
  const ehFavorito = (id: number) => true; // Todos os filmes aqui são favoritos

  return (
    <div className="pagina-minha-lista">
      <div className="cabecalho-minha-lista">
        <h1>❤️ Minha Lista de Favoritos</h1>
        <p>Seus filmes e séries favoritos em um só lugar</p>
      </div>

      {favoritos.length === 0 ? (
        <div className="lista-vazia">
          <div className="icone-lista-vazia">🎬</div>
          <h2>Sua lista está vazia</h2>
          <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
          <Link to="/explorar" className="botao-explorar">
            Explorar Filmes
          </Link>
        </div>
      ) : (
        <>
          <div className="info-lista">
            <p>
              <strong>{favoritos.length}</strong> filme{favoritos.length !== 1 ? 's' : ''} na sua lista
            </p>
          </div>

          <ListasFilmes
            filmes={favoritos}
            aoAlternarFavorito={aoAlternarFavorito}
            ehFavorito={ehFavorito}
          />
        </>
      )}
    </div>
  );
};