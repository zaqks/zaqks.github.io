const project_cards = document.getElementById("project_cards");
const project_card_template = `
<div class="section project_card">
  <div class="section_title">
    <img src="#img#" alt="">
  </div>
  <div class="section_content">
    <h2>#title#</h2>
    <p>#desc#</p>
  </div>
</div>`;
////////////////////////////////////////////////////////// 



fetchJson('data/projects.json').then(function (json) {
  var content;
  //
  for (let project of json) {
    content = project_card_template
    //replace
    for (let tkn of ["img", "title", "desc"]) {
      content = content.replace(`#${tkn}#`, project[tkn])
    }
    //append
    project_cards.innerHTML += content;
  }
})