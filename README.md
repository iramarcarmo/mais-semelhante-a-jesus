# Mais Semelhante a Jesus — Astro + GitHub Pages

Site estático da série de 18 estudos bíblicos de Wilson Valentim (edição 2026), extraídos do PDF fornecido pelo responsável pelo projeto.

## Publicação

1. Envie os arquivos **descompactados** deste projeto para a raiz do repositório `iramarcarmo/mais-semelhante-a-jesus` na branch `main`.
2. No GitHub acesse **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. Abra a aba **Actions**, execute o fluxo **Publicar Astro no GitHub Pages** caso não inicie automaticamente.
4. Acesse: https://iramarcarmo.github.io/mais-semelhante-a-jesus/

## Editar o conteúdo

Os estudos estão em `src/content/licoes/`, e as imagens em `public/images/licoes/`. Cada atualização enviada para `main` inicia a publicação automática.

## Testar localmente (opcional)

```bash
npm install
npm run dev
npm run build
```

## Estado editorial

O material de origem foi convertido automaticamente, e os Markdown mantêm `draft: true` como **sinal de revisão pendente**. O site exibe todos os estudos para **conferência prévia**; a marcação `draft` não impede a exibição. Antes de divulgar amplamente, conferir `REVISAO_EDITORIAL.md` e aprovar a redação.

O campo de anotações no site é temporário e não grava dados.
