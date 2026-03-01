const exp_cards = document.getElementById("exp_cards");
const exp_card_template = `
<div class="section exp_card borders">
  <div class="section_title">
    <h2>#title#</h2>    
  </div>
  <div class="section_content">    
    <p>#desc#</p>       
    <h2 class="time">#time#</h2>   
  </div>
</div>`;

fetchCsv("data/experience.csv").then(function (json) {
  json.forEach(exp => {
    let content = exp_card_template;
    for (let key of ["time", "title", "desc"]) {
      content = content.replace(`#${key}#`, exp[key] || '');
    }
    exp_cards.innerHTML += content;
  });
});
