import React from 'react';

interface PropsAvaliacao {
  nota: number;
  tamanho?: 'pequeno' | 'medio' | 'grande';
}

export const Avaliacao: React.FC<PropsAvaliacao> = ({ 
  nota, 
  tamanho = 'medio' 
}) => {
  const estrelasCheias = Math.floor(nota);
  const temMeiaEstrela = nota % 1 >= 0.5;

  return (
    <div className={`avaliacao avaliacao-${tamanho}`}>
      <div className="estrelas">
        {[1, 2, 3, 4, 5].map(numero => (
          <span
            key={numero}
            className={`estrela ${
              numero <= estrelasCheias
                ? 'cheia'
                : numero === estrelasCheias + 1 && temMeiaEstrela
                ? 'meia'
                : 'vazia'
            }`}
          >
            ⭐
          </span>
        ))}
      </div>
      <span className="nota-texto">({nota.toFixed(1)})</span>
    </div>
  );
};