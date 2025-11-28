import React, { useState } from 'react';

interface PropsPesquisa {
  aoBuscar: (termo: string) => void;
  placeholder?: string;
}

export const Pesquisa: React.FC<PropsPesquisa> = ({ 
  aoBuscar, 
  placeholder = "Buscar..." 
}) => {
  const [termo, setTermo] = useState('');

  const lidarComBusca = (e: React.FormEvent) => {
    e.preventDefault();
    aoBuscar(termo);
  };

  return (
    <form className="pesquisa" onSubmit={lidarComBusca}>
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder={placeholder}
        className="campo-pesquisa"
      />
      <button type="submit" className="botao-pesquisa">
        🔍
      </button>
    </form>
  );
};