"use client";
import { useState } from "react";
import { Activity, Camera, CircleAlert, Clock3, FileSearch, GitCompareArrows, Play, Search, ShieldCheck, Sparkles } from "lucide-react";

const tasks=[['01','首次进入与价值表达','100%'],['02','注册 / Onboarding','100%'],['03','完成第一次核心任务','82%'],['04','编辑与控制能力','64%'],['05','发布 / 外部动作','BLOCKED']];
const observations=[
 {tag:'VERIFIED',title:'首次核心任务提供三种进入路径',body:'在本次任务中观察并实际验证了首页 Prompt、Template 与 Import 三种启动方式。',ev:'Evidence 12 · 16 · 18'},
 {tag:'VERIFIED',title:'生成后可以继续通过对话修改结果',body:'完成首次生成后，输入第二条修改指令，Preview 保留原内容并增量更新。',ev:'Evidence 27 · Recording 08:41'},
 {tag:'OBSERVED',title:'发现 Publish 入口，但尚未执行',body:'Publish 可能创建公开页面，因此 Agent 在执行前触发 Decision Gate。',ev:'Evidence 34'},
 {tag:'ANALYSIS',title:'编辑阶段强调连续迭代，而非重新开始',body:'基于 Observation 18、27、31：当前体验更接近持续修改同一产物。',ev:'Based on 3 observations'}
];
export default function Home(){const [gate,setGate]=useState(true); const [note,setNote]=useState(''); return <main>
 <aside className="rail"><div className="logo">RA</div><button className="active"><Activity/></button><button><Search/></button><button><GitCompareArrows/></button><button><Camera/></button><div className="grow"/><button><ShieldCheck/></button></aside>
 <section className="shell">
  <header><div><span className="eyebrow">RESEARCH / SESSION 001</span><h1>AI 建站产品 · 首次使用与编辑体验</h1><p>目标：从新用户视角完成第一次生成，并研究生成后的控制与修改路径。</p></div><div className="status"><span className="dot"/> RESEARCHING <b>68%</b></div></header>
  <div className="grid">
   <section className="journey panel"><div className="panelTitle"><span>RESEARCH JOURNEY</span><small>27 min · 34 evidence</small></div>{tasks.map((t,i)=><div className="task" key={t[0]}><span className="num">{t[0]}</span><div><b>{t[1]}</b><small>{i===4?'需要用户决策':'研究任务与自由探索同步记录'}</small></div><em className={i===4?'blocked':''}>{t[2]}</em></div>)}<div className="coverage"><span>GOAL COVERAGE</span><b>68%</b><div><i/></div></div></section>
   <section className="live panel"><div className="panelTitle"><span>LIVE EXPERIENCE</span><small>agent-browser / current</small></div><div className="browser"><div className="chrome"><i/><i/><i/><span>https://product.example/app</span></div><div className="fake"><span>LIVE PRODUCT</span><h2>Your first project is ready.</h2><p>Agent 正在验证生成后的编辑入口。</p><button>Edit project</button><button className="ghost">Publish</button><div className="cursor">↖ <small>AGENT</small></div></div></div><div className="agentThought"><Sparkles/><div><small>WHY THIS ACTION</small><p>已完成首次生成。下一步验证用户是否能在不重新生成的情况下修改现有结果。</p></div></div></section>
   <section className="observations panel"><div className="panelTitle"><span>OBSERVATIONS</span><small>4 current findings</small></div>{observations.map(o=><article key={o.title}><label className={o.tag.toLowerCase()}>{o.tag}</label><h3>{o.title}</h3><p>{o.body}</p><small><FileSearch/> {o.ev}</small></article>)}</section>
  </div>
  <footer><div className="interrupt"><span>INTERRUPT AGENT</span><input value={note} onChange={e=>setNote(e.target.value)} placeholder="例如：先别发布，回去看看刚才的版本历史…"/><button onClick={()=>setNote('')}>发送</button></div><div className="meta"><Clock3/> 2026-09-28 · 所有发现保留时间证据</div></footer>
 </section>
 {gate&&<div className="gate"><div className="gateCard"><CircleAlert/><span className="eyebrow">DECISION GATE · L3</span><h2>执行 Publish 前需要你的决定</h2><p>Agent 已完成核心生成与编辑研究。下一步可能创建一个<strong>公开页面</strong>，并可能消耗当前账户的免费额度。</p><div className="impact"><b>将发生</b><span>创建公开链接</span><span>可能消耗 1 次发布额度</span><span>会产生真实账户数据</span></div><div className="actions"><button onClick={()=>setGate(false)}><Play/> 仅允许这一次</button><button className="secondary" onClick={()=>setGate(false)}>跳过 Publish</button></div><small>你可以随时重新打开现场或接管浏览器。</small></div></div>}
 </main>}
