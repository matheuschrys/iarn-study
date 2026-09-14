# Revisão de 15 minutos

## Minutos 0–3 · Escolha na fronteira

| Algoritmo | Critério |
|---|---|
| BFS | Menor profundidade; FIFO |
| DFS | Aprofunda ramo; LIFO |
| Custo Uniforme | Menor g |
| Gulosa | Menor h |
| A* | Menor f=g+h |

Estado é configuração; nó guarda estado e informações do caminho. Fronteira = descobertos pendentes; explorados = já expandidos. Ordem de visita não é caminho. Reconstrua pelos pais. Profundidade conta arestas; custo soma pesos. BFS é ótima com custos iguais; DFS não garante ótimo e pode seguir ramo infinito. Busca em grafo controla repetições. Limitada para em L; iterativa usa L=0,1,2…; bidirecional busca dos dois lados.

## Minutos 3–7 · Heurística e A*

**g:** gasto real; **h:** restante estimado; **f:** total estimado. g=3,h=5→f=8. Custo Uniforme usa g; Gulosa usa h; A* combina os dois.

**Manhattan:** |xn−xo|+|yn−yo|. De (2,3) a (7,6): 5+3=8. **Euclidiana:** √((xn−xo)²+(yn−yo)²)=√34≈5,83. Na grade de quatro direções e custo 1, use Manhattan.

**Admissível:** h≤h*, nunca superestima. **Consistente:** h(n)≤c(n,n′)+h(n′), para toda aresta. Consistente implica admissível na convenção usual h(objetivo)=0. Não confunda verificar uma aresta com provar consistência no grafo todo.

Aberta: descobertos pendentes, menor f primeiro. Fechada: expandidos. Atualize caminhos melhores. **COMPLEMENTO EXPLICATIVO:** admissibilidade sustenta a garantia usual em árvore; em grafo, use consistência ou reabertura apropriada, além das condições de custos e término. h=0 torna A* Custo Uniforme. Superestimar pode retirar garantia de ótimo.

No mapa da professora, de (0,0) a (4,4), custo ótimo=8: direita, direita, baixo, baixo, direita, direita, baixo, baixo. Nove posições não são nove movimentos. No grafo da Aula 06, Gulosa pode dar 11; A* dá 10.

Complexidades apresentadas: BFS O(b^d); DFS tempo O(b^m); Gulosa O(b^m); A* O(b^d). b=ramificação, d=profundidade da solução, m=profundidade máxima. **COMPLEMENTO EXPLICATIVO:** a tabela da Aula 05 imprime espaço DFS O(b^m); a análise usual de DFS em árvore usa O(b·m), com ressalvas para armazenamento de visitados.

## Minutos 7–12 · Conhecimento e inferência

**Dado:** valor isolado. **Informação:** valor contextualizado. **Conhecimento:** regras/relações para interpretar. **Inferência:** conclusão obtida aplicando esse conhecimento. Carlos tem nota 4,5 e nota<6 implica abaixo da média; logo Carlos está abaixo da média.

Base: fatos, regras, relações, conceitos, propriedades. Declarativo: o que sei. Procedural: como fazer. **Fatos + regras + motor de inferência**, usando memória de trabalho, permitem novas conclusões.

**Forward:** fatos→conclusões (A→B→C→D). **Backward:** meta→condições→fatos (provar D exige C, depois B, depois A). Não inverta A→B para B→A.

**Redes semânticas:** nós e relações, hierarquia e herança; Rex é cachorro, cachorro é animal, logo Rex é animal. **Frames:** fichas de atributos; computador liga, não mostra imagem; regra sugere RAM ou vídeo. **Ontologias:** conceitos, categorias, relações, propriedades e restrições formais do domínio. **Grafos de conhecimento:** triplas sujeito→relação→objeto; Rafael→gostou→Interestelar.

## Minutos 12–15 · Lógica e armadilhas

P∧Q exige ambas; P∨Q aceita uma ou ambas. P→Q só é falsa quando P é V e Q é F. P→Q equivale a ¬P∨Q. Predicado expressa propriedade/relação; constante é objeto específico; variável representa elemento do domínio.

∀ = todo; ∃ = existe ao menos um. ¬∀xP(x)≡∃x¬P(x). ¬∃xP(x)≡∀x¬P(x). Todo aluno estuda: ∀x(Aluno(x)→Estuda(x)); existe aluno que estuda: ∃x(Aluno(x)∧Estuda(x)).

IA simbólica: regras explícitas e símbolos; redes neurais: representações numéricas aprendidas. Esse contraste é secundário para a prova.

## 20 coisas que não posso esquecer

1. Estado não é nó.
2. A seleção na fronteira define a estratégia.
3. BFS usa FIFO e explora por níveis.
4. DFS usa LIFO e a ordem dos sucessores importa.
5. Ordem de visita não é caminho da solução.
6. Profundidade conta passos; custo soma pesos.
7. BFS minimiza custo quando os custos são iguais.
8. DFS não garante solução ótima.
9. Custo Uniforme escolhe menor g.
10. Gulosa escolhe menor h.
11. A* escolhe menor g+h.
12. h é estimativa, não custo real.
13. Manhattan soma módulos; Euclidiana usa raiz da soma dos quadrados.
14. Admissível nunca superestima h*.
15. Consistente respeita h≤c+h′ em toda transição.
16. h=0 faz A* virar Custo Uniforme.
17. Fatos e regras precisam de inferência para produzir novas conclusões.
18. Forward começa em fatos; Backward começa na hipótese.
19. Redes semânticas conectam conceitos; frames organizam atributos.
20. Ontologias formalizam o domínio; grafos de conhecimento conectam entidades em triplas.

Fontes: Aula 05, p. 4–37; Aula 06, p. 3–23; Aula 03, p. 5–39; Aula 04, p. 6–17 e 29–39.
