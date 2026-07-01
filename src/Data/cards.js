import ssd from "../assets/cards/ssd.png";
import mouse from "../assets/cards/mouseGamer.png";
import placa from "../assets/cards/placaDeVideo.png";
import monitor from "../assets/cards/monitorGamer.png";
import kitPc from "../assets/cards/kitPcGamer.png";

const cards = [
  {
    id: 1,
    titulo: "Visto recentemente",
    tipo: "unico",

    produtos: [
      {
        id: 1,
        nome: "SSD Kingston A400, 240GB SATA III",
        imagem: ssd,
        preco: "R$ 99,99",
        desconto: "",
        link: "#"
      }
    ]
  },

  {
    id: 2,
    titulo: "Esquenta julho gamer",
    tipo: "duplo",

    produtos: [
      {
        id: 1,
        nome: "Placa de Vídeo MSI GeForce RTX",
        imagem: placa,
        preco: "R$ 4.759,99",
        desconto: "-20%",
        link: "#"
      },

      {
        id: 2,
        nome: "Mouse Gamer RGB Logitech",
        imagem: mouse,
        preco: "R$ 99,99",
        desconto: "-37%",
        link: "#"
      }
    ]
  },

    {
        id: 3,
        titulo: "Escalação de ofertas",
        tipo: "grade",

        produtos: [
            {
            id: 1,
            imagem: mouse,
            desconto: "-62%",
            link: "#"
            },
            {
            id: 2,
            imagem: placa,
            desconto: "-33%",
            link: "#"
            },
            {
            id: 3,
            imagem: monitor,
            desconto: "-41%",
            link: "#"
            },
            {
            id: 4,
            imagem: ssd,
            desconto: "-18%",
            link: "#"
            }
        ]
    },

  {
    id: 4,
    titulo: "Mais vendidos em SSD",
    tipo: "unico",

    produtos: [
      {
        id: 1,
        nome: "SSD Kingston NV3, 1TB PCIe 4.0",
        imagem: ssd,
        preco: "R$ 999,99",
        desconto: "",
        link: "#"
      }
    ]
  },

  {
    id: 5,
    titulo: "Seleção PC Gamer Husky",
    tipo: "duplo",

    produtos: [
      {
        id: 1,
        nome: "Kit PC Gamer Start II Husky",
        imagem: kitPc,
        preco: "R$ 2.899,99",
        desconto: "",
        link: "#"
      },

      {
        id: 2,
        nome: "Kit PC Gamer Start III Husky",
        imagem: kitPc,
        preco: "R$ 3.499,99",
        desconto: "",
        link: "#"
      }
    ]
  }
];

export default cards;