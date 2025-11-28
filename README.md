# React + TypeScript + Vite

🎬 Catálogo de Filmes: Visão Geral do Projeto Nosso site é um Catálogo de Filmes moderno, desenvolvido com React + TypeScript e construído com Vite, o que garante uma aplicação de alto desempenho e carregamento rápido. O projeto é estruturado de forma modular, com 8 componentes principais que organizam a interface e a lógica de interação.

🧱 Estrutura e Componentes Chave A aplicação é dividida em componentes reutilizáveis, seguindo a filosofia do React, para gerenciar diferentes aspectos da experiência do usuário:

Estrutura de Layout: Navegação: A barra de navegação principal, responsável pelo roteamento para sessões como Home, Explorar e Minha Lista. Cabelho: Apresenta a identidade visual do site e integra o componente de busca. Rodape: Contém informações finais e links de navegação secundários. Exibição e Interação de Dados: ListasFilmes: O contêiner que recebe uma lista de filmes e os renderiza utilizando o componente CardFilme. CardFilme: A representação individual de um filme. Exibe a capacidade, o título, a duração, as categorias, a faixa etária e inclui botões para Favoritar e links para a página de detalhes.

Funcionalidades de busca e filtragem:

\Pesquisa: Um formulário controlado que captura o termo digitado e dispara a função de busca no sistema.

\Filtro: Permite ao usuário selecionar categorias para refinar a lista de filmes exibidos.

\Avaliacao: Um componente visual que traduz a nota numérica do filme em um sistema de estrelas (cheias, meias e vazias).

💡 Tecnologia e Funcionalidades A aplicação utiliza hooks fundamentais do React (useState, useEffect, useLocation) para gerenciar o estado da lista de filmes, os itens favoritos e o estado ativo da navegação.

O resultado é uma experiência de usuário intuitiva e eficiente, onde os usuários podem:
Explorar Filmes: Visualize filmes em cartões ricos em detalhes.
Buscar: Encontrar títulos rapidamente usando o componente Pesquisa.
Filtrar: Refina a exibição por diferentes categorias com o componente Filtro.
Gerenciar Favoritos: Adicionar ou remover filmes de sua lista pessoal diretamente do CardFilme.
      // other options...
    },
  },
])
```
