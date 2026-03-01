// Load about section data
fetchCsv('data/about.csv').then(function (data) {
  const aboutData = {};
  data.forEach(row => {
    aboutData[row.field] = row.value;
  });
  
  document.getElementById('about_title').textContent = aboutData.title;
  document.getElementById('about_image').src = aboutData.image;
  document.getElementById('about_description').textContent = aboutData.description;
});

// Load stats
const stat_cards = document.getElementById("stat_cards");
const stat_card_template = `
<div class="stat">
    <div class="num">#num#</div>
    <div class="unit">#unit#</div>              
</div>`;

fetchCsv('data/stats.csv').then(function (json) {
  var content;
  for (let project of json) {
    content = stat_card_template;
    for (let tkn of ["num", "unit"]) {
      content = content.replace(`#${tkn}#`, project[tkn] || '');
    }
    stat_cards.innerHTML += content;
  }
});