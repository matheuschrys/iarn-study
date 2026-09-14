# Banco de 100 questões

Questões elaboradas para estudo; não são uma prova oficial. Gabarito ao final.

## 001 · Busca não informada · Múltipla escolha

Em P=(S,s0,A,T,G,C), o que representa S?

- Pilha de sucessores
- Conjunto de soluções ótimas
- Custo acumulado
- Conjunto de estados possíveis

## 002 · Busca não informada · Discursiva curta

Qual a diferença entre estado e nó?



## 003 · Busca não informada · Verdadeiro/falso

A fronteira contém apenas estados já expandidos. V ou F?

- Verdadeiro
- Falso

## 004 · Busca não informada · Múltipla escolha

Qual estrutura define a fronteira da BFS?

- Fila por g+h
- Fila por h
- Fila FIFO
- Pilha LIFO

## 005 · Busca não informada · Múltipla escolha

Qual estrutura define a fronteira da DFS iterativa?

- Fila por menor g
- Fila FIFO
- Tabela por menor h
- Pilha LIFO

## 006 · Busca não informada · Execução de algoritmo

No grafo A:[B,C], B:[D,E], C:[F,G], E:[H], folhas restantes, qual a ordem de seleção BFS até H?

- A,B,D,E,H
- A,C,G,F,B,H
- A,B,E,H
- A,B,C,D,E,F,G,H

## 007 · Busca não informada · Múltipla escolha

No mesmo grafo explicitado: A:[B,C], B:[D,E], C:[F,G], E:[H], folhas restantes. Qual caminho BFS de A até H?

- A→B→D→H
- A→C→H
- A→B→E→H
- A→B→C→D→E→F→G→H

## 008 · Busca não informada · Execução de algoritmo

Fila BFS [A]; A gera B,C. B é removido e gera D,E. Qual fila resulta, remoção à esquerda?

- C,D,E
- B,C,D,E
- E,D,C
- D,E,C

## 009 · Busca não informada · Execução de algoritmo

Pilha DFS [C,B], topo à direita. Remove B e insere E,D. Qual será o próximo removido?

- D
- E
- B
- C

## 010 · Busca não informada · Execução de algoritmo

DFS em A:[B,C], B:[D,E], C:[F,G], E:[H], folhas restantes, explorando da esquerda para a direita: seleção até H?

- A,C,F,G,H
- A,B,C,D,E,F,G,H
- A,B,E,D,H
- A,B,D,E,H

## 011 · Busca não informada · Múltipla escolha

Na pilha vazia, inserir B e depois C faz qual nó sair primeiro?

- Depende de h
- C
- B
- Ambos juntos

## 012 · Busca não informada · Verdadeiro/falso

A BFS garante menor custo quando todas as ações têm o mesmo custo positivo. V ou F?

- Falso
- Verdadeiro

## 013 · Busca não informada · Verdadeiro/falso

DFS sempre encontra o menor caminho. V ou F?

- Falso
- Verdadeiro

## 014 · Busca não informada · Discursiva curta

Por que a DFS pode falhar em espaço infinito?



## 015 · Busca não informada · Discursiva curta

O que é backtracking?



## 016 · Busca não informada · Cálculo

A→B custa 3, B→D custa 4, D→F custa 2. Qual g(F)?

- 7
- 3
- 12
- 9

## 017 · Busca não informada · Cálculo

No caminho A→B→D→F, qual a profundidade de F?

- 9
- 2
- 4
- 3

## 018 · Busca não informada · Múltipla escolha

Custo Uniforme escolhe qual valor?

- Menor g+h
- Menor h(n)
- Menor g(n)
- Maior profundidade

## 019 · Busca não informada · Múltipla escolha

A→B→G tem custo 15 em 2 passos; A→C→D→G tem custo 9 em 3 passos. Qual é mais barato?

- Os custos são iguais
- Não existe solução
- A→B→G
- A→C→D→G

## 020 · Busca não informada · Execução de algoritmo

Fronteira de Custo Uniforme: B(g=7), C(g=2), D(g=5). Quem sai?

- C
- B
- O último inserido
- D

## 021 · Busca não informada · Verdadeiro/falso

Busca limitada com L=2 encontra necessariamente uma solução na profundidade 3? V ou F?

- Verdadeiro
- Falso

## 022 · Busca não informada · Múltipla escolha

Qual sequência de limites caracteriza aprofundamento iterativo?

- 3,2,1,0
- 0,0,0,0
- Sempre infinito
- 0,1,2,3,…

## 023 · Busca não informada · Múltipla escolha

O que o aprofundamento iterativo combina?

- Heurística e treinamento
- Duas filas heurísticas
- Memória da DFS e busca de soluções rasas da BFS
- Maior custo e maior profundidade

## 024 · Busca não informada · Múltipla escolha

O que a busca bidirecional precisa fazer a partir do objetivo?

- Somente seguir arestas de saída do início
- Ignorar o início
- Calcular embeddings
- Gerar predecessores

## 025 · Busca não informada · Cálculo

Para b=3, quantos nós há em um nível completo de profundidade 5?

- 243
- 15
- 125
- 364

## 026 · Busca não informada · Cálculo

Com b=3, qual o total de nós até a profundidade 5, incluindo a raiz?

- 364
- 363
- 729
- 243

## 027 · Busca não informada · Associação

Associe b, d e m a seus significados.



## 028 · Busca não informada · Discursiva curta

Como impedir a repetição A→B→C→A em busca em grafo?



## 029 · Busca não informada · Discursiva curta

Por que sequência de visitas não é necessariamente caminho da solução?



## 030 · Busca não informada · Execução de algoritmo

Na atividade A:[B,C], B:[D,E], C:[F], D:[G], E:[G,H], F:[H], G:[I], H:[I], I:[], qual caminho BFS até I, vizinhos na ordem dada?

- A→B→D→G→I
- A→B→C→I
- A→B→E→H→I→G
- A→C→I

## 031 · Busca informada · Múltipla escolha

O que representa h(n)?

- Custo real já percorrido
- Quantidade de visitados
- Profundidade máxima
- Estimativa do custo restante até o objetivo

## 032 · Busca informada · Múltipla escolha

Qual é a prioridade da Busca Gulosa?

- Menor g+h
- Maior h(n)
- Menor h(n)
- Menor g(n)

## 033 · Busca informada · Múltipla escolha

Qual é a função de avaliação de A*?

- f=g×h
- f(n)=g(n)+h(n)
- f=g−h
- f=h−g

## 034 · Busca informada · Cálculo

Se g=4 e h=7, qual f?

- 3
- 7
- 11
- 28

## 035 · Busca informada · Cálculo

Se f=15 e g=6, qual h?

- 2,5
- 6
- 21
- 9

## 036 · Busca informada · Cálculo

Se g do pai é 3 e a aresta custa 5, qual g do sucessor?

- 5
- 15
- 8
- 3

## 037 · Busca informada · Cálculo

Manhattan de (2,3) até (7,6)?

- 5,83
- 2
- 8
- 34

## 038 · Busca informada · Cálculo

Manhattan de (0,0) até (4,4)?

- 8
- 4
- 16
- 5,66

## 039 · Busca informada · Cálculo

Manhattan de (3,4) até (1,1)?

- 7
- 5
- 13
- 1

## 040 · Busca informada · Cálculo

Manhattan de (−2,1) até (3,−3)?

- 9
- 7
- −9
- 1

## 041 · Busca informada · Cálculo

Euclidiana de (0,0) até (3,4)?

- 5
- 7
- 25
- 1

## 042 · Busca informada · Cálculo

Euclidiana de (2,3) até (7,6)?

- 8
- √8
- √34 ≈ 5,83
- 34

## 043 · Busca informada · Múltipla escolha

Gulosa tem B(h=5) e C(h=7) na fronteira. Qual seleciona?

- C
- Ambos simultaneamente
- B
- Depende somente de g

## 044 · Busca informada · Execução de algoritmo

A* tem B(g=2,h=6), C(g=4,h=5) e E(g=4,h=4). Com empate por descoberta e B descoberto primeiro, quem sai?

- C
- E
- Não há como calcular f
- B

## 045 · Busca informada · Execução de algoritmo

No grafo da aula: A–B=2,A–C=4,B–D=5,B–E=2,C–E=1,C–F=5,D–G=3,E–G=6,F–G=4; h(B,C,D,E,F,G)=(6,5,2,4,4,0). Gulosa, E antes de F no empate, segue qual solução?

- A→B→D→G, custo 11
- A→C→E→G, custo 11
- A→C→F→G, custo 8
- A→B→E→G, custo 7

## 046 · Busca informada · Múltipla escolha

O que é lista aberta no A*?

- Nós descobertos ainda não expandidos, priorizados por f
- Apenas estados expandidos
- Somente o caminho final
- Todas as paredes

## 047 · Busca informada · Múltipla escolha

O que é lista fechada no A*?

- Nós nunca descobertos
- Estados já expandidos
- Todos os custos h
- Somente objetivos

## 048 · Busca informada · Múltipla escolha

Se h*=10, qual valor viola admissibilidade nesse estado?

- 0
- 7
- 10
- 14

## 049 · Busca informada · Verdadeiro/falso

Se h*=10 e h=7, a condição de admissibilidade vale nesse estado. V ou F?

- Verdadeiro
- Falso

## 050 · Busca informada · Cálculo

Com h(n)=7, c=3 e h(n′)=4, a consistência vale nessa aresta?

- Sim, pois 7≥3+4
- Não, pois h deve ser zero
- Não, pois deveria ser estrita
- Sim, pois 7≤3+4

## 051 · Busca informada · Cálculo

Com h(n)=8, c=3 e h(n′)=4, a consistência vale nessa aresta?

- Sim, pois 8≥7
- Não, pois 8>3+4
- Não se pode somar
- Sim, pois 8 é positivo

## 052 · Busca informada · Verdadeiro/falso

Toda heurística consistente é admissível nas condições usuais com h(objetivo)=0. V ou F?

- Verdadeiro
- Falso

## 053 · Busca informada · Múltipla escolha

Se h(n)=0 para todo n, A* equivale a qual busca?

- Busca bidirecional
- Busca de Custo Uniforme
- Gulosa com Manhattan
- DFS

## 054 · Busca informada · Verdadeiro/falso

Uma heurística que superestima sempre mantém a garantia de ótimo do A*. V ou F?

- Falso
- Verdadeiro

## 055 · Busca informada · Múltipla escolha

Qual pior caso de tempo é apresentado para Gulosa na aula?

- O(log b)
- O(1)
- O(b^m)
- O(m)

## 056 · Busca informada · Múltipla escolha

Qual pior caso de tempo é apresentado para A* na aula?

- O(1)
- O(b^d)
- O(log d)
- O(d)

## 057 · Busca informada · Cálculo

Na grade original da professora, S=(0,0), G=(4,4). Qual h(S) Manhattan?

- 0
- 8
- 4
- 16

## 058 · Busca informada · Execução de algoritmo

Mapa S..#./##.#./...../.###./....G, quatro movimentos de custo 1: qual custo ótimo?

- Não há solução
- 12
- 9
- 8

## 059 · Busca informada · Execução de algoritmo

No mapa S..#./##.#./...../.###./....G, bloquear também (2,3) faz o custo ótimo ser quanto?

- Não há solução
- 9
- 12
- 8

## 060 · Busca informada · Associação

Associe g, h e f às três perguntas de A*.



## 061 · Representação do conhecimento · Múltipla escolha

38,5 sem contexto corresponde a quê no exemplo da aula?

- Inferência
- Regra
- Ontologia
- Dado

## 062 · Representação do conhecimento · Múltipla escolha

Temperatura = 38,5 °C corresponde a quê?

- Dado isolado
- Procedimento
- Motor de inferência
- Informação

## 063 · Representação do conhecimento · Múltipla escolha

Temperatura acima de 38 °C pode indicar febre é exemplo de quê?

- Conhecimento
- Pilha
- Sensor
- Número isolado

## 064 · Representação do conhecimento · Múltipla escolha

Carlos tem nota 4,5; se nota<6, então abaixo da média. Concluir que Carlos está abaixo da média é o quê?

- Inferência
- Ação de busca
- Heurística
- Armazenamento sem raciocínio

## 065 · Representação do conhecimento · Discursiva curta

Quais componentes a base de conhecimento armazena?



## 066 · Representação do conhecimento · Múltipla escolha

Manaus está localizada no Amazonas é conhecimento de qual tipo?

- Heurístico
- Declarativo
- Exclusivamente numérico
- Procedural

## 067 · Representação do conhecimento · Múltipla escolha

Somar notas e dividir pela quantidade descreve conhecimento de qual tipo?

- Procedural
- Uma ontologia
- Declarativo
- Uma constante

## 068 · Representação do conhecimento · Associação

Em idade(João,25), identifique entidade, propriedade e valor.



## 069 · Representação do conhecimento · Múltipla escolha

Humano(Sócrates) e ∀x(Humano(x)→Mortal(x)) permitem concluir o quê?

- Mortal(Sócrates)
- Todo mortal é humano
- Sócrates é professor
- Ninguém é mortal

## 070 · Representação do conhecimento · Múltipla escolha

Aluno(Maria) é um exemplo de quê?

- Fila de prioridade
- Custo do caminho
- Operador aritmético
- Predicado de propriedade

## 071 · Representação do conhecimento · Verdadeiro/falso

Pai(José,Carlos) equivale a Pai(Carlos,José). V ou F?

- Verdadeiro
- Falso

## 072 · Representação do conhecimento · Múltipla escolha

Qual estrutura caracteriza uma regra de produção?

- Somente sujeito sem relação
- Sempre uma lista numérica
- SE condição ENTÃO conclusão ou ação
- g+h

## 073 · Representação do conhecimento · Discursiva curta

Qual é a função do motor de inferência?



## 074 · Representação do conhecimento · Discursiva curta

Para que serve a memória de trabalho?



## 075 · Representação do conhecimento · Execução de algoritmo

Fato A e regras A→B, B→C, C→D. Qual sequência forward?

- D→A
- B→A→D→C
- A→B→C→D
- D→C→B→A

## 076 · Representação do conhecimento · Execução de algoritmo

Para provar D com A→B, B→C, C→D e fato A, qual é a sequência de submetas backward?

- A, B, C, D
- C, A, D, B
- A, D
- D, C, B, A

## 077 · Representação do conhecimento · Associação

Associe Forward e Backward ao ponto de partida.



## 078 · Representação do conhecimento · Múltipla escolha

Rex é cachorro; cachorro é animal. Qual inferência?

- Rex é professor
- Nenhum cachorro é animal
- Todo animal é Rex
- Rex é animal

## 079 · Representação do conhecimento · Discursiva curta

Em rede semântica, o que representam nós e ligações?



## 080 · Representação do conhecimento · Múltipla escolha

Uma ficha Aluno com nome, idade, curso e período exemplifica qual técnica?

- Frame
- Lista fechada
- Função heurística
- BFS

## 081 · Representação do conhecimento · Múltipla escolha

Frame: Liga=SIM e Exibe_Imagem=NÃO. Pela regra da aula, qual possível problema?

- Custo elevado
- Memória RAM ou vídeo
- Aluno reprovado
- Conectividade de rede obrigatoriamente

## 082 · Representação do conhecimento · Verdadeiro/falso

Conecta_Internet=NÃO INFORMADO é igual a Conecta_Internet=NÃO. V ou F?

- Falso
- Verdadeiro

## 083 · Representação do conhecimento · Discursiva curta

O que uma ontologia define?



## 084 · Representação do conhecimento · Múltipla escolha

Notebook é Computador; Computador é Eletrônico. Isso contribui para qual recurso de uma ontologia?

- Hierarquia de conceitos
- Custo uniforme
- Backtracking
- Fila LIFO

## 085 · Representação do conhecimento · Discursiva curta

Escreva uma tripla de conhecimento sobre Rafael e Interestelar.



## 086 · Representação do conhecimento · Discursiva curta

Por que A Origem pode ser recomendado após Interestelar no exemplo?



## 087 · Representação do conhecimento · Múltipla escolha

Qual descrição corresponde à IA simbólica?

- Somente fila FIFO
- Somente imagens
- Conhecimento em símbolos e regras explícitas
- Somente pesos aprendidos sem regras explícitas

## 088 · Representação do conhecimento · Múltipla escolha

Qual descrição corresponde às redes neurais?

- Aprendem representações numéricas a partir dos dados
- Somente triplas manuais
- Sempre regras escritas por especialista
- Sempre totalmente interpretáveis

## 089 · Representação do conhecimento · Múltipla escolha

Qual é a negação de ∀x P(x)?

- ∃x P(x)
- ∃x ¬P(x)
- ∀x ¬P(x)
- ¬∃x P(x)

## 090 · Representação do conhecimento · Múltipla escolha

Regra nota≥6 E frequência≥75% → APROVADO. João(7,80%), Maria(5,90%), Pedro(8,60%): quem satisfaz a regra?

- Pedro
- Maria
- Os três
- João

## 091 · Mistas · Associação

Associe BFS, DFS, Custo Uniforme, Gulosa e A* aos critérios.



## 092 · Mistas · Discursiva curta

Um robô tem um mapa com paredes e deseja chegar a G. Diferencie representação e busca.



## 093 · Mistas · Cálculo

A fronteira possui X(g=9,h=1), Y(g=3,h=5). Quem Gulosa e A* escolhem, respectivamente?

- Y e X
- Y e Y
- X e Y
- X e X

## 094 · Mistas · Verdadeiro/falso

A* com h=0 torna-se BFS mesmo com custos de aresta diferentes. V ou F?

- Verdadeiro
- Falso

## 095 · Mistas · Verdadeiro/falso

A→B e fato B permitem concluir A por lógica apenas. V ou F?

- Verdadeiro
- Falso

## 096 · Mistas · Cálculo

No mapa original, o nó (2,2) foi alcançado com g=4. Para G=(4,4), calcule h Manhattan e f.

- h=0 e f=4
- h=8 e f=12
- h=4 e f=8
- h=4 e f=4

## 097 · Mistas · Cálculo

Um caminho tem 9 posições consecutivas e custo 1 por movimento. Qual custo?

- 8
- 10
- 1
- 9

## 098 · Mistas · Múltipla escolha

Qual técnica combina naturalmente ficha de atributos e regras para diagnóstico de computador?

- Somente Manhattan
- Pilha sem atributos
- Frames com motor de inferência
- BFS sem base de fatos

## 099 · Mistas · Verdadeiro/falso

P é verdadeiro e Q é falso. Qual o valor de P→Q?

- Verdadeiro
- Falso

## 100 · Mistas · Discursiva curta

Por que uma heurística útil não substitui o teste de objetivo?



# Gabarito comentado

**001. Conjunto de estados possíveis** S reúne configurações; s0 é apenas a configuração inicial. (Aula 05, p. 2–37)

**002. Estado é configuração; nó é estrutura do algoritmo.** Um nó pode guardar estado, pai, ação, profundidade e custo. (Aula 05, p. 2–37)

**003. Falso** Ela contém nós descobertos que aguardam expansão. (Aula 05, p. 2–37)

**004. Fila FIFO** O primeiro inserido é o primeiro removido. (Aula 05, p. 2–37)

**005. Pilha LIFO** O último inserido é o primeiro removido. (Aula 05, p. 2–37)

**006. A,B,C,D,E,F,G,H** A BFS retira por níveis, com vizinhos na ordem dada. (Aula 05, p. 2–37)

**007. A→B→E→H** O caminho vem dos pais de H, não da lista de visitas. (Aula 05, p. 2–37)

**008. C,D,E** C aguardava; D e E entram ao final. (Aula 05, p. 2–37)

**009. D** O topo fica D: pilha [C,E,D]. (Aula 05, p. 2–37)

**010. A,B,D,E,H** Após D sem filhos, retorna a E; H encerra a busca. (Aula 05, p. 2–37)

**011. C** O último inserido fica no topo. (Aula 05, p. 2–37)

**012. Verdadeiro** Minimizar passos equivale a minimizar o custo nessa condição. (Aula 05, p. 2–37)

**013. Falso** A profundidade do ramo não é critério de menor custo ou menor número de passos. (Aula 05, p. 2–37)

**014. Pode seguir um ramo infinito sem explorar a alternativa com solução.** Controlar ciclos não elimina a possibilidade de infinitos estados distintos. (Aula 05, p. 2–37)

**015. Retornar para explorar uma alternativa pendente.** Ao encerrar um ramo, a DFS retoma outro ramo disponível. (Aula 05, p. 2–37)

**016. 9** Somamos 3+4+2=9. (Aula 05, p. 2–37)

**017. 3** Há três arestas desde A, cuja profundidade é zero. (Aula 05, p. 2–37)

**018. Menor g(n)** Usa custo real acumulado, com fila de prioridade. (Aula 05, p. 2–37)

**019. A→C→D→G** Três passos podem custar menos do que dois. (Aula 05, p. 2–37)

**020. C** 2 é o menor custo acumulado. (Aula 05, p. 2–37)

**021. Falso** O limite impede expandir além da profundidade 2. (Aula 05, p. 2–37)

**022. 0,1,2,3,…** Cada execução repete DFS limitada com limite maior. (Aula 05, p. 2–37)

**023. Memória da DFS e busca de soluções rasas da BFS** Repete buscas limitadas para encontrar a menor profundidade. (Aula 05, p. 2–37)

**024. Gerar predecessores** Uma frente avança desde o início e outra no sentido inverso. (Aula 05, p. 2–37)

**025. 243** 3^5=243. (Aula 05, p. 2–37)

**026. 364** 1+3+9+27+81+243=364. (Aula 05, p. 2–37)

**027. b: ramificação; d: profundidade da solução mais próxima; m: profundidade máxima.** São os parâmetros empregados na análise de busca da aula. (Aula 05, p. 2–37)

**028. Registrar estados explorados e controlar repetições.** O conjunto permite reconhecer o retorno ao mesmo estado. (Aula 05, p. 2–37)

**029. Visitas podem pertencer a ramos diferentes e não ter arestas entre si.** A solução é reconstruída pelos pais, preservando as transições. (Aula 05, p. 2–37)

**030. A→B→D→G→I** G é descoberto via D antes de E; I é descoberto via G. (Aula 05, p. 2–37)

**031. Estimativa do custo restante até o objetivo** g mede o custo já percorrido; h estima o que falta. (Aula 06, p. 2–23)

**032. Menor h(n)** Ela ignora g na escolha, embora o custo do caminho possa ser calculado. (Aula 06, p. 2–23)

**033. f(n)=g(n)+h(n)** Soma gasto real e estimativa restante. (Aula 06, p. 2–23)

**034. 11** 4+7=11. (Aula 06, p. 2–23)

**035. 9** h=f−g=15−6. (Aula 06, p. 2–23)

**036. 8** O custo acumulado é 3+5. (Aula 06, p. 2–23)

**037. 8** 5+3=8, conforme exemplo da aula. (Aula 06, p. 2–23)

**038. 8** 4+4=8. (Aula 06, p. 2–23)

**039. 5** 2+3=5. (Aula 06, p. 2–23)

**040. 9** 5+4=9. (Aula 06, p. 2–23)

**041. 5** √(9+16)=5. (Aula 06, p. 2–23)

**042. √34 ≈ 5,83** √(25+9)=√34. (Aula 06, p. 2–23)

**043. B** Escolhe a menor estimativa, 5. (Aula 06, p. 2–23)

**044. B** B e E têm f=8; C tem f=9; desempate favorece B. (Aula 06, p. 2–23)

**045. A→C→E→G, custo 11** C tem h menor que B; E vence F no desempate; depois G tem h=0. (Aula 06, p. 2–23)

**046. Nós descobertos ainda não expandidos, priorizados por f** É a fronteira da busca. (Aula 06, p. 2–23)

**047. Estados já expandidos** Algumas implementações podem reabri-los se surgir rota melhor. (Aula 06, p. 2–23)

**048. 14** 14 supera o custo mínimo real 10. (Aula 06, p. 2–23)

**049. Verdadeiro** 7≤10; a propriedade global exige verificar todos os estados. (Aula 06, p. 2–23)

**050. Sim, pois 7≤3+4** A igualdade satisfaz a condição. (Aula 06, p. 2–23)

**051. Não, pois 8>3+4** Uma única violação basta para mostrar inconsistência. (Aula 06, p. 2–23)

**052. Verdadeiro** A aula apresenta essa implicação; a apostila explicita a condição no objetivo. (Aula 06, p. 2–23)

**053. Busca de Custo Uniforme** f=g+0=g. (Aula 06, p. 2–23)

**054. Falso** A aula explica que a superestimação pode retirar essa garantia. (Aula 06, p. 2–23)

**055. O(b^m)** b é ramificação e m profundidade máxima. (Aula 06, p. 2–23)

**056. O(b^d)** É o limite exponencial apresentado no slide; a qualidade da heurística afeta a prática. (Aula 06, p. 2–23)

**057. 8** 4+4=8. (Aula 06, p. 2–23)

**058. 8** Caminho: (0,0),(0,1),(0,2),(1,2),(2,2),(2,3),(2,4),(3,4),(4,4). (Aula 06, p. 2–23)

**059. 12** O desvio passa pela esquerda da linha 2 e pela última linha; h(S) segue 8. (Aula 06, p. 2–23)

**060. g: quanto gastei; h: quanto falta estimado; f: total estimado.** g é real acumulado; h é previsão; f é sua soma. (Aula 06, p. 2–23)

**061. Dado** É um valor isolado sem interpretação contextual. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**062. Informação** O valor ganhou contexto e unidade. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**063. Conhecimento** É uma relação utilizada para interpretar informações no exemplo didático. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**064. Inferência** Uma regra foi aplicada a um fato. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**065. Fatos, regras, relações, conceitos e propriedades.** São as categorias apresentadas na Aula 03, p. 11. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**066. Declarativo** Declara o que se sabe. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**067. Procedural** Descreve como executar uma tarefa. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**068. Entidade João; propriedade idade; valor 25.** A representação explicita componentes de uma informação. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**069. Mortal(Sócrates)** A regra universal se aplica ao fato específico. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**070. Predicado de propriedade** Atribui uma propriedade à entidade Maria. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**071. Falso** A ordem dos argumentos determina a direção da relação. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**072. SE condição ENTÃO conclusão ou ação** As condições determinam quando aplicar a regra. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**073. Aplicar regras aos fatos para gerar conclusões.** Ele seleciona regras apropriadas e produz resultados. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**074. Guardar fatos do caso e resultados intermediários.** É o contexto corrente usado pelo motor de inferência. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**075. A→B→C→D** Parte dos fatos para derivar consequências. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**076. D, C, B, A** Parte da conclusão desejada até alcançar um fato; depois confirma a cadeia. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**077. Forward: fatos; Backward: hipótese/meta.** Um explora consequências, outro procura provas de uma consulta. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**078. Rex é animal** A hierarquia permite herança. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**079. Nós: conceitos/entidades; ligações: relações.** A semântica das ligações define o significado do grafo. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**080. Frame** Frames organizam objetos ou situações em atributos. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**081. Memória RAM ou vídeo** É exatamente a conclusão da regra de suporte apresentada. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**082. Falso** Ausência de informação não equivale ao valor negativo. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**083. Conceitos, categorias, propriedades, relações e restrições do domínio.** Pode incluir hierarquia e vocabulário formal. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**084. Hierarquia de conceitos** Permite relacionar categorias mais específicas e mais gerais. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**085. Rafael → gostou → Interestelar** Tripla é sujeito, relação e objeto; este exemplo está na aula. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**086. Compartilha diretor e gênero no grafo.** As relações fornecem evidência de afinidade, sem garantir preferência. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**087. Conhecimento em símbolos e regras explícitas** A aula contrasta com representações aprendidas pelas redes. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**088. Aprendem representações numéricas a partir dos dados** O treinamento ajusta pesos; o conhecimento pode ser distribuído. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**089. ∃x ¬P(x)** Troca ∀ por ∃ e nega o predicado. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**090. João** Maria falha na nota e Pedro na frequência; a regra dada só conclui aprovação. (Aula 03, p. 2–44; Aula 04, p. 6–39)

**091. BFS: FIFO; DFS: LIFO; Custo Uniforme: g; Gulosa: h; A*: g+h.** A seleção do próximo nó define a estratégia. (Aulas 03–06; contexto Aula 02)

**092. A representação descreve estados, ações e obstáculos; a busca escolhe uma sequência de ações.** Modelar o problema precede aplicar a estratégia. (Aulas 03–06; contexto Aula 02)

**093. X e Y** Gulosa usa h: 1<5. A* usa f: X=10,Y=8. (Aulas 03–06; contexto Aula 02)

**094. Falso** Torna-se Custo Uniforme; só sob condições adicionais sua ordem coincide com BFS. (Aulas 03–06; contexto Aula 02)

**095. Falso** É a inversão indevida da implicação; B pode ter outra causa. (Aulas 03–06; contexto Aula 02)

**096. h=4 e f=8** h=2+2=4; f=4+4=8. (Aulas 03–06; contexto Aula 02)

**097. 8** Entre 9 posições há 8 transições. (Aulas 03–06; contexto Aula 02)

**098. Frames com motor de inferência** O frame guarda sintomas e o motor aplica regras. (Aulas 03–06; contexto Aula 02)

**099. Falso** É o único caso falso da implicação. (Aulas 03–06; contexto Aula 02)

**100. Ela estima custo restante; o teste verifica se o estado satisfaz a meta.** Uma estimativa baixa não prova que se chegou ao destino. (Aulas 03–06; contexto Aula 02)