/* Testes da lógica da aplicação em VM. Não substituem um navegador ou testes de layout. */
const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
let storage={};let checks=0;
function run(){
 const elements=new Map();
 class Element{constructor(id){this.id=id;this.value='';this.disabled=false;this.hidden=false;this.classList={toggle(){}};}set innerHTML(html){this.html=html;for(const match of html.matchAll(/id="([^"]+)"/g))elements.set('#'+match[1],new Element(match[1]));}get innerHTML(){return this.html||'';}querySelectorAll(){return [];}querySelector(sel){return document.querySelector(sel);}focus(){} insertAdjacentHTML(position,html){this.innerHTML=this.innerHTML+html;} click(){this.onclick?.();}}
 const document={querySelector(sel){if(!elements.has(sel))elements.set(sel,new Element(sel));return elements.get(sel);},querySelectorAll(){return [];},createElement(){return new Element('');}};
 const context={console,document,localStorage:{getItem:k=>storage[k],setItem:(k,v)=>storage[k]=v},location:{hash:'#inicio'},setInterval,clearInterval,setTimeout,URL,Blob};context.window=context;context.window.addEventListener=()=>{};context.window.scrollTo=()=>{};
 vm.createContext(context);for(const file of ['../data/dados.js','../data/conteudo.js','../src/busca.js','../src/pratica.js','../src/app.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,file),'utf8'),context);
 return {context,ev:code=>vm.runInContext(code,context),elements};
}
function check(c,m){assert.ok(c,m);checks++;}
let {ev,elements}=run();
for(const hash of ['inicio','teoria','nao-informada','informada','conhecimento','algoritmos','questoes','flashcards','simulado','resumo','erros','fontes']){ev(`location.hash='#${hash}';route();`);check(elements.get('#main').innerHTML.length>100,'Rota renderiza HTML: '+hash);}
// Sorteio estratificado, sem repetição; todos são automaticamente corrigíveis.
for(let n=0;n<30;n++){ev('newExam()');check(ev('progress.draft.ids.length')===20,'20 questões');check(ev('new Set(progress.draft.ids).size')===20,'Sem repetição');check(ev('progress.draft.ids.every(id=>questions.find(q=>q.id===id).options.length>1)'),'Só objetivas');for(const theme of ['Busca não informada','Busca informada','Representação do conhecimento'])check(ev(`progress.draft.ids.filter(id=>questions.find(q=>q.id===id).theme===${JSON.stringify(theme)}).length`)===6,'6 por tema');}
// Finalização incompleta bloqueada sem apagar rascunho.
elements.get('#finish-exam').click();check(ev('progress.draft!==null'),'Rascunho preservado');check(elements.get('#exam-warning').textContent.includes('20'),'Aviso incompleto');
// 15 certas e 5 erradas -> nota 7,5; histórico e erros salvos.
ev(`progress.draft.ids.forEach((id,i)=>{const q=questions.find(q=>q.id===id);progress.draft.answers[id]=i<15?q.answer:q.options.find(o=>o!==q.answer);});`);
elements.get('#finish-exam').click();check(ev('progress.exams.at(-1).score')===7.5,'Nota 7,5');check(ev('progress.exams.at(-1).correct')===15,'15 acertos');check(ev('progress.draft')===null,'Rascunho encerrado');check(ev('stats().errors')===5,'5 erros pendentes');check(ev('stats().total')===20,'20 respostas registradas');
ev(`const failed=questions.find(q=>progress.answers[q.id]?.correct===false);record(failed,true,failed.answer);`);check(ev('stats().errors')===4,'Correção retira erro');
ev(`progress.cards[1]={known:true};progress.studied.teoria=true;save();`);check(ev('stats().cards')===1,'Cartão salvo');check(ev('stats().studied')===1,'Seção salva');
const restored=run();check(restored.ev('stats().errors')===4,'Erros após recarga');check(restored.ev('stats().cards')===1,'Cartão após recarga');check(restored.ev('progress.exams.length')===1,'Histórico após recarga');
// Controles do simulador trocam snapshots deterministicamente.
ev('simulator()');check(ev('simStep')===0,'Simulador inicia em 0');elements.get('#next').click();check(ev('simStep')===1,'Avançar');elements.get('#back').click();check(ev('simStep')===0,'Voltar');elements.get('#next').click();elements.get('#reset').click();check(ev('simStep')===0,'Reiniciar');
check(ev(`IARN_CONTENT.sections[2].includes('Busca não informada')`),'Teoria mapeada');check(ev(`IARN_CONTENT.summary.includes('20 coisas')`),'Resumo contém 20 itens');
for(const theme of ['Busca não informada','Busca informada','Representação do conhecimento']){
 ev(`examTheme=${JSON.stringify(theme)};newExam();`);
 check(ev('progress.draft.ids.length')===20,'20 no filtro');
 check(ev('new Set(progress.draft.ids).size')===20,'Sem repetição no filtro');
 check(ev(`progress.draft.ids.every(id=>questions.find(q=>q.id===id).theme===${JSON.stringify(theme)})`),'Tema correto');
}
ev('simulator()');elements.get('#history-step').onchange({target:{value:'3'}});check(ev('simStep')===3,'Salto de histórico');
ev('save()');check(typeof ev('progress.lastStudy')==='string','Último estudo salvo');
console.log(`${checks} verificações de lógica passaram: 12 rotas, sorteios gerais e por tema, finalização, nota, erros, armazenamento e histórico. DOM simulado; layout não verificado aqui.`);
