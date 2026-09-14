/* Implementação didática própria; fontes e convenções em auditoria.md. */
(function(root){
'use strict';
function graphScenario(id){
 let adj={},h={},pos={},start='A',goal='H',title='',grid=null;
 const directed=(a,b,c=1)=>{(adj[a]??=[]).push([b,c]);adj[b]??=[];};
 const edge=(a,b,c)=>{directed(a,b,c);directed(b,a,c);};
 if(id==='arvore'||id==='rotas'){
  const data=id==='arvore'?{A:['B','C'],B:['D','E'],C:['F','G'],D:[],E:['H'],F:[],G:[],H:[]}:{A:['B','C'],B:['D','E'],C:['F'],D:['G'],E:['G','H'],F:['H'],G:['I'],H:['I'],I:[]};
  for(const [a,ns] of Object.entries(data)){adj[a]??=[];ns.forEach(b=>directed(a,b));}
  goal=id==='rotas'?'I':'H';title=id==='arvore'?'Árvore · Aula 05, p. 20 e 25':'Rotas · Aula 05, p. 37';
  pos={A:[340,45],B:[180,140],C:[500,140],D:[80,240],E:[240,240],F:[430,240],G:[600,240],H:[340,335],I:[500,415]};
  for(const n of Object.keys(adj))h[n]=0;
 }else if(id==='ponderado'){
  title='Grafo ponderado · Aula 06, p. 11 e 16';goal='G';
  [['A','B',2],['A','C',4],['B','D',5],['B','E',2],['C','E',1],['C','F',5],['D','G',3],['E','G',6],['F','G',4]].forEach(e=>edge(...e));
  h={A:7,B:6,C:5,D:2,E:4,F:4,G:0};pos={A:[65,230],B:[240,95],C:[240,360],D:[440,65],E:[440,220],F:[440,390],G:[655,220]};
 }else{
  title='Robô · Aula 06, p. 22–23'+(id==='mapa'?'':' · variação elaborada');
  grid=['S..#.','##.#.','.....','.###.','....G'].map(r=>r.split(''));
  if(id==='desvio')grid[2][3]='#';if(id==='atalho')grid[1][0]='.';if(id==='bloqueado')grid[1][2]='#';
  start='0,0';goal='4,4';
  for(let r=0;r<5;r++)for(let c=0;c<5;c++)if(grid[r][c]!=='#'){
   let a=`${r},${c}`;adj[a]=[];h[a]=Math.abs(r-4)+Math.abs(c-4);pos[a]=[150+c*90,45+r*90];
   for(const [dr,dc] of [[-1,0],[1,0],[0,-1],[0,1]]){let nr=r+dr,nc=c+dc;if(nr>=0&&nr<5&&nc>=0&&nc<5&&grid[nr][nc]!=='#')adj[a].push([`${nr},${nc}`,1]);}
  }
 }
 return {adj,h,pos,start,goal,title,grid,id};
}
function search(s,algorithm){
 let serial=0,open=[{state:s.start,g:0,depth:0,path:[s.start],order:serial++}],closed=new Set(),best={[s.start]:0},selected=[],expanded=[],steps=[];
 const rank=n=>algorithm==='ucs'?n.g:algorithm==='greedy'?s.h[n.state]:algorithm==='astar'?n.g+s.h[n.state]:0;
 const ordered=()=>algorithm==='dfs'?[...open].reverse():['ucs','greedy','astar'].includes(algorithm)?[...open].sort((a,b)=>rank(a)-rank(b)||a.order-b.order):[...open];
 const snap=(current,message,done=false,success=false,inserted=[])=>steps.push({current:current?{...current,h:s.h[current.state],f:current.g+s.h[current.state]}:null,open:ordered().map(n=>({...n,h:s.h[n.state],f:n.g+s.h[n.state]})),closed:[...closed],selected:[...selected],expanded:[...expanded],message,done,success,inserted});
 snap(null,'O nó inicial entra na fronteira. A tabela mostra o próximo a sair primeiro.');
 while(open.length){
  let n;if(algorithm==='dfs')n=open.pop();else if(algorithm==='bfs')n=open.shift();else{open.sort((a,b)=>rank(a)-rank(b)||a.order-b.order);n=open.shift();}
  selected.push(n.state);
  if(n.state===s.goal){snap(n,'Objetivo retirado da fronteira. Caminho reconstruído; seus sucessores não são expandidos.',true,true);return steps;}
  closed.add(n.state);expanded.push(n.state);let inserted=[];
  const neighbors=algorithm==='dfs'?[...s.adj[n.state]].reverse():s.adj[n.state];
  for(const [v,cost] of neighbors){
   let g=n.g+cost,old=open.find(x=>x.state===v);
   if(['ucs','astar'].includes(algorithm)){
    if(best[v]!==undefined&&g>=best[v])continue;
    best[v]=g;if(closed.has(v))closed.delete(v);if(old)open.splice(open.indexOf(old),1);
   }else if(closed.has(v)||old)continue;
   open.push({state:v,g,depth:n.depth+1,path:[...n.path,v],order:old?old.order:serial++});inserted.push(v);
  }
  snap(n,inserted.length?'Sucessores inseridos ou atualizados: '+inserted.join(' · '):'Nenhum sucessor novo. Retome uma alternativa pendente.',false,false,inserted);
 }
 snap(null,'Fronteira vazia: não existe caminho até o objetivo neste cenário.',true,false);return steps;
}
const api={graphScenario,search};root.IARN_SEARCH=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
