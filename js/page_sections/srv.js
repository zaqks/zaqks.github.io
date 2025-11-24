const srv_cards = document.getElementById("srv_cards");
const srv_card_template = `
<div class="section exp_card">
  <div class="section_title">
    <h2>#title#</h2>    
  </div>
  <div class="section_content">    
    <p>#desc#</p>           
  </div>
</div>`;
//////////////////////////////////////////////////////////

fetchCsv("data/services.csv").then(function (json) {
  var content;
  //
  for (let project of json) {
    content = srv_card_template;
    //replace
    for (let tkn of ["time", "title", "desc"]) {
      content = content.replace(`#${tkn}#`, project[tkn] || '');
    }
    //append
    srv_cards.innerHTML += content;
    console.log(content);
  }
});
