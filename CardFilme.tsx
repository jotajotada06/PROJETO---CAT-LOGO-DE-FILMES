import React from 'react';
import { Link } from 'react-router-dom';
import { Filme } from '../tipos/Filme';
import { Avaliacao } from './Avaliacao';

interface PropsCardFilme {
  filme: Filme;
  aoClicarFavorito: (filme: Filme) => void;
  ehFavorito: boolean;
}

export const CardFilme: React.FC<PropsCardFilme> = ({ 
  filme, 
  aoClicarFavorito, 
  ehFavorito 
}) => {
  return (
    <div className="card-filme">
      <div className="card-cabecalho">
        {filme.ehLancamento && <span className="badge-lancamento">🎬 LANÇAMENTO</span>}
        <span className="badge-idade">{filme.faixaEtaria}</span>
      </div>
      
      {/* IMAGEM CLICÁVEL */}
      <Link to={`/filme/${filme.id}`}>
        <img src={filme.capa} alt={`Capa do filme ${filme.titulo}`} />
      </Link>
      
      <div className="card-info">
        {/* TÍTULO CLICÁVEL */}
        <Link to={`/filme/${filme.id}`} className="titulo-clicavel">
          <h3>{filme.titulo}</h3>
        </Link>
        
        <p className="ano-duracao">{filme.ano} • {filme.duracao}</p>
        
        <Avaliacao nota={filme.nota} tamanho="pequeno" />
        
        <div className="categorias">
          {filme.categorias.map(categoria => (
            <span key={categoria} className="categoria-tag">#{categoria}</span>
          ))}
        </div>
        
        {/* SÓ O BOTÃO FAVORITAR - SEM "VER DETALHES" */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Impede que clique no botão navegue para detalhes
            aoClicarFavorito(filme);
          }}
          className={`botao-favorito ${ehFavorito ? 'ativo' : ''}`}
        >
          {ehFavorito ? '❤️ Remover' : '🤍 Favoritar'}
        </button>
      </div>
    </div>
  );
};