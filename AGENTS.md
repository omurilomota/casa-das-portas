# AGENTS.md — Casa das Portas

## Contexto

Site de demonstração de uma loja de materiais de construção. Não há backend, banco de dados, autenticação ou envio real de mensagens. É uma peça de portfólio: todo contato é fictício e todo link externo de contato é interceptado.

## Stack

- React 19 + TypeScript estrito
- Vite 7 + `vite-plugin-singlefile` (build em HTML único)
- Tailwind CSS 4 via `@tailwindcss/vite`
- Lucide React para ícones
- Vitest para testes unitários
- Sem roteador: navegação por âncoras em uma única página

## Comandos

```bash
npm ci
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
```

Sempre rode `npm run typecheck`, `npm test` e `npm run build` antes de concluir uma alteração.

## Arquitetura

| Caminho | Responsabilidade |
| --- | --- |
| `src/App.tsx` | Monta a página e o `DemoNotice` |
| `src/pages/Loja.tsx` | Header, hero, catálogo, orçamento, história, visita e footer |
| `src/data/store.ts` | Fonte única dos dados fictícios da loja |
| `src/data/showcase.ts` | Catálogo e preços de exemplo |
| `src/assets/photos.ts` | Caminhos das imagens locais e externas |
| `src/lib/format.ts` | Formatação de telefone e geração de links |
| `src/components/DemoNotice.tsx` | Aviso global, diálogo e bloqueio de contatos |
| `src/index.css` | Tokens, layout, breakpoints e estilos de impressão |

## Regras de dados

1. Nunca insira telefone, WhatsApp, e-mail, endereço ou CNPJ reais de cliente neste repositório público.
2. Toda alteração de contato passa por `src/data/store.ts`.
3. Não remova o `DemoNotice`: ele impede que links fictícios abram WhatsApp, telefone, e-mail ou Instagram.
4. Preços do catálogo são exemplos. Mantenha a sinalização “preço de exemplo” e “fotos ilustrativas”.

## Convenções de código

- TypeScript estrito; sem `any` gratuito.
- Componentes de página em PascalCase, funções utilitárias em camelCase.
- Não adicione dependência sem justificar: o build é intencionalmente enxuto.
- Preserve a identidade visual: verde escuro `#273329`, creme `#f6f1e8`, terracota `#c58a6b`, tipografia Bitter + Work Sans.
- Não use `!important` fora de regras de impressão.
- Imagens devem ter `alt` descritivo e `loading="lazy"` quando abaixo da dobra.

## Acessibilidade

- Um único `h1` por página.
- Menu mobile com `aria-expanded` e alvo de toque mínimo de 44px.
- Diálogo de demonstração com `role="dialog"`, `aria-modal` e fechamento por Escape.
- Contraste mínimo AA nos textos sobre imagem.

## Git

Gitflow + Gitmoji:

- `main`: produção, tag `vX.Y.Z`.
- `develop`: integração.
- `feature/*`: funcionalidades.
- `hotfix/*`: correções urgentes.

Formato de commit: `<emoji> <tipo>: <descrição no imperativo>`.

## Deploy

Vercel, framework Vite, build `npm run build`, output `dist`. Não há variáveis de ambiente obrigatórias.
