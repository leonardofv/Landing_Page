# Landing Page - Site.Set

Este é um projeto de Landing Page desenvolvido com [Next.js](https://nextjs.org) e [Tailwind CSS](https://tailwindcss.com).

## Funcionalidades

- Layout responsivo e moderno
- Otimização de fontes com [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- Imagens otimizadas com `next/image`


## Como rodar localmente

1. Instale as dependências:

```bash
npm install
# ou
yarn
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
# site.set — Landing Page e Blog

**site.set** é uma Landing Page com blog construída com **Next.js**, escrita em **TypeScript** e estilizada com **Tailwind CSS**.

---

## 🚀 Visão geral
- Landing Page com seções (Hero, Features, Support, Customer Stories) ✅
- Blog com posts em Markdown (pasta `posts/`) e Contentlayer para geração de conteúdo ✅
- Componentes reutilizáveis (Header, Footer, Avatar, Search, UI) ✅
- Hooks utilitários: `use-share` (compartilhamento social + clipboard) e `use-clipboard` ✅
- Busca client-side no blog (`/blog?q=...`) e renderização de posts com `react-markdown` ✅

---

## 🧰 Tecnologias
- Next.js 15 (App Router + Pages)
- TypeScript
- Tailwind CSS (+ `tailwindcss-animate`)
- Contentlayer (Markdown -> Content)
- react-markdown + remark-gfm
- lucide-react, class-variance-authority (CVA), clsx, @radix-ui/react-slot
- pnpm (package manager)

---

## 📁 Estrutura relevante
- `src/app/` — rotas e páginas (App Router)
- `src/templates/landing-page/` — estrutura e seções da landing
- `src/templates/blog/` — listagem e post
- `src/components/` — componentes reutilizáveis (ui, avatar, search)
- `src/hooks/` — hooks (use-share, use-clipboard)
- `posts/` — posts em Markdown (frontmatter lido por Contentlayer)
- `contentlayer.config.ts` — definição de documentos (Post)

---

## ⚙️ Scripts
Use pnpm (recomendado):

```bash
pnpm install
pnpm dev   # ambiente de desenvolvimento
pnpm build # build de produção
pnpm start # iniciar servidor de produção (após build)
pnpm lint  # rodar lint
```

> Se preferir `npm` ou `yarn`, substitua `pnpm` pelos comandos equivalentes.

---

## 📝 Como adicionar um post (Contentlayer)
1. Crie um arquivo Markdown em `posts/` com frontmatter YAML:

```md
---
title: "Título do post"
description: "Resumo curto"
date: 2024/12/01 10:00:00
image: /assets/post-01.png
author:
	name: "Nome do Autor"
	avatar: /customer-01.png
---

Conteúdo em Markdown...
```

2. O Contentlayer expõe automaticamente o post para uso nas páginas (durante `dev` e `build`).

---

## 🛠️ Observações para desenvolvimento
- Componente `Search` utiliza query string `q` para filtrar posts no cliente.
- `Markdown` utiliza `react-markdown` + `remark-gfm` para suporte a tabelas, task lists e links.
- Componentes UI usam `class-variance-authority` (CVA) para gerenciar variantes.

---

## ☁️ Deploy sugerido
Recomendado: **Vercel** (deploy automático para projetos Next.js). Alternativas: Docker, Netlify, outros hosts que suportem Next.js.

---

## ✅ Sugestões / Próximos passos
- Adicionar `CONTRIBUTING.md` e `CODE_OF_CONDUCT.md` para colaboração pública
- Incluir testes (Vitest/Jest) e pipeline CI (GitHub Actions)
- Considerar otimizações de acessibilidade e SEO detalhadas

---

## 📄 Licença
Nenhuma licença especificada. Recomendo adicionar `MIT` ou outra licença apropriada se o repo for público.

---

Se quiser, posso abrir um branch, commitar essa mudança e criar um Pull Request no GitHub para você revisar.
