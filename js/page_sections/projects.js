const project_cards = document.getElementById("project_cards");
const project_card_template = `
<div class="section project_card borders">
  <div class="section_title">
    <img src="#img#" alt="#title#">
  </div>
  <div class="section_content">
    <h2>#title#</h2>
    <p>#desc#</p>
  </div>
</div>`;

fetchCsv('data/projects.csv').then(function (json) {
  json.forEach(project => {
    let content = project_card_template;
    for (let key of ["img", "title", "desc"]) {
      content = content.replaceAll(`#${key}#`, project[key] || '');
    }
    project_cards.innerHTML += content;
  });
});