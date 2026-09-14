const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..');
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(root,'src/pratica.js'),'utf8'),context);
let checks=0;
function check(value,message){assert.ok(value,message);checks++;}
const distances=context.distances;
check(distances([2,3],[7,6]).manhattan===8,'Exemplo de Manhattan da professora');
check(Math.abs(distances([2,3],[7,6]).euclidean-Math.sqrt(34))<1e-12,'Euclidiana dos slides');
check(distances([-2,-3],[1,1]).manhattan===7,'Distâncias com coordenadas negativas');
check(distances([3,4],[3,4]).euclidean===0,'Pontos coincidentes');
const now=Date.parse('2026-09-14T12:00:00Z');
let card=context.scheduleCard(null,false,now);
check(Date.parse(card.due)===now+600000,'Erro agenda 10 minutos');
check(!context.cardDue(card,now),'Erro recente não vence imediatamente');
check(context.cardDue(card,now+600000),'Revisão vence no limite');
for(const days of [1,3,7,14,30,30]){card=context.scheduleCard(card,true,now);check(Date.parse(card.due)===now+days*86400000,'Intervalo '+days);}
card=context.scheduleCard(card,false,now);check(card.streak===0&&!card.known,'Erro reinicia sequência');
const order=context.reviewOrder([{id:1},{id:2},{id:3}],{2:{known:false},3:{known:true,due:'2999-01-01T00:00:00Z'}});
check(order.join(',')==='2,1,3','Erros antes de novos e revisões futuras');
const qs=JSON.parse(fs.readFileSync(path.join(root,'data/questions.json')));
check(qs.length===100,'100 questões no novo esquema');
for(const q of qs){check(['id','tema','subtema','dificuldade','enunciado','alternativas','correta','explicacao'].every(k=>q[k]!==undefined),'Esquema questão '+q.id);if(q.alternativas.length)check(q.alternativas.includes(q.correta),'Gabarito pertence às alternativas');}
const cards=JSON.parse(fs.readFileSync(path.join(root,'data/flashcards.json')));
check(cards.length===120,'120 cartões');
for(const c of cards)check(['id','tema','frente','verso','nivel'].every(k=>c[k]!==undefined),'Esquema cartão '+c.id);
const original=JSON.parse(fs.readFileSync(path.join(root,'data/dados.json')));
for(const theme of ['Busca não informada','Busca informada','Representação do conhecimento'])check(original.questions.filter(q=>q.theme===theme&&q.options.length>1).length>=20,'Banco suficiente para simulado de '+theme);
console.log(`${checks} verificações passaram: distâncias, repetição, prioridade, esquemas e bancos por tema.`);
