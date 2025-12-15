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
pnpm (usado no projeto):

pnpm install
pnpm dev   # ambiente de desenvolvimento
pnpm build # build de produção
pnpm start # iniciar servidor de produção (após build)
pnpm lint  # rodar lint

```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev

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
- Next.js 15
- TypeScript
- Tailwind CSS
- Contentlayer (Markdown -> Content)
- react-markdown + remark-gfm
- lucide-react, class-variance-authority (CVA), clsx, @radix-ui/react-slot
- pnpm (package manager)

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