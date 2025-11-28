import { useState, useMemo } from 'react';
import { Filme } from '../tipos/Filme';
import { filmesExemplo, categorias } from '../dados/dadosMock';

export const useGerenciadorFilmes = () => {
  const [filmes] = useState<Filme[]>(filmesExemplo);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("Todos");
  const [termoBusca, setTermoBusca] = useState<string>("");

  // Filtra os filmes baseado na categoria e termo de busca
  const filmesFiltrados = useMemo(() => {
    return filmes.filter(filme => {
      const correspondeCategoria = categoriaSelecionada === "Todos" || 
                                 filme.categorias.includes(categoriaSelecionada);
      
      const correspondeBusca = filme.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
                             filme.diretor.toLowerCase().includes(termoBusca.toLowerCase());
      
      return correspondeCategoria && correspondeBusca;
    });
  }, [filmes, categoriaSelecionada, termoBusca]);

  // Pega filmes em destaque (lançamentos ou com nota alta)
  const filmesDestaque = useMemo(() => {
    return filmes.filter(filme => filme.ehLancamento || filme.nota >= 4.5);
  }, [filmes]);

  return {
    filmes: filmesFiltrados,
    filmesDestaque,
    categorias,
    categoriaSelecionada,
    setCategoriaSelecionada,
    termoBusca,
    setTermoBusca
  };
};