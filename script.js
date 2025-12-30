function runAI() {
  const gender = document.getElementById("gender").value;
  const season = document.getElementById("season").value;
  const note = document.getElementById("note").value;

  const match = perfumes.filter(p =>
    p.gender === gender &&
    p.season === season &&
    p.notes.includes(note)
  );

  const resultDiv = document.getElementById("result");

  if (match.length > 0) {
    resultDiv.innerHTML = "✨ Sana uygun parfüm: <b>" + match[0].name + "</b>";
  } else {
    resultDiv.innerHTML = "😔 Tam eşleşme yok, benzer kokular öneriyoruz.";
  }
}

const grid = document.getElementById("perfume-grid");

function renderPerfumes(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "perfume-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p><i>${p.brand}</i></p>
      <div>${p.notes.map(n => `<span class="tag">${n}</span>`).join("")}</div>
    `;

    grid.appendChild(card);
  });
}

renderPerfumes(perfumes);
