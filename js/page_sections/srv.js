const srv_cards = document.getElementById("srv_cards");
const srv_card_template = `
<div class="section exp_card borders">
  <div class="section_title">
    <h2>#title#</h2>    
  </div>
  <div class="section_content">    
    <p>#desc#</p>           
  </div>
</div>`;

fetchCsv("data/services.csv").then(function (json) {
  json.forEach(service => {
    let content = srv_card_template;
    for (let key of ["title", "desc"]) {
      content = content.replace(`#${key}#`, service[key] || '');
    }
    srv_cards.innerHTML += content;
  });
});
