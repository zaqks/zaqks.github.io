const contact_cards = document.getElementById("contact_cards");
const contact_card_template = `
<div class="contact">
        <a href="#url#">
          <img src="#img#" alt="">
          <div class="title">#title#</div>
          <div class="arrow">↗</div>
        </a>
</div>`;
////////////////////////////////////////////////////////// 

fetchCsv('data/contact.csv').then(function (json) {
  var content;
  //
  for (let project of json) {
    content = contact_card_template
    //replace
    for (let tkn of ["url", "title", "img"]) {
      content = content.replace(`#${tkn}#`, project[tkn] || '')
    }
    //append
    contact_cards.innerHTML += content;
  }
})