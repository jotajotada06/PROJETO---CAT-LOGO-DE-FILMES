import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filme } from '../tipos/Filme';
import { Avaliacao } from '../componentes/Avaliacao';
import { useGerenciadorFilmes } from '../hooks/useGerenciadorFilmes';

interface PropsDetalhesFilme {
  aoAlternarFavorito: (filme: Filme) => void;
  ehFavorito: (id: number) => boolean;
}

export const DetalhesFilme: React.FC<PropsDetalhesFilme> = ({ 
  aoAlternarFavorito, 
  ehFavorito 
}) => {
  const { id } = useParams<{ id: string }>();
  const { filmes } = useGerenciadorFilmes();
  
  const filme = filmes.find(f => f.id === Number(id));

  if (!filme) {
    return (
      <div className="pagina-detalhes">
        <div className="filme-nao-encontrado">
          <h2>Filme não encontrado</h2>
          <p>O filme que você está procurando não existe.</p>
          <Link to="/explorar" className="botao-voltar">
            Voltar para Explorar
          </Link>
        </div>
      </div>
    );
  }

  const ehFavoritoAtual = ehFavorito(filme.id);

  return (
    <div className="pagina-detalhes">
      <div className="cabecalho-detalhes">
        <Link to="/explorar" className="botao-voltar">
          ← Voltar
        </Link>
      </div>

      <div className="detalhes-filme">
        <div className="poster-detalhes">
          <img src={filme.capa} alt={`Capa de ${filme.titulo}`} />
          <button 
            onClick={() => aoAlternarFavorito(filme)}
            className={`botao-favorito-grande ${ehFavoritoAtual ? 'ativo' : ''}`}
          >
            {ehFavoritoAtual ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos'}
          </button>
        </div>

        <div className="info-detalhes">
          <div className="cabecalho-info">
            <h1>{filme.titulo}</h1>
            <div className="badges">
              {filme.ehLancamento && <span className="badge-lancamento">🎬 LANÇAMENTO</span>}
              <span className="badge-idade">{filme.faixaEtaria}</span>
            </div>
          </div>

          <div className="metadados">
            <p><strong>Ano:</strong> {filme.ano}</p>
            <p><strong>Duração:</strong> {filme.duracao}</p>
            <p><strong>Diretor:</strong> {filme.diretor}</p>
          </div>

          <Avaliacao nota={filme.nota} tamanho="grande" />

          <div className="sinopse">
            <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>
          </div>

          <div className="categorias-detalhes">
            <h3>Categorias</h3>
            <div className="lista-categorias">
              {filme.categorias.map(categoria => (
                <span key={categoria} className="categoria-tag-grande">
                  {categoria}
                </span>
              ))}
            </div>
          </div>

          <div className="elenco">
            <h3>Elenco Principal</h3>
            <div className="lista-elenco">
              {filme.elenco.map(ator => (
                <span key={ator} className="ator-tag">
                  {ator}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};