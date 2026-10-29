import { photos } from "../assets/photos";

/**
 * Dados de exibição da vitrine.
 *
 * Este é um site de demonstração: telefone, WhatsApp, e-mail, endereço e redes
 * sociais são fictícios. Os preços e modelos também são exemplos. Nenhum dado
 * aqui deve ser usado para contato real com a loja.
 */
export const store = {
  name: "Casa das Portas",
  city: "Junqueirópolis",
  state: "SP",
  address: {
    street: "Rua das Acácias",
    number: "120",
    neighborhood: "Centro",
    city: "Junqueirópolis",
    state: "SP",
    cep: "17890-000",
    full: "Rua das Acácias, 120, Centro, Junqueirópolis-SP, CEP 17890-000",
  },
  phoneDisplay: "(18) 0000-0000",
  phoneDigits: "1800000000",
  whatsappDigits: "18000000000",
  email: "contato@exemplo.com.br",
  instagram: "exemplo.demo",
  hours: [
    { days: "Segunda a sexta", time: "8h às 18h" },
    { days: "Sábado", time: "8h às 12h" },
    { days: "Domingo", time: "Fechado" },
  ],
  /** Mapa aberto da cidade, sem expor um endereço real. */
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-51.4550%2C-21.5300%2C-51.4100%2C-21.4950&layer=mapnik&marker=-21.5145%2C-51.4336",
  mapsLink: "https://www.openstreetmap.org/?mlat=-21.5145&mlon=-51.4336#map=14/-21.5145/-51.4336",
} as const;

export { photos };
