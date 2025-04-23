const stat_cards = document.getElementById("stat_cards");
const stat_card_template = `
<div class="stat">
    <div class="num">#num#</div>
    <div class="unit">#unit#</div>              
</div>`;
////////////////////////////////////////////////////////// 



fetchJson('data/stats.json').then(function (json) {
  var content;
  //
  for (let project of json) {
    content = stat_card_template
    //replace
    for (let tkn of ["num", "unit"]) {
      content = content.replace(`#${tkn}#`, project[tkn])
    }
    //append
    stat_cards.innerHTML += content;
  }
})