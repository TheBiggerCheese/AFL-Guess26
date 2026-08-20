/*
  AFL Team Guess
  Data structure is deliberately separate from the game logic.
  Add more clubs to TEAMS in data.js when expanding the game.
*/

const PLAYERS = [
  ["Steven May", "common", 200],
  ["Christian Salem", "common", 150],
  ["Jack Viney", "common", 250],
  ["Jake Lever", "common", 150],
  ["Max Gawn", "common", 200],
  ["Ed Langdon", "common", 150],
  ["Jake Melksham", "common", 200],
  ["Tom McDonald", "common", 200],
  ["Bayley Fritsch", "common", 150],
  ["Harrison Petty", "common", 100],
  ["Kysaiah Pickett", "common", 100],
  ["Tom Sparrow", "uncommon", 100],
  ["Jake Bowey", "uncommon", 90],
  ["Caleb Windsor", "uncommon", 40],
  ["Trent Rivers", "uncommon", 100],
  ["Shane McAdam", "uncommon", 80],
  ["Daniel Turner", "uncommon", 70],
  ["Kade Chandler", "uncommon", 90],
  ["Charlie Spargo", "uncommon", 80],
  ["Xavier Lindsay", "rare", 20],
  ["Harvey Langford", "rare", 20],
  ["Jacob van Rooyen", "rare", 40],
  ["Bailey Laurie", "rare", 30],
  ["Blake Howes", "rare", 40],
  ["Matthew Jefferson", "rare", 30],
  ["Koltyn Tholstrup", "rare", 25],
  ["Jai Culley", "rare", 20],
  ["Changkuoth Jiath", "rare", 70],
  ["Jack Steele", "common", 200],
  ["Brody Mihocek", "common", 150],
  ["Tom Campbell", "uncommon", 58],
  ["Max Heath", "rare", 5],
  ["Latrelle Pickett", "unicorn", 0],
  ["Kalani White", "unicorn", 0],
  ["Oscar Berry", "unicorn", 0],
  ["Riley Onley", "unicorn", 0],
  ["Xavier Taylor", "unicorn", 0],
  ["Thomas Matthews", "unicorn", 0],
  ["Paddy Cross", "rare", 9],
  ["Aidan Johnson", "unicorn", 0],
  ["Jack Henderson", "unicorn", 0],
  ["Luker Kentfield", "unicorn", 0],
  ["Andy Moniz-Wakefield", "unicorn", 0],
  ["Lukas Cooke", "unicorn", 1],
  ["Joel Fitzgerald", "unicorn", 0],
  ["Max Mapley", "unicorn", 0]
];

const CATEGORIES = {
  common:    { name:"Common",    icon:"🟢", hint:"100+ games" },
  uncommon:  { name:"Uncommon",  icon:"🔵", hint:"50–99 games" },
  rare:      { name:"Rare",      icon:"🟣", hint:"20–49 games" },
  legendary: { name:"Legendary", icon:"🟠", hint:"5–19 games" },
  unicorn:   { name:"Unicorn",   icon:"🦄", hint:"0–4 games" }
};

let found = new Set();
let revealed = false;

const $ = id => document.getElementById(id);
const normalise = s => s.toLowerCase().replace(/[^a-z0-9]/g,"");

function render() {
  $("total").textContent = PLAYERS.length;
  $("found").textContent = found.size;
  const pct = Math.round(found.size / PLAYERS.length * 100);
  $("percent").textContent = pct + "%";
  $("progressBar").style.width = pct + "%";

  const counts = {};
  Object.keys(CATEGORIES).forEach(k => counts[k] = {found:0,total:0});
  PLAYERS.forEach(p => {
    counts[p[1]].total++;
    if (found.has(p[0])) counts[p[1]].found++;
  });

  $("categories").innerHTML = Object.entries(CATEGORIES).map(([key,c]) => `
    <div class="category">
      <div class="icon">${c.icon}</div>
      <strong>${c.name}</strong>
      <small>${counts[key].found}/${counts[key].total}</small>
    </div>
  `).join("");

  $("players").innerHTML = PLAYERS.map(p => {
    const isFound = found.has(p[0]);
    const show = isFound || revealed;
    return `<div class="player ${isFound ? "found" : ""} ${revealed && !isFound ? "revealed" : ""}">
      ${show ? p[0] : "??????"}
      <span class="tag">${CATEGORIES[p[1]].icon} ${CATEGORIES[p[1]].name}</span>
    </div>`;
  }).join("");
}

function guess(name) {
  const player = PLAYERS.find(p => normalise(p[0]) === normalise(name));
  if (!player) {
    $("message").textContent = "❌ Not on this team — try again.";
    $("message").className = "message bad";
    return;
  }
  if (found.has(player[0])) {
    $("message").textContent = "You already found them!";
    $("message").className = "message";
    return;
  }
  found.add(player[0]);
  $("message").textContent = `✅ ${player[0]} found!`;
  $("message").className = "message good";
  $("guessInput").value = "";
  $("suggestions").innerHTML = "";
  render();

  if (found.size === PLAYERS.length) {
    $("message").textContent = "🏆 PERFECT! You found every player!";
  }
}

function showSuggestions(value) {
  if (!value.trim()) {
    $("suggestions").innerHTML = "";
    return;
  }
  const matches = PLAYERS.filter(p => !found.has(p[0]) &&
    normalise(p[0]).includes(normalise(value))).slice(0,5);
  $("suggestions").innerHTML = matches.map(p =>
    `<button type="button" onclick="guess(${JSON.stringify(p[0])})">${p[0]}</button>`
  ).join("");
}

$("guessBtn").addEventListener("click", () => guess($("guessInput").value));
$("guessInput").addEventListener("input", e => showSuggestions(e.target.value));
$("guessInput").addEventListener("keydown", e => {
  if (e.key === "Enter") guess(e.target.value);
});
$("revealBtn").addEventListener("click", () => {
  revealed = !revealed;
  $("revealBtn").textContent = revealed ? "Hide Answers" : "Reveal Answers";
  render();
});
$("newGameBtn").addEventListener("click", () => {
  found = new Set();
  revealed = false;
  $("revealBtn").textContent = "Reveal Answers";
  $("message").textContent = "";
  $("guessInput").value = "";
  render();
});

render();
