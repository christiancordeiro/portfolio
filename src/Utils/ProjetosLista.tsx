import Project1 from "../assets/img//projects/Ohstudio.png"
import Project2 from "../assets/img//projects/Previa-album.png"
import Project3 from "../assets/img//projects/Shopi.png"
import Project4 from "../assets/img//projects/Mario-game.png"

type Projetos = {
  nome: string
  descricao: string
  img: React.ComponentProps<"img">["src"]
  projetoSrc: string
}

export const listProjectPortfolio: Projetos[] = [
  {
    nome: "Oh.studio",
    descricao:
      "Um site de design moderno e interativo que apresenta o portfólio e serviços do estúdio. A página inicial apresenta uma animação dinâmica que revela o conteúdo ao scrollar. O layout de flex-box responsivo e efeitos de hover interativos criam uma experiência do usuário imersiva. Tecnologias utilizadas: HTML, CSS, JavaScript e API Intersection Observer.",
    img: Project1,
    projetoSrc: "https://github.com/christiancordeiro/Oh-studio-Design-Studio",
  },
  {
    nome: "Prévia Álbum",
    descricao:
      "Uma prévia de álbum do artista que permite aos fãs ouvir trechos de músicas antes do lançamento. Desenvolvido com React, Tailwind CSS e API do Spotify, o site apresenta uma interface clean e minimalista.",
    img: Project2,
    projetoSrc: "https://github.com/christiancordeiro/prev-album",
  },
  {
    nome: "Shopi",
    descricao:
      "Uma plataforma de e-commerce completa e escalável, desenvolvida com as tecnologias mais recentes, que oferece uma experiência de compra única e personalizada aos clientes. Construída com React, Tailwind CSS, Redux, Swiper e Material UI.",
    img: Project3,
    projetoSrc: "https://github.com/christiancordeiro/shopi/",
  },
  {
    nome: "Mario World",
    descricao:
      "Um jogo desafiante que testa as habilidades de percepção e linguagem dos jogadores. O jogo é construído com marcação HTML5 semântica, Javascript e CSS. o jogo utiliza a API do próprio navegador para ativar o microfone do jogador e detectar sua resposta.",
    img: Project4,
    projetoSrc: "https://github.com/christiancordeiro/mario-world-game",
  },
]
