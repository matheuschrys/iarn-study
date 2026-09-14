# IARN — Aprender, praticar e revisar

Material de estudo baseado nas seis aulas de Josiane Sandes. Prioridades: Busca Não Informada (Aula 05), Busca Heurística (Aula 06) e Representação do Conhecimento (Aula 03). Aula 04 apoia a lógica; Aulas 01 e 02 dão contexto. As referências usam a página do PDF, contando a capa. Exercícios e execuções são elaboração didática; complementos que ultrapassam os slides estão marcados.

## 1. Fundamentos de busca

Fonte: Aula 05, p. 2–17 e 35–36; contexto: Aula 02, p. 30.

Resolver um problema por busca é encontrar uma sequência de ações que transforme uma configuração inicial em uma configuração desejada. Um agente baseado em objetivos compara possibilidades antes de agir: o robô deve descobrir como sair da sala A e chegar à F.

### Formular antes de buscar

**P = (S, s0, A, T, G, C)**

| Elemento | Significado | Exemplo de labirinto |
|---|---|---|
| S | Conjunto de estados possíveis | Posições livres |
| s0 | Estado inicial; s0 ∈ S | Posição do robô |
| A | Ações ou operadores disponíveis | Cima, baixo, esquerda, direita |
| T | Modelo de transição / função sucessora | Resultado de um movimento permitido |
| G | Teste ou conjunto de estados objetivos | Verificar se chegou ao destino |
| C | Função de custo | 1 por movimento |

Nem toda ação é permitida em qualquer estado: atravessar uma parede não é sucessor válido. O **modelo de transição** descreve o resultado de uma ação; a **função sucessora** reúne os sucessores alcançáveis pelas ações disponíveis. **Operador** é uma operação que muda o estado. O espaço de estados alcançáveis pode ser desenhado como grafo: vértices são estados, arestas são transições, pesos são custos.

**ESTADO ≠ NÓ.** Estado é uma configuração do problema; nó é uma estrutura do algoritmo, que pode guardar estado, pai, ação, profundidade e custo. Dois caminhos podem chegar ao mesmo estado e gerar nós com pais e custos diferentes. Caminho é uma sequência conectada de estados ou ações; profundidade é a quantidade de passos desde o início. Custo é a soma dos pesos: A→B=3, B→D=4, D→F=2 resulta em g(F)=9 e profundidade 3 (Aula 05, p. 9).

O teste de objetivo só responde se a configuração desejada foi alcançada. Encontrar uma solução não significa encontrar a melhor: isso depende da estratégia e dos custos. Para reconstruir a solução, siga os pais do objetivo até o início e inverta a sequência.

### Fronteira e ciclo de busca

A fronteira guarda **nós descobertos ainda não expandidos**, representando estados à espera de análise. Expandir significa gerar e processar sucessores. Os estados explorados registram expansões anteriores.

1. Insira o nó inicial na fronteira.
2. Selecione e remova um nó.
3. Teste o objetivo; se verdadeiro, reconstrua o caminho.
4. Registre a expansão e gere os sucessores válidos.
5. Insira os sucessores conforme a política da busca.
6. Repita; fronteira vazia sem objetivo significa falha.

**A forma de escolher o próximo nó da fronteira define a estratégia de busca.**

Convenção deste material: testamos o objetivo ao retirar o nó. A sequência de selecionados inclui o objetivo; a lista de expandidos não o inclui, pois paramos antes de gerar seus sucessores. Isso evita confundir “visita” com “expansão”.

### Árvore × grafo

| Busca em árvore | Busca em grafo |
|---|---|
| Representa caminhos; um estado pode reaparecer | Mantém registro dos estados explorados |
| Não precisa guardar todos os visitados | Evita processamento repetido conforme a política |
| Pode gerar repetições e ciclos | Reduz ciclos e repetições |
| Estrutura mais simples | Registro adicional consome memória |

Exemplo elaborado: A→B→C→A. Sem controle, uma DFS pode repetir A,B,C para sempre. Com explorados, o retorno a A é descartado. Em A→B→D e A→C→D, o mesmo estado D aparece em dois caminhos: busca em árvore pode manter ambos.

> COMPLEMENTO EXPLICATIVO — Conferir também estados já presentes na fronteira evita duplicatas pendentes. Em buscas por custo, não basta descartar toda repetição: um novo caminho pode ser mais barato e exigir atualização. A implementação do site usa essas políticas explicitamente.

### Critérios de avaliação

**Completude:** encontra solução quando existe? **Otimalidade:** encontra a de menor custo? **Tempo:** quantos nós gera/processa? **Espaço:** quantos precisa guardar? Não confunda rapidez observada em um exemplo com garantia geral.

## 2. Busca não informada

Fonte: Aula 05, p. 16–37.

Usa estado inicial, ações, sucessores, teste de objetivo e custos quando aplicáveis. Não usa estimativa de proximidade ao destino. Também aparece como busca cega ou sem informação heurística. Custo uniforme continua não informada: g mede gasto real passado, não estima o restante.

### BFS — Breadth-First Search

Busca em largura expande os nós de **menor profundidade** primeiro: nível 0, nível 1, nível 2… Sua fronteira é uma **fila FIFO: First In, First Out**, primeiro a entrar, primeiro a sair.

Exemplo da Aula 05, p. 20: A→[B,C]; B→[D,E]; C→[F,G]; E→[H]. D,F,G,H não têm sucessores. Início A, objetivo H, custos 1. A fila é mostrada com a remoção à esquerda.

| Passo | Nó removido | Sucessores inseridos | Fila depois | Expandidos |
|---|---|---|---|---|
| 0 | — | A | A | ∅ |
| 1 | A | B,C | B,C | A |
| 2 | B | D,E | C,D,E | A,B |
| 3 | C | F,G | D,E,F,G | A,B,C |
| 4 | D | nenhum | E,F,G | A,B,C,D |
| 5 | E | H | F,G,H | A,B,C,D,E |
| 6 | F | nenhum | G,H | A,B,C,D,E,F |
| 7 | G | nenhum | H | A,B,C,D,E,F,G |
| 8 | H, objetivo | nenhum | ∅ | A,B,C,D,E,F,G |

Selecionados: A,B,C,D,E,F,G,H. Expansões efetivas: A,B,C,D,E,F,G. **Caminho da solução: A→B→E→H**, custo 3. A ordem de busca não é caminho: B e C, por exemplo, não estão ligados entre si nesse grafo.

BFS é completa com ramificação finita e solução em profundidade finita. Encontra a solução mais rasa; com custos iguais, isso também minimiza o custo. A memória pode crescer muito, pois guarda muitos nós do mesmo nível. É boa quando a solução está próxima.

### DFS — Depth-First Search

Busca em profundidade explora um ramo antes de voltar às alternativas. Usa **pilha LIFO: Last In, First Out**, último a entrar, primeiro a sair. Pode ser iterativa com pilha explícita ou recursiva com pilha de chamadas.

No mesmo grafo, queremos visitar sucessores da esquerda para a direita. Portanto, empilhamos em ordem inversa. O topo está à direita.

| Passo | Nó removido | Inseridos na pilha | Pilha depois | Expandidos |
|---|---|---|---|---|
| 0 | — | A | A | ∅ |
| 1 | A | C,B | C,B | A |
| 2 | B | E,D | C,E,D | A,B |
| 3 | D | nenhum | C,E | A,B,D |
| 4 | E | H | C,H | A,B,D,E |
| 5 | H, objetivo | nenhum | C | A,B,D,E |

Depois de D, a busca retorna à alternativa E: é o **backtracking**. Selecionados: A,B,D,E,H. Caminho: A→B→E→H, custo 3. C permanece pendente quando o objetivo é encontrado. Se B for empilhado antes de C, C sairá primeiro e a ordem mudará.

DFS não garante caminho mais curto nem menor custo. Pode seguir ramos muito profundos e não é completa em espaços infinitos. É útil quando a memória é limitada, há muitas soluções ou a profundidade é controlada. Em grafo finito, controlar visitados permite esgotar os estados alcançáveis.

### BFS × DFS

| Critério | BFS | DFS |
|---|---|---|
| Estrutura | Fila FIFO | Pilha LIFO |
| Escolha | Menor profundidade | Ramo atual / último inserido |
| Completude | Sim, sob condições acima | Não em geral em espaço infinito |
| Otimalidade | Custos iguais | Não |
| Memória usual | Alta | Menor na busca em árvore |
| Menor caminho em passos | Sim | Não garante |
| Caminhos infinitos | Não fica só em um ramo, com b finito | Pode ficar presa em um ramo |
| Indicação | Solução rasa | Memória limitada e profundidade controlada |

**A escolha do próximo nó da fronteira define a estratégia.** Não é a aparência do desenho que torna uma busca BFS ou DFS.

### Complexidade e crescimento

b é o fator de ramificação: quantidade de sucessores, tratada no slide como média. d é a profundidade da solução mais próxima. m é a profundidade máxima. Com b=3, no nível 5 há 3^5=243 nós; até esse nível há 1+3+9+27+81+243=364.

Tabela **como impressa na Aula 05, p. 29**:

| Estratégia | Tempo | Espaço |
|---|---|---|
| BFS | O(b^d) | O(b^d) |
| DFS | O(b^m) | O(b^m) |

> COMPLEMENTO EXPLICATIVO — Na análise usual de DFS em árvore, mantendo o ramo atual e irmãos pendentes, a memória é O(b·m), enquanto o tempo pode ser O(b^m). Se forem guardados todos os estados visitados, essa memória adicional pode chegar a O(V), com V estados distintos. A tabela do slide não distingue essas implementações. Os limites exponenciais de BFS também variam com o momento do teste do objetivo e a contagem de nós gerados; aqui preservamos a convenção da aula. Para garantias de pior caso, b é considerado um limite de ramificação.

### Busca de Custo Uniforme

Escolhe o nó com **menor g(n)** em fila de prioridade. g(n) é o custo acumulado desde o início. Menos passos não significa menor custo: no slide, A→B→G tem 2 passos e custo 15; A→C→D→G tem 3 passos e custo 9. BFS prefere o primeiro por profundidade; custo uniforme encontra o segundo.

Exemplo numérico elaborado: A→B=7, B→G=8; A→C=2, C→D=3, D→G=4. Depois de expandir A: C(2),B(7). Depois de C: D(5),B(7). Depois de D: B(7),G(9). Depois de B, a alternativa G(15) não melhora G(9). Retira G(9) e termina. Solução A→C→D→G, custo 9.

> COMPLEMENTO EXPLICATIVO — O teste ao remover da prioridade evita aceitar um objetivo caro apenas porque foi gerado cedo. Em espaços infinitos, completude e otimalidade usuais de custo uniforme exigem ramificação finita e custos de passo ≥ ε>0. Em grafos finitos, custos não negativos e tratamento correto de melhorias bastam para o problema usual de menor caminho.

### Profundidade limitada

Executa DFS respeitando profundidade ≤ L. Ao alcançar L sem objetivo, não gera descendentes. Evita seguir indefinidamente um ramo, mas pode perder solução além do limite. Exemplo: solução na profundidade 3; L=2 não a encontra.

### Aprofundamento iterativo

Repete busca limitada com L=0,1,2,3… Recomeça a cada limite. Combina memória da DFS com a capacidade de encontrar solução rasa da BFS. Com ramificação finita, solução em profundidade finita e custos iguais, é completo e ótimo. Repetir trabalho dos níveis superiores é a troca por menor memória.

### Busca bidirecional

Uma busca parte do início e outra do objetivo; elas se encontram. A Aula 05, p. 34, apresenta redução aproximada de O(b^d) para O(b^(d/2)) em condições apropriadas. É preciso gerar predecessores a partir do objetivo. Exemplo elaborado: A→B→C→D→G; a busca de A chega a C, a busca inversa de G também chega a C; os trechos são unidos.

### Atividade de rotas da professora

Aula 05, p. 37: A:[B,C]; B:[D,E]; C:[F]; D:[G]; E:[G,H]; F:[H]; G:[I]; H:[I]; I:[]. As arestas são dirigidas. Desenhe, execute BFS e DFS, registre visitas, caminho e número de estados, e compare.

Exemplo resolvido com início A e objetivo I, vizinhos na ordem dada e sem duplicatas na fronteira: BFS seleciona A,B,C,D,E,F,G,H,I e retorna A→B→D→G→I (4 passos). DFS seleciona A,B,D,G,I e retorna o mesmo caminho. Terem coincidido aqui não dá garantia geral à DFS. O site inclui esse cenário.

## 3. Busca informada e heurística

Fonte: Aula 06, p. 2–12.

| Não informada | Informada |
|---|---|
| Estrutura do problema | Estrutura + estimativa |
| Sem estimativa de proximidade | Orientação por heurística |
| BFS, DFS, Custo Uniforme (Dijkstra na Aula 06) | Gulosa e A* |
| Pode explorar muitos estados | Pode reduzir exploração |

**h(n)** estima o custo de n até o objetivo. n representa o estado associado ao nó; h mede o restante estimado. **Heurística ≠ custo real.** Não precisa ser exata, mas deve orientar a busca de forma útil.

| Problema da aula | Heurística possível |
|---|---|
| Rotas | Distância em linha reta |
| Labirinto | Manhattan |
| Quebra-cabeça de 8 peças | Número de peças fora do lugar |
| Jogos | Avaliação da posição |
| Robótica | Distância ao destino |
| Planejamento | Tempo restante estimado |

A tabela de cidades da Aula 06, p. 5, diferencia estimativas de distâncias reais de estrada. São valores didáticos do slide, não consultas atuais de rotas.

### Manhattan

**h(n) = |xn−xo| + |yn−yo|**. (xn,yn) é a posição atual e (xo,yo) é o objetivo. Some os deslocamentos absolutos em cada eixo. É natural para movimento horizontal e vertical.

Exemplo da aula: (2,3) até (7,6): |2−7|+|3−6|=5+3=**8**.

Exemplos elaborados: (0,0)→(4,4): 4+4=8; (3,4)→(1,1): 2+3=5; (−2,1)→(3,−3): 5+4=9; (5,2)→(5,2): 0.

### Euclidiana

**h(n) = √((xn−xo)² + (yn−yo)²)**. Mede a linha reta e é adequada a deslocamentos em diferentes direções.

Exemplo da aula: (2,3)→(7,6): √(25+9)=√34≈**5,83**. Exemplos elaborados: (0,0)→(3,4): √25=5; (1,1)→(1,6): 5; (0,0)→(1,1): √2≈1,41.

| Comparação | Manhattan | Euclidiana |
|---|---|---|
| Operação | Soma dos módulos | Raiz da soma dos quadrados |
| (0,0)→(3,4) | 7 | 5 |
| Intuição | Quarteirões | Linha reta |

> COMPLEMENTO EXPLICATIVO — Na grade de quatro movimentos com custo 1, Manhattan é admissível e consistente: paredes podem alongar a rota, e um movimento muda a distância em no máximo 1. Se diagonais custarem 1, Manhattan pode superestimar; escolher a fórmula exige considerar ações e unidades de custo. Euclidiana em unidades de distância não estima automaticamente um custo medido em tempo.

### Busca Gulosa

Escolhe **menor h(n)**, ignorando g na prioridade. Pode parecer perto do objetivo e já ter gasto muito. Na tabela da Aula 06, p. 9: B tem h=5 e C tem h=7; escolhe B. O caminho A→B→D→G custa 4+5+4=13; A→C→D→G custa 2+3+4=9. Gulosa não garante menor custo.

### Grafo da Aula 06, p. 11 e 16

Este é outro exemplo, usado no visualizador. Arestas sem setas são consideradas de mão dupla. Custos: A–B=2, A–C=4, B–D=5, B–E=2, C–E=1, C–F=5, D–G=3, E–G=6, F–G=4. Heurísticas: A=7, B=6, C=5, D=2, E=4, F=4, G=0. Empates seguem ordem de descoberta; E é gerado antes de F.

| Etapa Gulosa | Atual | Aberta depois, por h | Fechada | Caminho até atual / custo |
|---|---|---|---|---|
| Inicial | — | A(7) | ∅ | — |
| 1 | A | C(5), B(6) | A | A / 0 |
| 2 | C | E(4), F(4), B(6) | A,C | A→C / 4 |
| 3 | E | G(0), F(4), B(6) | A,C,E | A→C→E / 5 |
| 4 | G | F(4), B(6) | A,C,E | A→C→E→G / 11 |

A prioridade não usa os custos das arestas, embora possamos somá-los para avaliar o resultado. No pior caso, a Aula 06 apresenta **O(b^m)**: a heurística pode orientar mal e a exploração ainda ser exponencial.

## 4. A* — prioridade máxima

Fonte: Aula 06, p. 13–23.

**f(n) = g(n) + h(n)**

| Símbolo | Significado | Pergunta para lembrar |
|---|---|---|
| g | Custo real já percorrido | Quanto já gastei? |
| h | Custo restante estimado | Quanto acredito que falta? |
| f | Custo total estimado passando pelo nó | Quanto acredito que custará o caminho completo? |

Exemplos elaborados: g=4,h=7→f=11; g=9,h=0→f=9; f=15,g=6→h=9; g=3 e transição de custo 5→g do sucessor=8. Se o sucessor tem h=4, f=12.

A* escolhe **menor f**. Lista aberta guarda descobertos pendentes, normalmente em fila de prioridade. Lista fechada guarda expandidos. Melhor caminho para um estado pode exigir atualização e, em certas implementações, reabertura. **É a escolha na fronteira que define a estratégia.**

### A* manual no grafo da professora

Use o grafo anterior. Cada registro abaixo é nó(g,h,f). Os caminhos indicam os pais da melhor rota conhecida.

| Etapa | Atual | Lista aberta depois | Lista fechada | Caminho parcial; custo |
|---|---|---|---|---|
| 0 | — | A(0,7,7) | ∅ | — |
| 1 | A | B(2,6,8), C(4,5,9) | A | A; 0 |
| 2 | B | E(4,4,8), C(4,5,9), D(7,2,9) | A,B | A→B; 2 |
| 3 | E | C(4,5,9), D(7,2,9), G(10,0,10) | A,B,E | A→B→E; 4 |
| 4 | C | D(7,2,9), G(10,0,10), F(9,4,13) | A,B,E,C | A→C; 4 |
| 5 | D | G(10,0,10), F(9,4,13) | A,B,E,C,D | A→B→D; 7 |
| 6 | G | F(9,4,13) | A,B,E,C,D | A→B→E→G; 10 |

Ao expandir E, ir a C custaria 5, pior que o 4 já conhecido; descartamos a melhoria inexistente. Ao expandir D, G também custaria 10: empate mantém o pai E. Há duas soluções ótimas de custo 10: A→B→E→G e A→B→D→G. A Gulosa encontrou custo 11 no mesmo grafo.

### Admissível × consistente

**Admissível:** h(n) ≤ h*(n), sendo h* o custo mínimo real restante. Nunca superestima. Se h*=10, h=7 e h=10 respeitam a condição nesse estado; h=14 não. Para a heurística toda ser admissível, a condição deve valer em todos os estados relevantes.

**Consistente:** h(n) ≤ c(n,n′)+h(n′) em toda transição. A estimativa atual não pode superar o custo até o vizinho somado à estimativa dele: uma desigualdade triangular. Exemplo elaborado: h(n)=7,c=3,h(n′)=4→7≤7, válida. Se h(n)=8, 8≤7 é falsa: inconsistente.

| Propriedade | Admissível | Consistente |
|---|---|---|
| Compara com | Custo ótimo real h* | Custo da aresta + h do vizinho |
| Alcance do teste | Estado versus objetivo | Toda transição local |
| Fórmula | h≤h* | h≤c+h′ |
| Ideia | Não superestimar | Coerência entre vizinhos |

A aula afirma: **toda heurística consistente é admissível**.

> COMPLEMENTO EXPLICATIVO — Essa implicação usa h(objetivo)=0 e as condições usuais de caminhos até o objetivo. Somando as desigualdades ao longo de um caminho, obtemos h(início)≤custo do caminho. Admissibilidade sozinha não implica consistência. Exemplo dirigido: X→Y=1, Y→G=4; h(X)=5,h(Y)=0,h(G)=0. Todos subestimam ou igualam h*, mas X→Y viola 5≤1+0.

### Quando A* garante menor custo?

A Aula 06, p. 17, afirma que uma heurística admissível pode garantir otimalidade em busca em árvore sob condições adequadas. Não transforme essa frase em garantia sem condições para qualquer código.

> COMPLEMENTO EXPLICATIVO — No cenário usual, ramificação finita, custos de passo ≥ ε>0, h não negativa, h(objetivo)=0 e heurística admissível sustentam completude e otimalidade de A* em árvore. Em grafo, consistência permite fechar estados sem reabri-los; com admissibilidade e possível inconsistência, é necessário propagar melhorias e reabrir estados quando cabível. O objetivo deve ser aceito quando retirado pela prioridade. O site atualiza custos e reabre estados em A* e Custo Uniforme.

### Qualidade, complexidade e vantagens

Se **h=0 em todos os estados**, f=g: A* se comporta como Custo Uniforme. Se h se aproxima do custo real, tende a direcionar melhor a busca. Se superestima, pode acelerar mas perde garantia de ótimo. Não é promessa de aceleração em qualquer instância.

O slide usa **O(b^d)** no pior caso do A*, com b ramificação e d profundidade da solução. Memória pode ser alta porque mantém estados descobertos. Desempenho depende da heurística. A aula destaca menor custo sob condições adequadas, uso de conhecimento do domínio, redução de exploração desnecessária, aplicação em grafos/mapas, jogos e robótica e liberdade para escolher heurísticas.

### Atividade prática do robô

Aula 06, p. 22–23. Use coordenadas (linha,coluna) iniciando em zero. S=(0,0), G=(4,4), # é parede. Movimentos cima, baixo, esquerda, direita; custo 1.

```
S . . # .
# # . # .
. . . . .
. # # # .
. . . . G
```

Tarefas: representar posições; calcular Manhattan; executar A*; apresentar caminho; somar custo. h(S)=|0−4|+|0−4|=8.

Um caminho ótimo: (0,0)→(0,1)→(0,2)→(1,2)→(2,2)→(2,3)→(2,4)→(3,4)→(4,4). São 9 posições e **8 movimentos**, custo 8. Ao longo dele, g=0,1,2,3,4,5,6,7,8; h=8,7,6,5,4,3,2,1,0; f=8 em todos. A ramificação para (2,1) tem g=5,h=5,f=10 e aguarda enquanto há f=8.

| Atual | Aberta após expansão, nó:g/h/f | Fechada acrescida |
|---|---|---|
| (0,0) | (0,1):1/7/8 | (0,0) |
| (0,1) | (0,2):2/6/8 | (0,1) |
| (0,2) | (1,2):3/5/8 | (0,2) |
| (1,2) | (2,2):4/4/8 | (1,2) |
| (2,2) | (2,3):5/3/8; (2,1):5/5/10 | (2,2) |
| (2,3) | (2,4):6/2/8; (2,1):5/5/10 | (2,3) |
| (2,4) | (3,4):7/1/8; (2,1):5/5/10; (1,4):7/3/10 | (2,4) |
| (3,4) | (4,4):8/0/8; (2,1):5/5/10; (1,4):7/3/10 | (3,4) |
| (4,4) | Objetivo retirado; termina | Não expandido |

Variações elaboradas, disponíveis no site: **V1**, bloquear (2,3): o caminho passa por (2,1),(2,0),(3,0),(4,0),(4,1),(4,2),(4,3),(4,4), custo total 12. **V2**, abrir (1,0): existe caminho (0,0),(1,0),(2,0),(3,0),(4,0),(4,1),(4,2),(4,3),(4,4), custo 8. **V3**, bloquear (1,2): S fica sem acesso ao restante e não há solução. Execute e explique por que h(S)=8 continua sendo apenas estimativa em V1.

## 5. Representação do conhecimento

Fonte: Aula 03, p. 2–44; apoio: Aula 04.

Conhecimento organiza informações para compreender, relacionar, decidir, resolver e inferir. Apenas guardar valores não fornece regras para interpretá-los. Uma representação deve permitir armazenar fatos, identificar entidades, estabelecer relações, representar regras, inferir e obter novo conhecimento.

### Dado, informação, conhecimento, inferência

| Categoria | Exemplo da Aula 03, p. 5–7 |
|---|---|
| Dado | 38,5, isoladamente |
| Informação | Temperatura = 38,5 °C |
| Conhecimento | Temperatura acima de 38 °C pode indicar febre |
| Inferência/decisão no exemplo | Aplicar a regra e recomendar avaliação |

Outro exemplo da aula: Carlos tem nota 4,5; regra “se nota<6, então abaixo da média”; conclusão “Carlos está abaixo da média”. Inferência é a aplicação do conhecimento aos fatos, não só armazená-los. Os exemplos de temperatura são modelos didáticos de regras.

### Base de conhecimento

Armazena **fatos, regras, relações, conceitos e propriedades**. Exemplo: Ana é estudante; Carlos é professor; Carlos ensina IA; Ana estuda IA. Regra: quem estuda uma disciplina é aluno dessa disciplina. Inferência: Ana é aluna de IA.

João tem 25 anos: entidade João, propriedade idade, valor 25; representações Pessoa(João), idade(João,25). Relação pode ligar duas entidades: LocalizadoEm(Manaus,Amazonas).

### Declarativo × procedural

Declarativo é **o que sabemos**: “Manaus é uma cidade”, “Manaus está no Amazonas”. Procedural é **como fazer**: somar notas, dividir pela quantidade e comparar com média mínima. Pergunte se a frase declara um fato ou descreve um procedimento.

### Seis formas de representação

| Técnica | Característica | Exemplo |
|---|---|---|
| Lógica | Símbolos e regras formais | Humano(Sócrates); ∀x(Humano(x)→Mortal(x)) |
| Regras de produção | Condição → conclusão/ação | SE nota<6 ENTÃO abaixo_da_média |
| Rede semântica | Conceitos conectados e herança | Rex é cachorro; cachorro é animal |
| Frames | Fichas de objetos/situações e atributos | Aluno: nome, idade, curso |
| Ontologias | Conceitos e relações formais de um domínio | Professor ministra Disciplina |
| Grafos de conhecimento | Entidades conectadas por relações | Rafael gostou de Interestelar |

### Lógica e inferência

Fato: Humano(Sócrates). Regra: ∀x(Humano(x)→Mortal(x)). Instanciando x=Sócrates, concluímos Mortal(Sócrates). Predicados expressam propriedades (Aluno(Maria)) ou relações (Estuda(Maria,IA), Pai(José,Carlos)). A relação tem direção: Pai(José,Carlos) não é o mesmo que Pai(Carlos,José).

### Regras, memória e motor

Regra de produção: **SE condição ENTÃO conclusão/ação**. O motor de inferência seleciona regras aplicáveis aos fatos e gera conclusões. A base mantém conhecimento do domínio; a memória de trabalho mantém fatos do caso e resultados intermediários.

Fluxo: base de conhecimento + memória de trabalho → motor de inferência → nova conclusão. No suporte técnico, uma regra pode converter características do computador em possível causa do problema.

### Forward Chaining

Encadeamento para frente: **dados → conclusões**. Exemplo da Aula 03, p. 19: fato A; regras A→B, B→C, C→D.

| Passo | Fatos disponíveis | Regra aplicada | Novo fato |
|---|---|---|---|
| 0 | A | — | — |
| 1 | A | A→B | B |
| 2 | A,B | B→C | C |
| 3 | A,B,C | C→D | D |

Use quando deseja descobrir consequências dos dados disponíveis. O motor pode parar quando chega à conclusão desejada ou quando nenhuma regra acrescenta fatos.

### Backward Chaining

Encadeamento para trás: **hipótese → condições → fatos**. Para provar D, procure uma regra cuja conclusão seja D: C→D. Agora precisa provar C; use B→C. Para B, use A→B. A está nos fatos: confirma B, depois C, depois D.

O slide usa hipótese de gripe e condições febre + tosse como ilustração de sistema especialista. Se uma condição não puder ser provada, aquela cadeia não confirma a hipótese.

> COMPLEMENTO EXPLICATIVO — “Não consegui provar” não significa automaticamente “provei falso”. A conclusão depende das regras e da interpretação da base. Não inverta uma implicação: A→B e B não bastam para concluir A.

| Forward | Backward |
|---|---|
| Começa com fatos | Começa com meta/hipótese |
| Busca consequências | Busca condições que sustentam a meta |
| O que posso concluir? | Consigo provar isto? |
| Bom para várias conclusões dos dados | Bom para uma consulta específica |

### Redes semânticas

Nós representam conceitos/entidades e conexões representam relações. Hierarquias permitem herança: mamíferos respiram; cachorros são mamíferos; Rex é cachorro; logo Rex respira. Outro encadeamento: Rex→é_um→Cachorro→é_um→Animal; inferimos Rex é animal. Relações como “possui” diferem de relações de categoria; herança precisa respeitar seu significado.

### Frames

Frame é uma ficha com atributos. O exemplo Aluno: Carlos, 20 anos, Sistemas de Informação, 4º período, matriculado. No frame COMPUTADOR_01: Dell, Intel Core i5, 8 GB, Windows 11, Liga=SIM, Exibe_Imagem=NÃO, Conecta_Internet=NÃO INFORMADO, Temperatura=NORMAL.

Regra da aula: SE Liga=SIM E Exibe_Imagem=NÃO ENTÃO Possível_Problema="Memória RAM ou vídeo". Outra: SE Liga=SIM E Exibe_Imagem=SIM E Conecta_Internet=NÃO ENTÃO Possível_Problema="Conectividade de rede".

**Frame + regras + motor de inferência → diagnóstico sugerido.** O frame organiza; a regra relaciona condições; o motor aplica. “NÃO INFORMADO” não é o mesmo que “NÃO”.

### Ontologias

Representações formais de conceitos e relações em um domínio. Definem conceitos, categorias, propriedades, relações, restrições e hierarquia. No domínio acadêmico, Pessoa possui categorias Professor e Aluno; Disciplina pode ser Obrigatória ou Optativa; Professor ministra Disciplina, Aluno cursa Disciplina, Disciplina pertence a Curso.

No e-commerce: Notebook é Computador; Computador é Eletrônico; Notebook possui processador e memória; é indicado para Programação. Programação é Desenvolvimento, uma Finalidade. Essas relações permitem aproximar “computador para desenvolvimento” de “notebook para programação”, em vez de depender só das palavras exatas.

### Grafos de conhecimento

Representam entidades e relações em **triplas: sujeito → relação → objeto**. Exemplos da Aula 03: Rafael→gostou→Interestelar; Interestelar→diretor→Christopher Nolan; Interestelar→gênero→Ficção Científica. A Origem compartilha diretor e gênero e pode ser sugerido como recomendação. É uma possibilidade de recomendação, não prova de que Rafael gostará.

| Estrutura | Ênfase |
|---|---|
| Rede semântica | Conceitos conectados, significado e herança |
| Ontologia | Vocabulário formal, categorias, relações e restrições do domínio |
| Grafo de conhecimento | Entidades concretas e suas relações |

As técnicas podem ser combinadas; não são categorias obrigatoriamente excludentes.

### Simbólica × redes neurais — secundário

Aula 03, p. 37–42: IA simbólica usa símbolos e regras explícitas, frequentemente definidos por especialistas; facilita interpretação e raciocínio lógico. Redes neurais aprendem representações numéricas a partir dos dados, ajustando pesos; são boas para padrões e podem ser menos interpretáveis. Embeddings são representações vetoriais; IA neuro-simbólica combina os paradigmas. Esses pontos dão contexto, sem substituir o foco nas seis técnicas e nas buscas.

### Atividades da Aula 03

Página 43: regra nota≥6 E frequência≥75% → APROVADO. João (7,80%) satisfaz ambas; Maria (5,90%) falha na nota; Pedro (8,60%) falha na frequência. A regra permite concluir APROVADO para João; não permite aprovar Maria e Pedro.

> COMPLEMENTO EXPLICATIVO — Para concluir formalmente REPROVADO, seria preciso uma regra correspondente ou uma convenção de classificação completa. Não inventamos essa regra como se estivesse no slide.

Página 44: escolha diagnóstico de computador, sistema acadêmico, manutenção de veículos, suporte ou biblioteca. Defina 5 entidades, 5 fatos, 5 relações e 5 regras; represente em pelo menos duas técnicas. Exemplo elaborado de começo: entidades Ana, Bia, Livro1, Livro2, Biblioteca; fatos Aluno(Ana), Aluno(Bia), Livro(Livro1), Livro(Livro2), Biblioteca(Biblioteca); relações CadastradoEm(Ana,Biblioteca), CadastradoEm(Bia,Biblioteca), PertenceA(Livro1,Biblioteca), PertenceA(Livro2,Biblioteca), EmprestadoA(Livro1,Ana). Regras possíveis: Livro(x)→Item(x); Aluno(x)→Pessoa(x); EmprestadoA(l,p)→ComEmprestimo(p); PertenceA(l,b)→NoAcervo(l); CadastradoEm(p,b)→Usuario(p). Desenhe uma rede e escreva as mesmas afirmações em predicados.

## 6. Lógica como apoio

Fonte: Aula 04, p. 6–17, 23–24, 29–39.

Proposição é uma sentença que pode ser verdadeira ou falsa. “10+5=20” é proposição falsa; “Feche a janela!” é ordem e não é proposição. P,Q,R representam proposições inteiras.

| P | Q | ¬P | P∧Q | P∨Q | P→Q | P↔Q |
|---|---|---|---|---|---|---|
| V | V | F | V | V | V | V |
| V | F | F | F | V | F | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |

¬ nega; ∧ exige ambas; ∨ é ou inclusivo; → é falsa só em V→F; ↔ exige valores iguais. Use parênteses. Precedência da aula: ¬, ∧, ∨, →, ↔.

Equivalências úteis: P→Q ≡ ¬P∨Q; ¬(P∧Q) ≡ ¬P∨¬Q; ¬(P∨Q) ≡ ¬P∧¬Q; ¬¬P ≡ P. Exemplo: negar “nota suficiente E frequência suficiente” produz “nota insuficiente OU frequência insuficiente”.

Predicados abrem a estrutura da sentença. Em Aluno(João), João é constante: objeto específico. Em Aluno(x), x é variável. **∀** significa para todo; **∃** significa existe pelo menos um.

- Todo aluno estuda: ∀x(Aluno(x)→Estuda(x)).
- Existe aluno que estuda: ∃x(Aluno(x)∧Estuda(x)).
- Todo professor ensina algum aluno: ∀x(Professor(x)→∃y(Aluno(y)∧Ensina(x,y))).
- Existe professor que ensina todos os alunos: ∃x(Professor(x)∧∀y(Aluno(y)→Ensina(x,y))).

Negação troca o quantificador e nega o predicado: **¬∀x P(x) ≡ ∃x ¬P(x)**; **¬∃x P(x) ≡ ∀x ¬P(x)**. A negação de “todos estudam” é “pelo menos um não estuda”, não “ninguém estuda”. Quando o domínio contém outras pessoas além de alunos, a negação de “todo aluno estuda” é ∃x(Aluno(x)∧¬Estuda(x)).

## 7. Critérios para memorizar

| Algoritmo | Critério |
|---|---|
| BFS | Menor profundidade; FIFO |
| DFS | Aprofunda o ramo; último inserido; LIFO |
| Custo Uniforme | Menor g(n) |
| Gulosa | Menor h(n) |
| A* | Menor f(n)=g(n)+h(n) |

Para praticar: identifique primeiro o critério, anote a convenção de desempate, retire um nó por vez, atualize a fronteira e guarde os pais. Só então reconstrua o caminho e some custos. Use o banco de questões, o visualizador e o resumo de 15 minutos do site.
