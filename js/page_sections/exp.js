const exp_cards = document.getElementById("exp_cards");
const exp_card_template = `
<div class="section exp_card">
  <div class="section_title">
    <h2>#title#</h2>    
  </div>
  <div class="section_content">    
    <p>#desc#</p>       
    <h2 class="time">#time#</h2>   
  </div>
</div>`;
//////////////////////////////////////////////////////////

fetchJson("data/experience.json").then(function (json) {
  var content;
  //
  for (let project of json) {
    content = exp_card_template;
    //replace
    for (let tkn of ["time", "title", "desc"]) {
      content = content.replace(`#${tkn}#`, project[tkn]);
    }
    //append
    exp_cards.innerHTML += content;
    console.log(content);
    
  }
});
