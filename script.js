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
