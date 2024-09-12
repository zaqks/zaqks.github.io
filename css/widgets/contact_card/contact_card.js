class ContactCard {
  constructor(id) {
    this.container = document.getElementById(id);
    this.template = `<div class="section contact_card" onclick="document.location.href='#URL'">
          <div class="section_title">
            <img src="#IMG" alt="" />
          </div>
          <div class="section_content">
            <h2>#TITLE</h2>
            <h1>#VAL</h1>            
          </div>
        </div>`;
  }

  spawn(img, title, val, url) {
    var tokens = {
      "#IMG": img,
      "#TITLE": title,
      "#VAL": val,
    };

    if (url) {
      tokens["#URL"] = url;
    }

    var rslt = this.template;

    for (const token in tokens) {
      rslt = rslt.replace(token, tokens[token]);
    }

    this.container.innerHTML += rslt;
  }
}
