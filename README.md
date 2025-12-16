# Landing Page - site.set

Landing Page construída com **Next.js**, escrita em **TypeScript** e estilizada com **Tailwind CSS**.

> Observação: este projeto utiliza **pnpm** como gerenciador de pacotes. Se preferir usar `npm`, substitua os comandos `pnpm` por `npm`/`npm run` conforme necessário.

---

## 🚀 Visão geral

- Landing Page com seções: Hero, Features, Support, Customer Stories
- Blog com posts em Markdown (pasta `posts/`) e Contentlayer para geração de conteúdo
- Componentes reutilizáveis (Header, Footer, Avatar, Search, UI)
- Hooks utilitários: `use-share` (compartilhamento social + clipboard) e `use-clipboard`
- Busca client-side no blog (`/blog?q=...`) e renderização de posts com `react-markdown`

---

## ✨ Funcionalidades

- Layout responsivo e moderno
- Otimização de fontes com `next/font`
- Imagens otimizadas com `next/image`
- Suporte a Markdown via Contentlayer
- Componentes e hooks reutilizáveis

---

## 🧰 Tecnologias

- Next.js 15
- TypeScript
- Tailwind CSS
- Contentlayer (Markdown → Content)
- react-markdown + remark-gfm
- lucide-react, class-variance-authority (CVA), clsx, @radix-ui/react-slot
- pnpm (gerenciador de pacotes)

---

## 💻 Requisitos

- Node.js (recomendado: 18+)
- pnpm (recomendado)

---

## ▶️ Como rodar localmente

1. Instale as dependências:

```bash
pnpm install
```

2. Execute em modo de desenvolvimento:

```bash
pnpm dev
```

Comandos úteis:

```bash
pnpm build   # build de produção
pnpm start   # iniciar servidor de produção (após build)
pnpm lint    # rodar lint
```

---

## 📝 Como adicionar um post (Contentlayer)

Crie um arquivo Markdown em `posts/` com frontmatter YAML seguindo este exemplo:

```md
---
title: "Título do post"
description: "Resumo curto"
date: "2024-12-01T10:00:00"
image: "/assets/post-01.png"
author:
  name: "Nome do Autor"
  avatar: "/customer-01.png"
---

Conteúdo em Markdown...
```

O Contentlayer expõe automaticamente o post para uso nas páginas durante `dev` e `build`.

---
