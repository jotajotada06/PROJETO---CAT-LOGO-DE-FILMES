import React from 'react';
import { Filme } from '../tipos/Filme';
import { CardFilme } from '../componentes/CardFilme';
import { useGerenciadorFilmes } from '../hooks/useGerenciadorFilmes';
import { filmesExemplo } from '../dados/dadosMock';

interface PropsHome {
  favoritos: Filme[];
  aoAlternarFavorito: (filme: Filme) => void;
  ehFavorito: (id: number) => boolean;
}

const availableMovies = filmesExemplo;


export const Home: React.FC<PropsHome> = 
({ 
  favoritos,
  aoAlternarFavorito, 
  ehFavorito 
}) => {
  const  filmesDestaque  = useGerenciadorFilmes();
  console.log('Total de favoritos no Home:', favoritos.length);

  return (
    <div className="pagina-home">
      <section className="hero">
        <h1>Bem-vindo ao Catálogo de Filmes</h1>
        <p>Descubra seus próximos filmes favoritos</p>
      </section>

      <section className="destaques">
        <h2>🎬 Filmes em Destaque</h2>
        <div className="grid-filmes">
          {availableMovies.map(filme => (
            <CardFilme
              key={filme.id}
              filme={filme}
              aoClicarFavorito={aoAlternarFavorito}
              ehFavorito={ehFavorito(filme.id)}
            />
          ))}
        </div>
      </section>

      <section className="estatisticas">
        <div className="card-estatistica">
          <h3>Total de Filmes</h3>
          <p>{availableMovies.length}</p>
        </div>
        <div className="card-estatistica">
          <h3>Lançamentos</h3>
          <p>{availableMovies.filter(f => f.ehLancamento).length}</p>
        </div>
      </section>
    </div>
  );
};