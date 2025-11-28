import React, { useState } from 'react';
import { Filme } from '../tipos/Filme';
import { ListasFilmes } from '../componentes/ListasFilmes';
import { Pesquisa } from '../componentes/Pesquisa';
import { Filtro } from '../componentes/Filtro';
import { useGerenciadorFilmes } from '../hooks/useGerenciadorFilmes';

interface PropsExplorar {
  aoAlternarFavorito: (filme: Filme) => void;
  ehFavorito: (id: number) => boolean;
}

export const Explorar: React.FC<PropsExplorar> = ({ 
  aoAlternarFavorito, 
  ehFavorito 
}) => {
  const {
    filmes,
    categorias,
    categoriaSelecionada,
    setCategoriaSelecionada,
    termoBusca,
    setTermoBusca
  } = useGerenciadorFilmes();

  const lidarComBusca = (termo: string) => {
    setTermoBusca(termo);
  };

  return (
    <div className="pagina-explorar">
      <div className="cabecalho-explorar">
        <h1>🔍 Explorar Filmes</h1>
        <p>Encontre filmes por categoria, diretor ou nome</p>
        
        <div className="controles-explorar">
          <Pesquisa 
            aoBuscar={lidarComBusca} 
            placeholder="Buscar por título, diretor..."
          />
        </div>
      </div>

      <div className="conteudo-explorar">
        <aside className="sidebar">
          <Filtro
            categorias={categorias}
            categoriaSelecionada={categoriaSelecionada}
            aoSelecionarCategoria={setCategoriaSelecionada}
          />
        </aside>

        <main className="area-filmes">
          <div className="info-resultados">
            <h2>
              {filmes.length} filme{filmes.length !== 1 ? 's' : ''} encontrado{filmes.length !== 1 ? 's' : ''}
              {categoriaSelecionada !== 'Todos' && ` em ${categoriaSelecionada}`}
              {termoBusca && ` para "${termoBusca}"`}
            </h2>
          </div>

          <ListasFilmes
            filmes={filmes}
            aoAlternarFavorito={aoAlternarFavorito}
            ehFavorito={ehFavorito}
            mensagemVazia="Nenhum filme encontrado com esses filtros."
          />
        </main>
      </div>
    </div>
  );
};