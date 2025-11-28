import React from 'react';
import { Filme } from '../tipos/Filme';
import { CardFilme } from './CardFilme';

interface PropsListasFilmes {
  filmes: Filme[];
  aoAlternarFavorito: (filme: Filme) => void;
  ehFavorito: (id: number) => boolean;
  mensagemVazia?: string;
}

export const ListasFilmes: React.FC<PropsListasFilmes> = ({ 
  filmes, 
  aoAlternarFavorito, 
  ehFavorito,
  mensagemVazia = "Nenhum filme encontrado."
}) => {
  if (filmes.length === 0) {
    return (
      <div className="lista-vazia">
        <p>{mensagemVazia}</p>
      </div>
    );
  }

  return (
    <div className="lista-filmes">
      {filmes.map(filme => (
        <CardFilme
          key={filme.id}
          filme={filme}
          aoClicarFavorito={aoAlternarFavorito}
          ehFavorito={ehFavorito(filme.id)}
        />
      ))}
    </div>
  );
};