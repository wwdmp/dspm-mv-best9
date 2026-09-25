const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const thumb = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
const watch = (id) => `https://www.youtube.com/watch?v=${id}`;
const MV_BY_ID = new Map(MVS.map(m => [m.id, m]));
const FINAL_SIZE = 9;
const BEST = 9;
const HEART_MAX = 30;
const BLOCK_MAX = 6;
const SAVE_KEY = "dspm-mv-best9-save-v2";   // 準決勝の形式を変えたら上げる（古い途中データと互換がないため）
const HASHTAG = "#DSPM好きMV9選";
// 公開後にGitHub PagesのURLを入れる。空なら今開いているページのURLを使う
const SITE_URL = "https://wwdmp.github.io/dspm-mv-best9/";

let state = null;

/* =========================
   共通
========================= */

function show(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0 });
  if(state && id !== "#s-start"){ state.screen = id; save(); }
}

// シード付き乱数（ひとつ戻る・途中再開で同じ組み合わせを再現するため）
function rng(seed){
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rand = Math.random){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function playLink(id){
  return `<a class="play" href="${watch(id)}" target="_blank" rel="noopener">▶ YouTube</a>`;
}

/* =========================
   途中保存
========================= */

function save(){
  if(!state) return;
  try{
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      groups: [...state.groups], hearts: [...state.hearts], seed: state.seed,
      entrants: state.entrants, answers: state.answers, seenPhase: [...state.seenPhase],
      screen: state.screen
    }));
  }catch(e){}
}

function load(){
  try{
    const d = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if(!d || !d.screen || d.screen === "#s-start") return null;
    // データ更新で消えたMVは除外
    const ok = id => MV_BY_ID.has(id);
    return {
      groups: new Set(d.groups), hearts: new Set(d.hearts.filter(ok)), seed: d.seed,
      entrants: d.entrants.filter(ok), answers: d.answers, seenPhase: new Set(d.seenPhase),
      screen: d.screen
    };
  }catch(e){ return null; }
}

function clearSave(){ try{ localStorage.removeItem(SAVE_KEY); }catch(e){} }

/* =========================
   初期化
========================= */

function init(){
  state = {
    groups: new Set(),
    hearts: new Set(),
    seed: 0,
    entrants: [],
    answers: [],
    seenPhase: new Set(),
    screen: "#s-groups"
  };
}

/* =========================
   STEP 1 推しを選ぶ
========================= */

function renderGroups(){
  const count = g => MVS.filter(m => m.g === g).length;
  const sec = (label, status) => `
    <div class="gsec">
      <h3>${label}</h3>
      <div class="chips">
        ${GROUPS.filter(g => g.status === status).map(g => `
          <button class="chip" data-g="${esc(g.name)}" aria-pressed="${state.groups.has(g.name)}">
            ${esc(g.name)}<small>${count(g.name)}</small>
          </button>`).join("")}
      </div>
    </div>`;
  $("#groupList").innerHTML = sec("現役", "active") + sec("活動終了", "ended");
  updateGroupDock();
}

function updateGroupDock(){
  const n = MVS.filter(m => state.groups.has(m.g)).length;
  $("#grpMvCount").textContent = n;
  $("#groupsNext").disabled = n < BEST;
}

$("#groupList").addEventListener("click", e => {
  const b = e.target.closest(".chip");
  if(!b) return;
  const g = b.dataset.g;
  state.groups.has(g) ? state.groups.delete(g) : state.groups.add(g);
  b.setAttribute("aria-pressed", state.groups.has(g));
  updateGroupDock();
  save();
});

$("#presets").addEventListener("click", e => {
  const p = e.target.closest("button")?.dataset.p;
  if(!p) return;
  state.groups = new Set(GROUPS.filter(g => p === "all" || g.status === p).map(g => g.name));
  renderGroups();
  save();
});

$("#groupsNext").onclick = () => {
  // 範囲外になった♡は外す
  state.hearts = new Set([...state.hearts].filter(id => state.groups.has(MV_BY_ID.get(id).g)));
  renderQual();
  show("#s-qual");
};

/* =========================
   STEP 2 予選
========================= */

function renderQual(){
  $("#qualList").innerHTML = GROUPS.filter(g => state.groups.has(g.name)).map(g => {
    const list = MVS.filter(m => m.g === g.name);
    return `
      <section class="qsec" data-g="${esc(g.name)}">
        <div class="qhead"><h3>${esc(g.name)}</h3><small>${list.length}本</small><span class="hc"></span></div>
        <div class="qgrid">
          ${list.map(m => `
            <div class="mv" role="button" tabindex="0" data-id="${m.id}" aria-pressed="${state.hearts.has(m.id)}">
              <div class="thumb">
                <img loading="lazy" src="${thumb(m.id)}" alt="">
                <span class="heart" aria-hidden="true">${state.hearts.has(m.id) ? "♥" : "♡"}</span>
                ${playLink(m.id)}
              </div>
              <div class="t">${esc(m.song)}</div>
            </div>`).join("")}
        </div>
      </section>`;
  }).join("");
  updateQualDock();
}

function semiPlan(n){
  // 準決勝で何ブロック戦うか（表示用）
  let pool = n, blocks = 0;
  while(pool > FINAL_SIZE){
    const r = roundShape(pool);
    blocks += r.sizes.filter((s, i) => s > r.quotas[i]).length;
    pool = r.quotas.reduce((a, b) => a + b, 0);
  }
  return blocks;
}

function updateQualDock(){
  const n = state.hearts.size;
  $("#heartCount").textContent = n;
  $("#heartHint").textContent = n < BEST ? `あと${BEST - n}本` : n > HEART_MAX ? `${n - HEART_MAX}本はずして` : n === HEART_MAX ? "上限30本" : n > FINAL_SIZE ? `準決勝 ${semiPlan(n)}回` : "決勝へ直行";
  $("#qualNext").disabled = n < BEST || n > HEART_MAX;
  document.querySelectorAll(".qsec").forEach(sec => {
    const c = [...sec.querySelectorAll(".mv")].filter(el => state.hearts.has(el.dataset.id)).length;
    sec.querySelector(".hc").textContent = c ? `♡${c}` : "";
  });
}

function toggleHeart(el){
  const id = el.dataset.id;
  if(!state.hearts.has(id) && state.hearts.size >= HEART_MAX){
    const hint = $("#heartHint");
    hint.textContent = "30本までだよ";
    hint.classList.remove("warn"); void hint.offsetWidth; hint.classList.add("warn");
    return;
  }
  state.hearts.has(id) ? state.hearts.delete(id) : state.hearts.add(id);
  const on = state.hearts.has(id);
  el.setAttribute("aria-pressed", on);
  el.querySelector(".heart").textContent = on ? "♥" : "♡";
  updateQualDock();
  save();
}

$("#qualList").addEventListener("click", e => {
  if(e.target.closest(".play")) return;
  const el = e.target.closest(".mv");
  if(el) toggleHeart(el);
});
$("#qualList").addEventListener("keydown", e => {
  const el = e.target.closest(".mv");
  if(el && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); toggleHeart(el); }
});

$("#qualNext").onclick = () => {
  state.seed = (Math.random() * 2 ** 32) >>> 0;
  state.entrants = shuffle([...state.hearts], rng(state.seed));
  state.answers = [];
  state.seenPhase = new Set();
  step();
};

/* =========================
   準決勝・決勝エンジン
   回答列を先頭から再生して「次に聞くべき問題」を求める。
   ひとつ戻る・途中再開＝回答列を再生し直すだけ。
========================= */

// 1ラウンドのブロック割り（最大6本）と、各ブロックから選ぶ本数（2〜3本）。最終的に9本へ
function roundShape(pool){
  let b, quotas;
  if(pool > BLOCK_MAX * 4){
    // 24本超：6本ずつから3本（前段）
    b = Math.ceil(pool / BLOCK_MAX);
    quotas = null;
  }else{
    // 24本以下：合計9本になるよう3〜4ブロックに割る（3,3,3 または 3,2,2,2）
    b = pool <= BLOCK_MAX * 3 ? 3 : 4;
    quotas = Array(b).fill(Math.floor(FINAL_SIZE / b));
  }
  const sizes = Array.from({ length: b }, (_, i) => Math.floor(pool / b) + (i < pool % b ? 1 : 0));
  if(!quotas) quotas = sizes.map(s => Math.min(3, s - 1 > 0 ? Math.ceil(s / 2) : s));
  else for(let i = 0; i < FINAL_SIZE % b; i++) quotas[i]++;   // 大きいブロックから3本枠
  return { sizes, quotas };
}

function run(answers){
  let i = 0;
  const rand = rng(state.seed ^ 0x9e3779b9);

  // 準決勝
  let pool = [...state.entrants];
  const semiTotal = semiPlan(pool.length);
  let semiDone = 0;
  while(pool.length > FINAL_SIZE){
    const order = shuffle(pool, rand);
    const { sizes, quotas } = roundShape(order.length);
    const next = [];
    let p = 0;
    sizes.forEach((sz, bi) => {
      const block = order.slice(p, p + sz); p += sz;
      const q = quotas[bi];
      if(block.length <= q){ next.push(...block); return; }   // 選ぶまでもないブロック
      if(i < answers.length){ next.push(...answers[i++]); semiDone++; return; }
      throw { phase: "semi", block, pick: q, done: semiDone, total: semiTotal };
    });
    pool = next;
  }

  // 決勝：二分挿入ソートで順位付け（9本なら最大21試合）
  const semiAnswers = i;
  const finalists = shuffle(pool, rand);
  const ranked = [];
  finalists.forEach((m, idx) => {
    let lo = 0, hi = ranked.length;
    while(lo < hi){
      const mid = (lo + hi) >> 1;
      let win;
      if(i < answers.length) win = answers[i++] === 0;
      else throw { phase: "final", pair: [m, ranked[mid]], asked: i - semiAnswers, inserted: idx, total: finalists.length };
      if(win) hi = mid; else lo = mid + 1;
    }
    ranked.splice(lo, 0, m);
  });
  return ranked;
}

function step(){
  try{
    const ranked = run(state.answers);
    renderResult(ranked.slice(0, BEST));
  }catch(q){
    if(!q.phase) throw q;
    if(!state.seenPhase.has(q.phase)){ between(q.phase); return; }
    q.phase === "semi" ? renderSemi(q) : renderDuel(q);
  }
}

function between(phase){
  state.betweenPhase = phase;
  const n = state.entrants.length;
  if(phase === "semi"){
    $("#bwEyebrow").textContent = `${n} → ${FINAL_SIZE}`;
    $("#bwTitle").textContent = "準決勝";
    $("#bwText").textContent = `♡をつけた${n}本を最大${BLOCK_MAX}本ずつに分けて、それぞれから2〜3本を選ぶ。決勝に進むのは${FINAL_SIZE}本。全${semiPlan(n)}回。`;
  }else{
    const f = Math.min(n, FINAL_SIZE);
    $("#bwEyebrow").textContent = `${f} → ${BEST}`;
    $("#bwTitle").textContent = "決勝";
    $("#bwText").textContent = `残った${f}本を1対1で比べて順位を決める。最大21試合。`;
  }
  $("#bwBtn").textContent = phase === "semi" ? "準決勝スタート" : "決勝スタート";
  $("#bwBtn").onclick = () => { state.seenPhase.add(phase); step(); };
  show("#s-between");
}

/* ---------- 準決勝 ---------- */

let semiQ = null;
let semiPicked = new Set();

function renderSemi(q){
  semiQ = q;
  state.lastQ = q;
  semiPicked = new Set();
  $("#semiCount").textContent = `${q.done + 1} / ${q.total}`;
  $("#semiBar").style.width = `${q.done / q.total * 100}%`;
  $("#semiInst").textContent = `${q.block.length}本から好きな${q.pick}本を選んで`;
  $("#semiNeed").textContent = q.pick;
  $("#semiGrid").innerHTML = q.block.map(id => {
    const m = MV_BY_ID.get(id);
    return `
      <div class="mv" role="button" tabindex="0" data-id="${id}" aria-pressed="false">
        <div class="thumb">
          <img src="${thumb(id)}" alt="">
          <span class="heart" aria-hidden="true">♡</span>
          ${playLink(id)}
        </div>
        <div class="t">${esc(m.song)}</div>
        <div class="g">${esc(m.g)}</div>
      </div>`;
  }).join("");
  updateSemiDock();
  if(!$("#s-semi").classList.contains("active")) show("#s-semi"); else { window.scrollTo({ top: 0 }); save(); }
}

function updateSemiDock(){
  $("#semiSel").textContent = semiPicked.size;
  $("#semiNext").disabled = semiPicked.size !== semiQ.pick;
}

function toggleSemi(el){
  const id = el.dataset.id;
  if(semiPicked.has(id)) semiPicked.delete(id);
  else if(semiPicked.size < semiQ.pick) semiPicked.add(id);
  else return;
  const on = semiPicked.has(id);
  el.setAttribute("aria-pressed", on);
  el.querySelector(".heart").textContent = on ? "♥" : "♡";
  updateSemiDock();
}

$("#semiGrid").addEventListener("click", e => {
  if(e.target.closest(".play")) return;
  const el = e.target.closest(".mv");
  if(el) toggleSemi(el);
});
$("#semiGrid").addEventListener("keydown", e => {
  const el = e.target.closest(".mv");
  if(el && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); toggleSemi(el); }
});

$("#semiNext").onclick = () => {
  // ブロック内の並び順で保存（再生時の決定性のため）
  state.answers.push(semiQ.block.filter(id => semiPicked.has(id)));
  step();
};


/* ---------- 決勝 ---------- */

function fighterHTML(id){
  const m = MV_BY_ID.get(id);
  return `
    <div class="thumb"><img src="${thumb(id)}" alt="">${playLink(id)}</div>
    <div class="t">${esc(m.song)}</div>
    <div class="g">${esc(m.g)}</div>`;
}

function renderDuel(q){
  state.lastQ = q;
  const [a, b] = q.pair;
  $("#duelCount").textContent = `${q.asked + 1}試合目`;
  $("#duelBar").style.width = `${q.inserted / q.total * 100}%`;
  $("#fA").innerHTML = fighterHTML(a);
  $("#fB").innerHTML = fighterHTML(b);
  if(!$("#s-duel").classList.contains("active")) show("#s-duel"); else save();
}

["#fA", "#fB"].forEach((sel, side) => {
  $(sel).addEventListener("click", e => {
    if(e.target.closest(".play")) return;
    state.answers.push(side);
    step();
  });
});


/* =========================
   結果
========================= */

let bestIds = [];

function renderResult(best){
  bestIds = best;
  // 表彰台配置：上段 4・5・6位／中段 2・1・3位／下段 7・8・9位（順位の数字は出さない）
  const SLOTS = [3, 4, 5, 1, 0, 2, 6, 7, 8];
  $("#best9").innerHTML = SLOTS.filter(r => r < best.length).map(r => [r, best[r]]).map(([r, id]) => {
    const m = MV_BY_ID.get(id);
    return `
      <li${r === 0 ? ' class="top"' : ""}>${r === 0 ? '<span class="crown" aria-hidden="true">♛</span>' : ""}
        <div class="thumb"><img src="${thumb(id)}" alt=""></div>
        <div class="t">${esc(m.song)}</div>
        <div class="g">${esc(m.g)}</div>
      </li>`;
  }).join("");
  show("#s-result");
}

function openWeb(url){
  const a = document.createElement("a");
  a.href = url; a.target = "_blank"; a.rel = "noopener";
  a.click();
}

// スマホはXアプリを直接開く。アプリが無ければWeb版へ
function shareToX(text){
  const web = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
  const ua = navigator.userAgent;
  if(/Android/i.test(ua)){
    location.href = `intent://post?message=${encodeURIComponent(text)}#Intent;scheme=twitter;package=com.twitter.android;S.browser_fallback_url=${encodeURIComponent(web)};end`;
    return;
  }
  if(/iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)){
    // 自動でWeb版へは切り替えない（確認ダイアログ中にSafariでも開いてしまうため）。
    // アプリが開かなかった人向けに、手動のリンクだけ出す
    $("#shareWeb").href = web;
    location.href = `twitter://post?message=${encodeURIComponent(text)}`;
    setTimeout(() => { $("#shareFallback").hidden = false; }, 1500);
    return;
  }
  openWeb(web);
}

$("#shareBtn").onclick = () => {
  const top = MV_BY_ID.get(bestIds[0]);
  const site = SITE_URL || (location.origin + location.pathname);
  shareToX(`${HASHTAG}\n\n🎬私の最推しMV\n${top.song} - ${top.g}\n${watch(top.id)}\n\n▼DSPM好きなMVベスト9\n${site}`);
};

/* =========================
   戻る
========================= */

function back(){
  const cur = document.querySelector(".screen.active").id;
  const toQual = () => { renderQual(); show("#s-qual"); };
  if(cur === "s-groups"){ showResume(); show("#s-start"); return; }
  if(cur === "s-qual"){ renderGroups(); show("#s-groups"); return; }
  if(cur === "s-between"){
    if(state.betweenPhase === "final" && state.answers.length){ state.answers.pop(); step(); }
    else toQual();
    return;
  }
  if(cur === "s-semi"){
    if(state.answers.length){ state.answers.pop(); step(); }
    else { state.seenPhase.delete("semi"); step(); }
    return;
  }
  if(cur === "s-duel"){
    if(state.lastQ && state.lastQ.asked === 0){ state.seenPhase.delete("final"); step(); }
    else { state.answers.pop(); step(); }
    return;
  }
  if(cur === "s-result"){ state.answers.pop(); step(); }
}

document.addEventListener("click", e => { if(e.target.closest("[data-back]")) back(); });

/* =========================
   起動・ボタン
========================= */

$("#totalMv").textContent = MVS.length;

function showResume(){
  $("#resumeBtn").hidden = false;
  $("#resumeNote").hidden = false;
  $("#startBtn").textContent = "スタート";
}
if(load()) showResume();

$("#resumeBtn").onclick = () => {
  state = load();
  if(!state){ init(); renderGroups(); show("#s-groups"); return; }
  const scr = state.screen;
  if(scr === "#s-groups"){ renderGroups(); show("#s-groups"); }
  else if(scr === "#s-qual"){ renderQual(); show("#s-qual"); }
  else step();   // 準決勝・決勝・結果は回答列から再生
};

function fresh(){
  clearSave();
  init();
  renderGroups();
  show("#s-groups");
}

$("#startBtn").onclick = fresh;
$("#restartBtn").onclick = fresh;
