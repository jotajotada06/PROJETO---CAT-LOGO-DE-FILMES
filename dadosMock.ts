import { Filme } from '../tipos/Filme';

export const filmesExemplo: Filme[] = [
  {
    id: 1,
    titulo: "Interestelar",
    capa: "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    ano: 2014,
    nota: 4.8,
    sinopse: "Um grupo de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade. Uma jornada épica que desafia os limites do tempo e do amor.",
    categorias: ["Ficção Científica", "Drama", "Aventura"],
    duracao: "2h 49m",
    diretor: "Christopher Nolan",
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    ehLancamento: false,
    faixaEtaria: "12 anos"
  },
  {
    id: 2,
    titulo: "O Espetacular Homem-Aranha",
    capa: "https://img.elo7.com.br/product/zoom/2677C5D/big-poster-filme-o-espetacular-homem-aranha-2012-lo02-90x60-marvel.jpg",
    ano: 2012,
    nota: 4.2,
    sinopse: "Peter Parker tenta descobrir a verdade sobre o sumiço de seus pais enquanto enfrenta o perigoso Lagarto, alter-ego de seu antigo mentor Dr. Curt Connors.",
    categorias: ["Ação", "Aventura", "Super-herói"],
    duracao: "2h 16m",
    diretor: "Marc Webb",
    elenco: ["Andrew Garfield", "Emma Stone", "Rhys Ifans", "Denis Leary"],
    ehLancamento: false,
    faixaEtaria: "12 anos"
  },
  {
  id: 3,
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  capa: "https://www.europanet.com.br/image_gen/resizeimg.php?cod_produto=107516",
  ano: 2004,
  nota: 4.7,
  sinopse: "Harry descobre a verdade sobre seu passado e enfrenta um perigoso prisioneiro fugitivo.",
  categorias: ["Fantasia", "Aventura", "Mistério"],
  duracao: "2h 22m",
  diretor: "Alfonso Cuarón",
  elenco: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
  ehLancamento: false,
  faixaEtaria: "12 anos"
  },
  {
  id: 4,
  titulo: "Falcão - Os Campeões dos Campeões",
  capa: "https://br.web.img3.acsta.net/pictures/14/07/18/17/50/487553.jpg",
  ano: 2016,
  nota: 4.3,
  sinopse: "A emocionante história do Falcão e sua jornada para se tornar um verdadeiro herói, enfrentando desafios e provando que os verdadeiros campeões vão além dos superpoderes.",
  categorias: ["Ação", "Aventura", "Drama"],
  duracao: "1h 48m",
  diretor: "Anthony Mackie",
  elenco: ["Anthony Mackie", "Sebastian Stan", "Daniel Brühl", "Emily VanCamp"],
  ehLancamento: false,
  faixaEtaria: "12 anos"

},
{
  id: 5,
  titulo: "Karate Kid",
  capa: "https://upload.wikimedia.org/wikipedia/pt/0/00/The_Karate_Kid_2010.jpg",
  ano: 2010,
  nota: 4.4,
  sinopse: "Um jovem se muda para a China com sua mãe e acaba aprendendo artes marciais com um mestre para se defender de valentões e participar de um importante torneio de kung fu.",
  categorias: ["Ação", "Drama", "Artes Marciais", "Aventura"],
  duracao: "2h 20m",
  diretor: "Harald Zwart",
  elenco: ["Jaden Smith", "Jackie Chan", "Taraji P. Henson", "Wenwen Han"],
  ehLancamento: false,
  faixaEtaria: "10 anos"
},
 {
    id: 6,
    titulo: "Toy Story",
    capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/05/36/20127436.jpg",
    ano: 1995,
    nota: 4.5,
    sinopse: "Brinquedos que ganham vida quando seus donos não estão olhando.",
    categorias: ["Animação", "Comédia", "Família"],
    duracao: "1h 21m",
    diretor: "John Lasseter",
    elenco: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    ehLancamento: false,
    faixaEtaria: "Livre"
  },
 {
    id: 7,
    titulo: "Batman - O Cavaleiro das Trevas",
    capa: "https://br.web.img3.acsta.net/medias/nmedia/18/86/98/32/19870786.jpg",
    ano: 2008,
    nota: 4.9,
    sinopse: "Batman enfrenta o Coringa, um criminoso psicótico que ameaça mergulhar Gotham City na anarquia.",
    categorias: ["Ação", "Drama", "Crime"],
    duracao: "2h 32m",
    diretor: "Christopher Nolan",
    elenco: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    ehLancamento: false,
    faixaEtaria: "14 anos"
  },  
 {
    id: 8,
    titulo: "Coringa",
    capa: "https://m.media-amazon.com/images/S/pv-target-images/631cd803506fa603bcd69812b9ba6bbd8fa769d79f59fa78b69825d3c5b448c1.jpg",
    ano: 2019,
    nota: 4.4,
    sinopse: "Um comediante fracassado envereda pelo crime e pelo caos em Gotham City.",
    categorias: ["Drama", "Crime", "Suspense"],
    duracao: "2h 2m",
    diretor: "Todd Phillips",
    elenco: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    ehLancamento: false,
    faixaEtaria: "16 anos"
  },  

];

export const categorias = [
  "Todos", "Ação", "Comédia", "Drama", "Ficção Científica", 
  "Terror", "Romance", "Animação", "Crime", "Aventura"
];