import { useState, useEffect } from 'react';
import { Filme } from '../tipos/Filme';

export const useArmazenamentoLocal = (chave: string, valorInicial: Filme[] = []) => {
  const [valor, setValor] = useState<Filme[]>(() => {
    try {
      const item = window.localStorage.getItem(chave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (erro) {
      console.log('Erro ao carregar do localStorage:', erro);
      return valorInicial;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  const adicionarFavorito = (filme: Filme) => {
    setValor(anterior => {
      const existe = anterior.find(item => item.id === filme.id);
      if (!existe) {
        return [...anterior, filme];
      }
      return anterior;
    });
  };

  const removerFavorito = (filmeId: number) => {
    setValor(anterior => anterior.filter(item => item.id !== filmeId));
  };

  const ehFavorito = (filmeId: number) => {
    return valor.some(item => item.id === filmeId);
  };

  return {
    favoritos: valor,
    adicionarFavorito,
    removerFavorito,
    ehFavorito
  };
};