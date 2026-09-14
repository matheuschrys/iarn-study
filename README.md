# IARN: site local de estudos

Versão organizada e ampliada de `../material-iarn`, baseada nos seis PDFs da pasta do projeto. As aulas 05, 06, 03 e 04 são as fontes principais; 01 e 02 fornecem contexto. Não há backend, login, banco de dados ou dependências externas.

## Abrir

Abra `index.html` no navegador. Todos os recursos funcionam sem internet, inclusive questões, flashcards, simulados e buscas. Mantenha a pasta completa.

Para uma origem local estável, execute a partir desta pasta:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Acesse http://127.0.0.1:8765. Encerre com Ctrl+C. O servidor só entrega os arquivos estáticos; não é um backend da aplicação.

## Recursos

- Teoria dos três eixos, apoio de lógica, revisão de 15 minutos e apostila imprimível.
- 100 questões comentadas; explicações após a tentativa. Discursivas usam autoavaliação.
- 120 flashcards com filtros, embaralhamento, anterior/próximo e revisão espaçada.
- Simulados de 20 questões: todos os temas ou um dos três eixos. Nota, erros, correção e desempenho por tema.
- Painel de questões respondidas, acertos/erros, taxa, cartões dominados/pendentes, simulados, melhor nota e temas mais forte/fraco.
- BFS, DFS, Custo Uniforme, Gulosa e A*: sete cenários, execução automática, pausa, reinício, histórico acessível e inspeção de nós.
- Cálculo interativo de Manhattan/Euclidiana e exercícios aleatórios de admissibilidade e consistência.
- Mapa original da Aula 06 com tentativa manual antes da revelação e execução completa do A*.

## Organização

- `src/app.js`: navegação, teoria, questões, cartões, simulados e progresso.
- `src/busca.js`: motor de buscas reutilizável, independente da interface.
- `src/pratica.js`: laboratórios, revisão espaçada, painel e histórico.
- `assets/estilo.css`: estilos para desktop, celular e impressão.
- `data/dados.json`: base canônica de questões e cartões herdada do material anterior.
- `data/dados.js` e `data/conteudo.js`: conteúdo separado, carregável inclusive por `file://` sem `fetch`.
- `data/questions.json`, `flashcards.json`, `topics.json`, `examples.json`: conteúdo no esquema solicitado. Metadados de dificuldade/subtema são classificação didática, não classificação da professora.
- `docs/`: apostila Markdown, questões, resumo, TSV, auditoria, observações e validação.
- `tests/`: testes sem bibliotecas externas.

## Progresso e revisão

LocalStorage guarda um único objeto `iarn-estudo-v1`: `answers` (questions), `cards` (flashcards), `studied` (progress), `exams` (simulations), `draft` e `lastStudy`. A chave é compatível com a versão anterior quando as duas usam a mesma origem. Para trocar navegador ou origem, exporte e importe o JSON em Fontes e auditoria.

Acertos nos cartões agendam revisões em 1, 3, 7, 14 e 30 dias. Erros reiniciam a sequência e agendam 10 minutos. Ao abrir uma sessão, cartões errados vêm primeiro, seguidos de revisões vencidas, novos e futuras revisões. O filtro Para revisar mostra cartões novos ou vencidos. Todos permite estudar antecipadamente. Dominado significa a última autoavaliação positiva, não uma garantia de memorização.

Se o armazenamento falhar, o site avisa e funciona na sessão. O progresso depende do navegador; mantenha uma exportação quando necessário.

## Validação e manutenção

```bash
node --check src/app.js
node --check src/busca.js
node --check src/pratica.js
node tests/validar.cjs
node tests/validar_fluxos.cjs
node tests/pratica.cjs
```

Não há gerenciador de pacotes, instalação ou build obrigatório. Depois de editar a base JSON, sincronize `dados.js` e regenere os esquemas com `node data/organizar.mjs` (o script também regenera `dados.js`). Preserve fontes e rótulos de complemento explicativo. A apostila imprimível é uma cópia independente do material original; alterações na teoria precisam ser refletidas nela e em `conteudo.js`.

Veja `docs/observacoes.md` para as ressalvas pedagógicas e `docs/VALIDACAO.md` para o escopo real dos testes.
