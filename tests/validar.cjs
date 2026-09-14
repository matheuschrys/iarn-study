const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {graphScenario,search}=require('../src/busca.js'),data=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/dados.json')));
let checks=0;function check(condition,message){assert.ok(condition,message);checks++;}
check(data.questions.length===100,'100 questões');check(data.cards.length===120,'120 cartões');
for(const [theme,count] of [['Busca não informada',30],['Busca informada',30],['Representação do conhecimento',30],['Mistas',10]])check(data.questions.filter(q=>q.theme===theme).length===count,'Distribuição: '+theme);
for(const theme of ['Busca não informada','Busca informada','Representação do conhecimento'])check(data.cards.filter(c=>c.theme===theme).length===40,'40 cartões: '+theme);
check(new Set(data.questions.map(q=>q.id)).size===100,'IDs únicos');check(new Set(data.cards.map(q=>q.id)).size===120,'IDs cartões únicos');
for(const q of data.questions){check(q.answer&&q.explanation&&q.source,'Gabarito e fonte presentes');check(q.options.filter(x=>x===q.answer).length===1,'Gabarito único '+q.id);check(new Set(q.options).size===q.options.length,'Opções distintas '+q.id);}
const expected={arvore:{cost:3,bfs:'ABCDEFGH',dfs:'ABDEH'},rotas:{cost:4,bfs:'ABCDEFGHI',dfs:'ABDGI'},ponderado:{cost:10,greedy:11},mapa:{cost:8},desvio:{cost:12},atalho:{cost:8},bloqueado:{cost:null}};
// Oráculo independente por relaxação de arestas (Bellman-Ford).
function optimum(s){let d=Object.fromEntries(Object.keys(s.adj).map(k=>[k,Infinity]));d[s.start]=0;for(let i=0;i<Object.keys(s.adj).length-1;i++)for(const [u,ns] of Object.entries(s.adj))for(const [v,w] of ns)d[v]=Math.min(d[v],d[u]+w);return d[s.goal];}
for(const [id,exp] of Object.entries(expected))for(const algorithm of ['bfs','dfs','ucs','greedy','astar']){
 const s=graphScenario(id),frames=search(s,algorithm),end=frames.at(-1);check(end.done,'Termina '+id+algorithm);
 if(exp.cost===null){check(!end.success,'Falha sem solução');continue;}check(end.success,'Encontra objetivo');let p=end.current.path,cost=0;
 for(let i=1;i<p.length;i++){let e=s.adj[p[i-1]].find(([v])=>v===p[i]);check(!!e,'Caminho só usa arestas válidas');cost+=e[1];}
 check(cost===end.current.g,'Custo reconstruído confere');check(p.length-1===end.current.depth,'Profundidade confere');
 if(['ucs','astar'].includes(algorithm))check(cost===optimum(s),'Ótimo versus oráculo '+id);
 if(exp[algorithm]&&typeof exp[algorithm]==='string')check(end.selected.join('')===exp[algorithm],'Ordem didática');
 if(id==='ponderado'&&algorithm==='greedy')check(cost===11,'Gulosa custa 11');
 for(const f of frames){check(new Set(f.open.map(n=>n.state)).size===f.open.length,'Sem duplicatas pendentes');for(const n of f.open)check(n.f===n.g+n.h,'f=g+h');}
}
const weighted=graphScenario('ponderado'),steps=search(weighted,'astar');check(steps.at(-1).selected.join('')==='ABECDG','Ordem A* da apostila');check(steps.at(-1).current.path.join('')==='ABEG','Desempate por descoberta');
// Admissível, inconsistente: exige reabrir A depois de expandi-lo.
const reopen={start:'S',goal:'G',adj:{S:[['A',3],['B',1]],A:[['G',3]],B:[['A',1]],G:[]},h:{S:0,A:0,B:3,G:0}};
const re=search(reopen,'astar');check(re.at(-1).current.g===5,'Reabertura encontra custo 5');check(re.at(-1).expanded.filter(x=>x==='A').length===2,'A reaberto');
const zero={...weighted,h:Object.fromEntries(Object.keys(weighted.h).map(k=>[k,0]))};check(search(zero,'astar').at(-1).selected.join()==search(zero,'ucs').at(-1).selected.join(),'h=0 equivale a UCS');
for(const s of ['mapa','desvio','atalho']){let g=graphScenario(s);for(const [u,ns] of Object.entries(g.adj))for(const [v,c] of ns)check(g.h[u]<=c+g.h[v],'Manhattan consistente');}
check(Math.abs(2-7)+Math.abs(3-6)===8,'Manhattan do slide');check(Math.abs(-2-3)+Math.abs(1+3)===9,'Manhattan negativa');check(Math.hypot(3,4)===5,'Euclidiana 3-4-5');check(Math.hypot(5,3).toFixed(2)==='5.83','Euclidiana do slide');check(3**5===243&&[0,1,2,3,4,5].reduce((a,i)=>a+3**i,0)===364,'Complexidade numérica');
// Conferência programática dos gabaritos numéricos com operação independente.
for(const [id,result] of [[16,3+4+2],[17,3],[25,3**5],[26,364],[34,4+7],[35,15-6],[36,3+5],[37,8],[38,8],[39,5],[40,9],[41,5],[57,8],[58,8],[59,12],[97,8]])check(data.questions.find(q=>q.id===id).answer===String(result),'Gabarito numérico '+id);
console.log(`${checks} verificações passaram: dados, distribuição, 35 execuções, caminhos, custos, prioridades, reabertura, heurística zero e cálculos.`);
