# Relatório de conferência editorial

Esta é uma **conversão estrutural de fonte**, não uma revisão doutrinária ou ortográfica.
Não houve atualização, complementação ou correção dos conteúdos assinados por Wilson Valentim.

## Conferências prioritárias

1. **Lição 01 — PDF p. 6:** o quadro “Diferença entre os ensinos dos rabis e de Jesus” aparece linearizado na camada textual do PDF. Verificar e reconstruir como tabela de duas colunas antes da publicação.
2. **Lição 01 — PDF p. 7:** a referência `João 15:14-` parece incompleta na própria fonte. Foi preservada sem complementação.
3. **Lição 09 — PDF p. 41–42:** a subseção “A mudança do sábado para o domingo” precisa de revisão de segmentação de parágrafos; o conteúdo foi preservado.
4. **Lição 13 — PDF p. 55–56:** tabelas de orçamento familiar, receitas, custos e gastos foram achatadas na camada de texto. Mantidos seus rótulos e dados extraíveis; recomenda-se reconstrução manual das células a partir das páginas do PDF.
5. **Devocional 01 — PDF p. 80:** alguns caracteres de aspas no versículo aparecem como `?` na camada textual, indicando problema de codificação na fonte. Verificar e corrigir usando a diagramação original.
6. **Páginas de abertura das lições:** foram renderizadas em imagem WebP, preservando o layout gráfico. O texto dos títulos também está em Markdown para acessibilidade.
7. **Barras laterais padronizadas** (“Para refletir”, “Aprofundamento”, “Minha decisão”, “Anotações”) foram removidas da transcrição do corpo para não se repetirem em todas as páginas. As três orientações textuais estão registradas como `guiding_prompts` em cada front matter.
8. **Paginação:** os campos `source_text_pages` e o arquivo de auditoria permitem localizar o texto no PDF, sem interromper frases na passagem de uma página para outra.
9. **Nome do PDF:** inclui `Correcoes_Parciais_08_a_12`, mas o arquivo contém 18 lições, encerramento e um devocional. O pacote reflete o conteúdo real deste arquivo, sem inferir quais alterações já foram aprovadas.
10. **Publicação:** todos os arquivos de conteúdo trazem `draft: true` e `review_status: pendente_de_conferencia` para evitar publicar conteúdo ainda não auditado.

## Limitações da conversão automática

- Marcadores, quadros e tabelas de apresentação complexa podem perder o alinhamento visual.
- Quebras de página e de parágrafo da camada textual podem exigir ajuste estilístico na revisão.
- Não foi feita checagem externa de referências bíblicas, citações, atribuições ou exatidão de interpretação.
- Elementos tipográficos decorativos (fundos, caixas, linhas para anotação) são preservados nas imagens de capa ou no PDF original; o Markdown prioriza o conteúdo semântico.
- O devocional da p. 80 inclui uma arte gráfica com texto interno; a imagem integral dessa página foi preservada.
