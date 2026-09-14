// Gera os JSONs com o esquema do prompt a partir da base reaproveitada.
// Sem dependências. Não modifica material-iarn nem os PDFs.
import fs from 'node:fs';
import vm from 'node:vm';
const root = new URL('./', import.meta.url);
const read = name => fs.readFileSync(new URL(name, root), 'utf8');
const write = (name, value) => fs.writeFileSync(new URL(name, root), JSON.stringify(value, null, 2) + '\n');
const data = JSON.parse(read('dados.json'));
fs.writeFileSync(new URL('dados.js', root), 'window.IARN_DATA=' + JSON.stringify(data) + ';\n');
const themes = {'Busca não informada':'busca-nao-informada','Busca informada':'busca-informada','Representação do conhecimento':'representacao-conhecimento','Mistas':'mistas'};
const subtheme = q => {
  const text=q.prompt.toLowerCase();
  for(const [regex,label] of [[/manhattan|euclidiana/,'Distâncias'],[/admiss|consist/,'Propriedades heurísticas'],[/a\*/,'A*'],[/gulosa/,'Busca Gulosa'],[/bfs|largura|fifo/,'BFS'],[/dfs|profundidade|lifo/,'DFS e profundidade'],[/uniforme/,'Custo Uniforme'],[/forward|backward|encadeamento/,'Encadeamentos'],[/frame/,'Frames'],[/ontolog|semântic|grafo de conhecimento/,'Representações relacionais'],[/predic|lógica|proposi|quantific/,'Lógica']]) if(regex.test(text))return label;
  return q.theme==='Mistas'?'Integração de conceitos':'Fundamentos';
};
write('questions.json',data.questions.map(q=>({id:q.id,tema:themes[q.theme],subtema:subtheme(q),dificuldade:/execu|cálculo|discursiva/i.test(q.kind)?'intermediária':'básica',enunciado:q.prompt,alternativas:q.options.length>1?q.options:[],correta:q.answer,explicacao:q.explanation,tipo:q.kind,fonte:q.source})));
write('flashcards.json',data.cards.map(c=>({id:c.id,tema:themes[c.theme],frente:c.front,verso:c.back,nivel:'básico',fonte:c.source})));
const context={window:{}};vm.createContext(context);vm.runInContext(read('conteudo.js'),context);
write('topics.json',context.window.IARN_CONTENT.sections.map((html,id)=>({id,titulo:html.match(/<h[12][^>]*>(.*?)<\/h[12]>/)?.[1]||`Seção ${id+1}`,html})));
write('examples.json',{fonte:'Aula 06, p. 7–8 e 22–23',pontos:[[2,3],[7,6]],manhattan:8,euclidiana:Math.sqrt(34),mapa:['S..#.','##.#.','.....','.###.','....G'],movimentos:['cima','baixo','esquerda','direita'],custo:1,heuristica:'Manhattan'});
console.log('JSONs organizados: 100 questões, 120 flashcards, tópicos e exemplos.');
