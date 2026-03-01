const contact_cards = document.getElementById("contact_cards");
const contact_card_template = `
<div class="contact">
  <a href="#url#" target="_blank" rel="noopener noreferrer">
    <img src="#img#" alt="#title#">
    <div class="title">#title#</div>
    <div class="arrow">↗</div>
  </a>
</div>`;

fetchCsv('data/contact.csv').then(function (json) {
  json.forEach(contact => {
    let content = contact_card_template;
    for (let key of ["url", "title", "img"]) {
      content = content.replaceAll(`#${key}#`, contact[key] || '');
    }
    contact_cards.innerHTML += content;
  });
});