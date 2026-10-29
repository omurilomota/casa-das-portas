import { photos } from '../assets/photos';

export type ShowcaseCategory = 'Portas' | 'Janelas' | 'Esquadrias' | 'Ferragens' | 'Outros';

export type ShowcaseProduct = {
  id: string;
  name: string;
  category: ShowcaseCategory;
  summary: string;
  description: string;
  examplePrice: number;
  images: { src: string; alt: string }[];
};

export const categories: ('Todos' | ShowcaseCategory)[] = [
  'Todos', 'Portas', 'Janelas', 'Esquadrias', 'Ferragens', 'Outros',
];

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: 'porta-madeira',
    name: 'Porta de madeira',
    category: 'Portas',
    summary: 'Para ambientes internos',
    description: 'Uma referência de porta em madeira para quartos, salas ou outros ambientes. Consulte modelos, medidas e acabamentos disponíveis.',
    examplePrice: 349.90,
    images: [
      { src: photos.porta, alt: 'Exemplo ilustrativo de porta de madeira com painéis' },
      { src: photos.portaDupla, alt: 'Outra referência de porta de madeira' },
    ],
  },
  {
    id: 'porta-entrada',
    name: 'Porta de entrada',
    category: 'Portas',
    summary: 'Madeira e diferentes acabamentos',
    description: 'Uma ideia para a entrada da casa. A escolha de madeira, abertura e acabamento depende das opções disponíveis na loja.',
    examplePrice: 789,
    images: [
      { src: photos.portaEntrada, alt: 'Referência de porta de entrada em madeira' },
      { src: photos.portaDupla, alt: 'Outro exemplo de porta de madeira' },
    ],
  },
  {
    id: 'porta-correr',
    name: 'Porta de correr',
    category: 'Portas',
    summary: 'Uma opção para dividir ambientes',
    description: 'Uma referência para quem está procurando uma porta de correr. Confirme modelo, ferragens e medidas antes do orçamento.',
    examplePrice: 589,
    images: [
      { src: photos.portaCorrer, alt: 'Referência de portas de correr em um ambiente' },
      { src: photos.hero, alt: 'Outras referências de portas de madeira' },
    ],
  },
  {
    id: 'janela-veneziana',
    name: 'Janela veneziana',
    category: 'Janelas',
    summary: 'Referência em madeira',
    description: 'Uma opção de referência para janelas de madeira. A loja poderá orientar sobre os modelos e as medidas disponíveis.',
    examplePrice: 649,
    images: [
      { src: photos.janela, alt: 'Imagem ilustrativa de janela veneziana em madeira' },
      { src: photos.janelaAbrir, alt: 'Outra referência de janela com veneziana' },
    ],
  },
  {
    id: 'janela-abrir',
    name: 'Janela de abrir',
    category: 'Janelas',
    summary: 'Modelo com veneziana',
    description: 'Um exemplo de janela de abrir para inspirar seu projeto. Material, cor e abertura devem ser confirmados com a loja.',
    examplePrice: 479,
    images: [
      { src: photos.janelaAbrir, alt: 'Referência de janela branca com veneziana' },
      { src: photos.janela, alt: 'Outra referência de janela de madeira' },
    ],
  },
  {
    id: 'esquadrias',
    name: 'Esquadrias de madeira',
    category: 'Esquadrias',
    summary: 'Para portas e janelas',
    description: 'Referências de esquadrias de madeira para portas e janelas. Para orçar, informe as medidas do vão.',
    examplePrice: 429,
    images: [
      { src: photos.esquadria, alt: 'Imagem ilustrativa de esquadrias de madeira' },
      { src: photos.janela, alt: 'Referência de janela com esquadria de madeira' },
    ],
  },
  {
    id: 'fechaduras',
    name: 'Fechaduras e ferragens',
    category: 'Ferragens',
    summary: 'Puxadores, dobradiças e mais',
    description: 'Peças para complementar portas e janelas. Consulte os modelos e acabamentos que a loja trabalha.',
    examplePrice: 89.90,
    images: [
      { src: photos.ferragem, alt: 'Imagem ilustrativa de fechaduras e ferragens' },
      { src: photos.ferragemExemplo, alt: 'Referência de maçaneta e fechadura' },
    ],
  },
  {
    id: 'madeiras',
    name: 'Madeiras',
    category: 'Outros',
    summary: 'Para sua obra ou acabamento',
    description: 'Referência de madeiras para construção e acabamento. Tipos, medidas e preços devem ser consultados no balcão.',
    examplePrice: 79.90,
    images: [
      { src: photos.madeira, alt: 'Imagem ilustrativa de madeiras empilhadas' },
      { src: photos.madeiraExemplo, alt: 'Outra referência de tábuas de madeira' },
    ],
  },
  {
    id: 'tintas',
    name: 'Tintas e acabamentos',
    category: 'Outros',
    summary: 'Para completar a reforma',
    description: 'Uma referência de materiais para acabamento. Confirme com a loja os tipos e as marcas disponíveis.',
    examplePrice: 98.90,
    images: [
      { src: photos.tinta, alt: 'Imagem ilustrativa de latas de tinta e pincéis' },
    ],
  },
  {
    id: 'vidros',
    name: 'Vidros',
    category: 'Outros',
    summary: 'Consulte medidas e opções',
    description: 'Uma referência para quem procura vidros. Confirme com a loja as opções, medidas e disponibilidade.',
    examplePrice: 129.90,
    images: [
      { src: photos.vidro, alt: 'Imagem ilustrativa de vidros' },
    ],
  },
];

export const formatExamplePrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);