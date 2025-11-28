import React from 'react';

export const Sobre: React.FC = () => {
  const integrantes = [
    { nome: "Aluno 1", componentes: ["Navegacao", "Cabecalho"] },
    { nome: "Aluno 2", componentes: ["CardFilme", "ListaFilmes"] },
    { nome: "Aluno 3", componentes: ["Pesquisa", "Filtro"] },
    { nome: "Aluno 4", componentes: ["Avaliacao", "Rodape"] }
  ];

  const tecnologias = [
    { nome: "React", descricao: "Biblioteca para interfaces" },
    { nome: "TypeScript", descricao: "JavaScript com tipagem" },
    { nome: "React Router", descricao: "Navegação entre páginas" },
    { nome: "LocalStorage", descricao: "Armazenamento local" },
    { nome: "CSS3", descricao: "Estilização moderna" }
  ];

  return (
    <div className="pagina-sobre">
      <div className="cabecalho-sobre">
        <h1>📖 Sobre o Projeto</h1>
        <p>Catálogo de Filmes - Trabalho Final de Front-end Frameworks</p>
      </div>

      <section className="secao-sobre">
        <h2>🎯 Objetivo</h2>
        <p>
          Este projeto foi desenvolvido como trabalho final da disciplina de Front-end Frameworks, 
          com o objetivo de criar uma aplicação web completa utilizando React.js com TypeScript.
        </p>
      </section>

      <section className="secao-sobre">
        <h2>👥 Nossa Equipe</h2>
        <div className="grid-integrantes">
          {integrantes.map((integrante, index) => (
            <div key={index} className="card-integrante">
              <h3>{integrante.nome}</h3>
              <p><strong>Componentes:</strong></p>
              <ul>
                {integrante.componentes.map(componente => (
                  <li key={componente}>{componente}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="secao-sobre">
        <h2>🛠️ Tecnologias Utilizadas</h2>
        <div className="grid-tecnologias">
          {tecnologias.map((tech, index) => (
            <div key={index} className="card-tecnologia">
              <h3>{tech.nome}</h3>
              <p>{tech.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="secao-sobre">
        <h2>📋 Funcionalidades</h2>
        <ul className="lista-funcionalidades">
          <li>✅ Catálogo completo de filmes</li>
          <li>✅ Sistema de favoritos</li>
          <li>✅ Busca e filtros</li>
          <li>✅ Navegação entre páginas</li>
          <li>✅ Design responsivo</li>
          <li>✅ Armazenamento local</li>
        </ul>
      </section>

      <section className="secao-sobre">
        <h2>📚 Requisitos Atendidos</h2>
        <div className="requisitos">
          <div className="requisito">
            <strong>8 Componentes Funcionais</strong>
            <span>✅ Concluído</span>
          </div>
          <div className="requisito">
            <strong>5 Páginas Distintas</strong>
            <span>✅ Concluído</span>
          </div>
          <div className="requisito">
            <strong>4+ Hooks Diferentes</strong>
            <span>✅ Concluído</span>
          </div>
          <div className="requisito">
            <strong>TypeScript</strong>
            <span>✅ Concluído</span>
          </div>
        </div>
      </section>
    </div>
  );
};