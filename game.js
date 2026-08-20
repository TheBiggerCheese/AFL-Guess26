const CAT={common:["🟢","Common",100],uncommon:["🔵","Uncommon",50],rare:["🟣","Rare",20],legendary:["🟠","Legendary",5],unicorn:["🦄","Unicorn",0]};
let team=Object.keys(TEAM_TARGETS)[0],found=new Set(),revealed=false;
const $=x=>document.getElementById(x), norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"");
const lookup=new Map(ALL_PLAYERS.map(p=>[norm(p.name),p]));
function cat(g){return g>=100?"common":g>=50?"uncommon":g>=20?"rare":g>=5?"legendary":"unicorn"}
function targets(){return TEAM_TARGETS[team]}
function render(){
 $("team").innerHTML=Object.keys(TEAM_TARGETS).map(t=>`<option ${t===team?"selected":""}>${t}</option>`).join("");
 $("heading").textContent=team+" — 2026";$("found").textContent=found.size;$("total").textContent=targets().length;
 let pct=Math.round(found.size/targets().length*100)||0;$("pct").textContent=pct+"%";$("bar").style.width=pct+"%";
 let counts={common:[0,0],uncommon:[0,0],rare:[0,0],legendary:[0,0],unicorn:[0,0]};
 targets().forEach(n=>{let p=lookup.get(norm(n))||{games:0};let c=cat(p.games);counts[c][1]++;if(found.has(n))counts[c][0]++});
 $("cats").innerHTML=Object.entries(CAT).map(([k,v])=>`<div class="cat"><div>${v[0]}</div><strong>${v[1]}</strong><small>${counts[k][0]}/${counts[k][1]}</small></div>`).join("");
 $("players").innerHTML=targets().map(n=>{let p=lookup.get(norm(n))||{games:0};let c=cat(p.games),ok=found.has(n),show=ok||revealed;return `<div class="player ${ok?"foundp":"hiddenp"}">${show?n:"??????"}<span class="tag">${CAT[c][0]} ${CAT[c][1]}</span></div>`}).join("");
}
function suggestions(value){
 if(!value.trim()){$("suggestions").innerHTML="";return}
 const q=norm(value), hits=ALL_PLAYERS.filter(p=>norm(p.name).includes(q)).slice(0,12);
 $("suggestions").innerHTML=hits.map(p=>`<button class="suggestion" onclick="choose(${JSON.stringify(p.name)})">${p.name}</button>`).join("");
}
function choose(name){$("input").value=name;$("suggestions").innerHTML="";$("input").focus()}
function guess(){
 let value=$("input").value.trim();if(!value)return;
 let p=lookup.get(norm(value)), target=targets().some(n=>norm(n)===norm(value));
 if(!p){$("msg").textContent="❌ Player not in the database yet.";$("msg").className="bad";return}
 if(!target){$("msg").textContent="❌ That's a valid AFL player, but not on this 2026 team.";$("msg").className="bad";$("input").value="";return}
 let actual=targets().find(n=>norm(n)===norm(value));if(found.has(actual)){return}
 found.add(actual);$("msg").textContent="✅ "+actual+" found!";$("msg").className="good";$("input").value="";render();
 if(found.size===targets().length)$("msg").textContent="🏆 PERFECT! You found every target player!";
}
$("input").addEventListener("input",e=>suggestions(e.target.value));$("input").addEventListener("keydown",e=>{if(e.key==="Enter")guess()});
$("guess").onclick=guess;$("team").onchange=e=>{team=e.target.value;found=new Set();revealed=false;$("msg").textContent="";render()};
$("reveal").onclick=()=>{revealed=!revealed;$("reveal").textContent=revealed?"Hide Answers":"Reveal Answers";render()};
$("new").onclick=()=>{found=new Set();revealed=false;$("msg").textContent="";$("input").value="";$("reveal").textContent="Reveal Answers";render()};
render();