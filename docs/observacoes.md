# Observações sobre os slides

A base de estudo foi reaproveitada de material-iarn. Os seis PDFs da pasta pai foram usados: 202 páginas, sendo 23 + 36 + 44 + 39 + 37 + 23. Referências são números de página dos PDFs. Os originais não foram alterados.

- Aula 05, p. 25: o título diz busca em largura, mas a sequência da aula e a visita A,B,D,E,H correspondem a DFS. O material identifica a execução e registra a divergência.
- Aula 05, p. 29: a tabela registra espaço da DFS como O(b^m). Essa formulação foi preservada na teoria. O complemento explica O(b·m) para a implementação usual de DFS em árvore; manter visitados em grafo também consome memória.
- Aula 06, p. 3: a comparação resume não informada como ordem/profundidade; Custo Uniforme usa menor g. Isso é distinguido na teoria e no simulador.
- Aula 06, p. 18: a frase “Toda heurística consistente é admissível” é mantida. O complemento explicita h(objetivo)=0 e a desigualdade em todas as transições de um caminho até o objetivo.
- Aula 06, p. 9 e p. 11/16: são dois exemplos de grafos diferentes. O simulador usa p. 11/16, arestas bidirecionais e desempate por descoberta. A* e Custo Uniforme reabrem estados quando surge g melhor.
- Aula 04, p. 21: a definição formal de satisfatível é pelo menos uma interpretação verdadeira, incluindo tautologias. A frase da imagem que contrapõe satisfatível e tautologia é uma simplificação; contingência é que exclui tautologias.
- Aula 04, p. 27: o texto cita administrador sem definir seu símbolo, e define R como laboratório aberto sem usá-lo na condição de acesso. Não se inventou uma regra adicional atribuída à professora.
- Aula 04, p. 35–36: as fórmulas simplificadas pressupõem domínio de alunos. Quando o domínio é amplo, deve-se explicitar Aluno(x), como nos exemplos p. 34 e 39.

Exercícios novos de heurísticas, repetição espaçada, classificação de dificuldade e tentativas no mapa são elaboração didática. Um teste de consistência de uma única aresta só verifica aquela transição. No mapa original, quatro movimentos custam 1 e Manhattan orienta A*; o caminho ótimo custa 8.

As questões e flashcards são material de estudo, não questões oficiais da prova. A auditoria herdada, revisada, fornece o mapa temático e outras convenções.
