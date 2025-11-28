import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navegacao}  from './componentes/Navegacao';
import {Rodape}  from './componentes/Rodape';
import { Home } from './paginas/Home';
import { Explorar } from './paginas/Explorar';
import { DetalhesFilme } from './paginas/DetalhesFilme';
import { MinhaLista } from './paginas/MinhaLista';
import { Sobre } from './paginas/Sobre';
import { useArmazenamentoLocal } from './hooks/useArmazenamentoLocal';

import './App.css';

function App() {
  const { favoritos, adicionarFavorito, removerFavorito, ehFavorito } = 
    useArmazenamentoLocal('favoritos', []);

 

  const alternarFavorito = (filme: any) => {
    if (ehFavorito(filme.id)) {
      removerFavorito(filme.id);
    } else {
      adicionarFavorito(filme);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navegacao />
        
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={
              <Home
              favoritos={favoritos}
                aoAlternarFavorito={alternarFavorito}
                ehFavorito={ehFavorito}
              />
            } />
            <Route path="/explorar" element={
              <Explorar 
                aoAlternarFavorito={alternarFavorito}
                ehFavorito={ehFavorito}
              />
            } />
            <Route path="/filme/:id" element={
              <DetalhesFilme 
                aoAlternarFavorito={alternarFavorito}
                ehFavorito={ehFavorito}
              />
            } />
            <Route path="/minha-lista" element={
              <MinhaLista 
                favoritos={favoritos}
                aoAlternarFavorito={alternarFavorito}
              />
            } />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;