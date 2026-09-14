# Auditoria das fontes

Foram lidos os seis PDFs indicados, totalizando 202 páginas (23 + 36 + 44 + 39 + 37 + 23). O texto das seis aulas foi extraído. Fórmulas e diagramas relevantes foram conferidos visualmente. Os seis PDFs originais ficam no diretório pai de iarn-study. A base textual foi reaproveitada de material-iarn e revisada nesta execução. Nenhuma fonte foi alterada.

| Assunto | Aula principal | Conteúdo relacionado |
|---|---|---|
| Formulação, estados e fronteira | 05, p. 2–17 | Agentes orientados a objetivos: 02, p. 30 |
| BFS, DFS e complexidade | 05, p. 18–30 | Código em imagens, p. 21 e 26 |
| Outras buscas e reconstrução | 05, p. 31–36 | g(n) conecta custo uniforme ao A* |
| Atividade de rotas | 05, p. 37 | Grafo diferente do exemplo p. 20 |
| Heurística, Manhattan e Euclidiana | 06, p. 2–8 | Estrutura de problemas da Aula 05 |
| Gulosa | 06, p. 9–12 | Tabela p. 9 e grafo p. 11 são exemplos distintos |
| A*, aberta, fechada, garantias | 06, p. 13–21 | Grafo p. 16 igual ao p. 11 |
| Robô no mapa | 06, p. 22–23 | Grade 5×5, quatro movimentos de custo 1 |
| Conhecimento, base, tipos | 03, p. 2–16 | Aula 04, proposições e predicados |
| Regras e encadeamentos | 03, p. 17–20 | Memória de trabalho e motor: imagem p. 18 |
| Redes, frames, ontologias, grafos | 03, p. 21–36 | Exemplos Rex, computador, loja, filmes |
| Simbólica e neural | 03, p. 37–42 | Contexto 01, p. 16 e 18 |
| Atividades de conhecimento | 03, p. 43–44 | Aprovação; construir base usando duas técnicas |
| Lógica como apoio | 04, p. 6–17, 23–24, 29–39 | Formalização de fatos e regras |

## Inventário de aulas

- **01:** definição, história, aplicações, IA/ML/DL, aprendizagem, limitações e ética. Atividade: analisar aplicação em grupos. Uso restrito ao contexto de raciocínio e aprendizagem; história não vira eixo do estudo.
- **02:** perceber/processar/decidir/agir; sensores/atuadores; racionalidade; PEAS; ambientes; tipos de agentes e tabelas comparativas. Atividade: projetar agente. Uso para explicar por que um agente formula objetivos e planeja ações.
- **03:** dado/informação/conhecimento/inferência; João e idade; Carlos e média; fatos, regras, relações, conceitos, propriedades; declarativo/procedural; seis técnicas. Forward A→B→C→D; backward hipótese/sintomas; Rex e herança; frame Aluno e COMPUTADOR_01; ontologia acadêmica e e-commerce; triplas e recomendação de filmes. Tabela p. 36 e simbólica/neural p. 39. Embeddings, IA generativa e neuro-simbólica são secundários. Atividades p. 43–44.
- **04:** proposições, conectivos e tabelas-verdade; precedência; tautologia, contradição e satisfatibilidade; equivalências; regras e predicados; constantes/variáveis; ∀/∃ e negações; traduções. Atividades p. 8, 18, 22, 25, 27 e 38. O material usa somente o apoio necessário ao foco pedido.
- **05:** P=(S,s0,A,T,G,C); custo como soma; estado≠nó; fronteira; árvore/grafo; ciclos; BFS/FIFO; DFS/LIFO; código Python; comparação; b,d,m; 3^5=243 e total 364; custo uniforme; limitada; iterativa; bidirecional; pais; completude/otimalidade/tempo/espaço; atividade de rotas.
- **06:** comparação não informada/informada; h; heurísticas por domínio; Manhattan e Euclidiana; Gulosa e O(b^m); A* e f=g+h; aberta/fechada; admissibilidade e consistência; h=0; O(b^d); aplicações; atividade do robô.

## Convenções e ressalvas pedagógicas

1. Aula 05 p. 25 tem título “Exemplo de busca em largura”, mas pertence à sequência de DFS e mostra visita em profundidade. O material identifica como DFS e registra esta observação.
2. Aula 05 p. 29 imprime tempo e espaço da DFS como O(b^m). A apostila transcreve a tabela e apresenta O(b·m) para memória da DFS em árvore como COMPLEMENTO EXPLICATIVO. Não troca silenciosamente o conteúdo da professora.
3. Aula 06 p. 9: A→B=4, A→C=2, B→D=5, C→D=3, D→G=4; h(B)=5,h(C)=7,h(D)=2. Páginas 11/16: A–B=2,A–C=4,B–D=5,B–E=2,C–E=1,C–F=5,D–G=3,E–G=6,F–G=4; h(A,B,C,D,E,F,G)=(7,6,5,2,4,4,0). Não são o mesmo exemplo.
4. Arestas sem setas no grafo da Aula 06 são tratadas como bidirecionais. Empates usam ordem de descoberta. O objetivo é testado ao remover da fronteira. “Selecionados” inclui o objetivo; “expandidos/fechada” inclui apenas nós cujos sucessores foram processados.
5. Condições técnicas adicionais (custos positivos limitados inferiormente, h(objetivo)=0, reabertura e memória com visitados) são identificadas como COMPLEMENTO EXPLICATIVO.
6. Questões, flashcards, variações, tabelas de execução e textos explicativos são elaboração didática deste material, com origem conceitual indicada. Não são apresentados como questões reais da professora.
7. Exemplos clínicos são apenas exemplos de regras dos slides, sem finalidade de orientação clínica. A atividade de aprovação fornece regra suficiente; ausência de prova de aprovação não implica, por lógica apenas, prova de reprovação.
