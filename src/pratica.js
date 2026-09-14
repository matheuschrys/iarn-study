'use strict';

// Complementos didáticos próprios baseados na Aula 06, p. 7–8 e 17–23.
function distances(a, b) {
  const dx = Math.abs(a[0] - b[0]), dy = Math.abs(a[1] - b[1]);
  return {manhattan: dx + dy, euclidean: Math.hypot(dx, dy)};
}
function cardDue(card, now = Date.now()) {
  return !card || !card.due || Date.parse(card.due) <= now;
}
function scheduleCard(old, known, now = Date.now()) {
  const streak = known ? Math.min((old?.streak || 0) + 1, 5) : 0;
  const delay = known ? [1, 3, 7, 14, 30][streak - 1] * 86400000 : 600000;
  return {known, streak, date: new Date(now).toISOString(), due: new Date(now + delay).toISOString()};
}
function reviewOrder(deck, saved) {
  const rank = c => !saved[c.id] ? 2 : !saved[c.id].known ? 0 : cardDue(saved[c.id]) ? 1 : 3;
  return [...deck].sort((a, b) => rank(a) - rank(b) || (Date.parse(saved[a.id]?.due) || 0) - (Date.parse(saved[b.id]?.due) || 0)).map(c => c.id);
}
function dashboardHTML() {
  const s = stats();
  const themes = [...new Set(questions.map(q => q.theme))].map(theme => {
    const answers = questions.filter(q => q.theme === theme && progress.answers[q.id]).map(q => progress.answers[q.id]);
    return {theme, count: answers.length, rate: answers.length ? answers.filter(a => a.correct).length / answers.length : 0};
  }).filter(t => t.count).sort((a, b) => b.rate - a.rate);
  const best = progress.exams.length ? Math.max(...progress.exams.map(e => e.score)).toFixed(1) : '—';
  return `<h2>Seu desempenho</h2><div class="stats">${[[s.correct,'Acertos'],[s.errors,'Erros'],[cards.filter(c => cardDue(progress.cards[c.id])).length,'Flashcards para revisar'],[progress.exams.length,'Simulados feitos'],[best,'Melhor nota']].map(([v,t])=>`<div class="stat"><strong>${v}</strong><small>${t}</small></div>`).join('')}</div><p>Tema mais forte: <strong>${themes[0]?.theme || 'Responda questões para calcular'}</strong><br>Tema mais fraco: <strong>${themes.at(-1)?.theme || 'Responda questões para calcular'}</strong></p><p class="muted">Taxas calculadas pela última resposta; em empate, segue-se a ordem dos temas. Último estudo: ${progress.lastStudy ? new Date(progress.lastStudy).toLocaleString('pt-BR') : 'Ainda não registrado'}.</p>`;
}
function examFilterHTML() {
  return `<label>Tema do simulado <select id="exam-theme">${['Todos','Busca não informada','Busca informada','Representação do conhecimento'].map(t=>`<option ${examTheme===t?'selected':''}>${t}</option>`).join('')}</select></label> `;
}
function renderHistory() {
  const s = simScenario, f = simFrames[simStep];
  $('#sim-content').insertAdjacentHTML('beforeend', `<section class="panel"><h2>Inspecionar um nó</h2><div class="toolbar">${Object.keys(s.adj).map(n=>`<button data-node="${n}">${n}</button>`).join('')}</div><p id="node-details" role="status">Selecione um nó para consultar g, h e f nesta etapa.</p><h2>Histórico completo</h2><label>Ir para etapa <select id="history-step">${simFrames.map((_,i)=>`<option value="${i}" ${simStep===i?'selected':''}>${i}</option>`).join('')}</select></label><details><summary>Ver registro de todas as etapas</summary><ol start="0">${simFrames.map((step,i)=>`<li><button data-step="${i}">Etapa ${i}</button> Atual: ${step.current?.state||'—'}; fronteira: ${step.open.map(n=>n.state).join(' · ')||'∅'}; visitados: ${step.selected.join(' · ')||'∅'}.</li>`).join('')}</ol></details></section>`);
  const jump = i => {stopAuto(); simStep = Number(i); renderStep();};
  $('#history-step').onchange = e => jump(e.target.value);
  document.querySelectorAll('[data-step]').forEach(b => b.onclick = () => jump(b.dataset.step));
  document.querySelectorAll('[data-node]').forEach(b => b.onclick = () => {
    const id = b.dataset.node;
    const node = f.open.find(n=>n.state===id) || [...simFrames.slice(0,simStep+1)].reverse().find(step=>step.current?.state===id)?.current;
    $('#node-details').textContent = node ? `${id}: g=${node.g}; h=${node.h}; f=${node.g+node.h}. ${f.open.some(n=>n.state===id)?'Na lista aberta.':f.closed.includes(id)?'Na lista fechada.':'Nó objetivo selecionado.'}` : `${id}: ainda não descoberto; g e f desconhecidos; h=${s.h[id]}.`;
  });
}
let heuristicPoints = [[2,3],[7,6]], pointTarget = 0;
function heuristicPage() {
  main.innerHTML = shell('Experimente as heurísticas','Aula 06 · p. 7–8, 17–18') + `<p class="lead">Selecione a posição atual e o objetivo para calcular h(n).</p><section class="panel"><label>Próximo ponto selecionado <select id="point-target"><option value="0">Posição atual</option><option value="1">Objetivo</option></select></label><div class="point-grid">${Array.from({length:100},(_,i)=>`<button data-point="${Math.floor(i/10)},${i%10}" aria-label="Ponto ${Math.floor(i/10)}, ${i%10}">${Math.floor(i/10)},${i%10}</button>`).join('')}</div><p id="distance-result" role="status"></p><p>Manhattan: h(n) = |xₙ − xₒ| + |yₙ − yₒ|<br>Euclidiana: h(n) = √((xₙ − xₒ)² + (yₙ − yₒ)²)</p><p class="muted">COMPLEMENTO EXPLICATIVO: aqui a grade não tem obstáculos. Na atividade com quatro movimentos e custo 1, Manhattan é um limite inferior do custo real; paredes podem aumentar o percurso.</p></section><section class="panel"><h2>Admissibilidade</h2><p>h(n) ≤ h*(n): não superestimar o custo real mínimo.</p><div id="admissible"></div></section><section class="panel"><h2>Consistência</h2><p>h(n) ≤ c(n,n′) + h(n′). Testaremos uma transição; consistência global exige todas as transições e h(objetivo)=0.</p><div id="consistent"></div></section>${footer()}`;
  const draw = () => {
    const [a,b] = heuristicPoints, d = distances(a,b);
    $('#distance-result').textContent = `Atual (${a}); objetivo (${b}). Manhattan = ${d.manhattan}; Euclidiana = ${d.euclidean.toLocaleString('pt-BR',{maximumFractionDigits:3})}.`;
    document.querySelectorAll('[data-point]').forEach(button => {const p=button.dataset.point; button.textContent=p===a.join(',')&&p===b.join(',')?'S/G':p===a.join(',')?'S':p===b.join(',')?'G':p;});
  };
  $('#point-target').value = String(pointTarget);
  $('#point-target').onchange = e => {pointTarget=Number(e.target.value);};
  document.querySelectorAll('[data-point]').forEach(b => b.onclick = () => {heuristicPoints[pointTarget]=b.dataset.point.split(',').map(Number);pointTarget=1-pointTarget;$('#point-target').value=String(pointTarget);draw();});
  draw(); heuristicExercise('admissible'); heuristicExercise('consistent');
}
function heuristicExercise(kind) {
  const random = max => Math.floor(Math.random()*max);
  const h=random(21), cost=random(10)+1, next=random(11), real=random(20)+1;
  const bound=kind==='admissible'?real:cost+next, valid=h<=bound;
  const box=$('#'+kind);
  box.innerHTML=`<p>${kind==='admissible'?`Custo real mínimo h* = ${real}; h = ${h}. Este valor é admissível?`:`h(n) = ${h}; custo c = ${cost}; h(n′) = ${next}. A desigualdade de consistência é satisfeita nesta transição?`}</p><div class="toolbar"><button data-answer="yes">Sim</button><button data-answer="no">Não</button><button data-new>Novo exercício</button></div><p class="exercise-feedback" role="status"></p>`;
  box.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{box.querySelector('.exercise-feedback').textContent=`${(b.dataset.answer==='yes')===valid?'Acertou.':'Vamos revisar.'} ${h} ≤ ${bound} é ${valid?'verdadeiro':'falso'}.${kind==='consistent'?` Limite: ${cost} + ${next} = ${bound}.`:''}`;box.querySelectorAll('[data-answer]').forEach(button=>button.disabled=true);});
  box.querySelector('[data-new]').onclick=()=>heuristicExercise(kind);
}
let activityPath = ['0,0'];
function activityPage() {
  const s=IARN_SEARCH.graphScenario('mapa');
  main.innerHTML=shell('Primeiro, encontre seu caminho','Atividade da Aula 06 · p. 22–23')+`<p class="lead">S até G, quatro direções, custo 1. Clique em uma célula vizinha livre para construir sua tentativa. A solução fica oculta até você pedir.</p><div class="activity-grid">${s.grid.flatMap((row,r)=>row.map((cell,c)=>`<button data-cell="${r},${c}" ${cell==='#'?'disabled':''} aria-label="Linha ${r}, coluna ${c}, ${cell==='#'?'obstáculo':cell}">${cell}</button>`)).join('')}</div><p id="attempt-path" role="status"></p><div class="toolbar"><button id="undo-attempt">Desfazer passo</button><button id="reset-attempt">Limpar tentativa</button><button id="reveal-activity">Revelar execução do A*</button></div><div id="activity-answer"></div>${footer()}`;
  const draw=()=>{$('#attempt-path').textContent=`Tentativa: ${activityPath.join(' → ')}. Custo: ${activityPath.length-1}.${activityPath.at(-1)===s.goal?' Objetivo alcançado! Compare com A*.':''}`;document.querySelectorAll('[data-cell]').forEach(b=>{b.classList.toggle('chosen',activityPath.includes(b.dataset.cell));b.setAttribute('aria-pressed',String(activityPath.includes(b.dataset.cell)));});};
  document.querySelectorAll('[data-cell]').forEach(b=>b.onclick=()=>{if(s.adj[activityPath.at(-1)].some(([n])=>n===b.dataset.cell)){activityPath.push(b.dataset.cell);draw();}else $('#attempt-path').textContent='Escolha uma célula livre adjacente à última posição.';});
  $('#undo-attempt').onclick=()=>{if(activityPath.length>1)activityPath.pop();draw();};
  $('#reset-attempt').onclick=()=>{activityPath=['0,0'];$('#activity-answer').innerHTML='';draw();};
  $('#reveal-activity').onclick=()=>{const frames=IARN_SEARCH.search(s,'astar'),last=frames.at(-1);$('#activity-answer').innerHTML=`<div class="panel"><h2>Solução com Manhattan</h2><p>${last.current.path.join(' → ')}</p><p>Custo mínimo: ${last.current.g}. Seu custo: ${activityPath.length-1}${activityPath.at(-1)!==s.goal?' (tentativa incompleta)':''}.</p><button id="open-activity-sim">Ver todas as etapas no simulador</button></div>`;$('#open-activity-sim').onclick=()=>{scenarioId='mapa';algorithm='astar';location.hash='#algoritmos';};};draw();
}
