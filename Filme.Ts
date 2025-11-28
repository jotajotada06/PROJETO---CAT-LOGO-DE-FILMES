export interface Filme {
  id: number;
  titulo: string;
  capa: string;
  ano: number;
  nota: number;
  sinopse: string;
  categorias: string[];
  duracao: string;
  diretor: string;
  elenco: string[];
  ehLancamento: boolean;
  faixaEtaria: string;
}

export interface Usuario {
  nome: string;
  filmesFavoritos: number[];
  temaEscuro: boolean;
}