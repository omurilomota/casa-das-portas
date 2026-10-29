const image = (name: string) => `${import.meta.env.BASE_URL}images/${name}.jpg`;

// Fotos geradas para a loja ficam em public/images. As fotos abaixo, de exemplo adicional
// para a vitrine de demonstração, vêm de um banco de imagens (Pexels) e carregam direto
// da internet, então precisam de conexão ativa para aparecer.
export const photos = {
  esquadria: image('esquadria'),
  fachada: image('fachada'),
  ferragem: image('ferragem'),
  hero: image('hero'),
  historia: image('historia'),
  janela: image('janela'),
  madeira: image('madeira'),
  porta: image('porta'),
  tinta: image('tinta'),
  vidro: image('vidro'),
  portaEntrada: 'https://images.pexels.com/photos/36843641/pexels-photo-36843641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
  portaCorrer: 'https://images.pexels.com/photos/38944471/pexels-photo-38944471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
  portaDupla: 'https://images.pexels.com/photos/19643832/pexels-photo-19643832.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
  janelaAbrir: 'https://images.pexels.com/photos/2910238/pexels-photo-2910238.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
  marcenaria: 'https://images.pexels.com/photos/5974022/pexels-photo-5974022.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  madeiraExemplo: 'https://images.pexels.com/photos/12278586/pexels-photo-12278586.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  ferragemExemplo: 'https://images.pexels.com/photos/7285919/pexels-photo-7285919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
};