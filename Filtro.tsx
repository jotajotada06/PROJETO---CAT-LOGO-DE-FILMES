import React from 'react';

interface PropsFiltro {
  categorias: string[];
  categoriaSelecionada: string;
  aoSelecionarCategoria: (categoria: string) => void;
}

export const Filtro: React.FC<PropsFiltro> = ({
  categorias,
  categoriaSelecionada,
  aoSelecionarCategoria
}) => {
  return (
    <div className="filtro">
      <h3>Filtrar por Categoria</h3>
      <div className="botoes-categoria">
        {categorias.map(categoria => (
          <button
            key={categoria}
            onClick={() => aoSelecionarCategoria(categoria)}
            className={`botao-categoria ${
              categoriaSelecionada === categoria ? 'ativo' : ''
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  );
};