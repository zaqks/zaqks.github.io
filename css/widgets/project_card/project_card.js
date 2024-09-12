class ProjectCard {
  constructor(id) {
    this.container = document.getElementById(id);
    this.template = `<div class="section project_card" onclick="document.location.href='#URL'">
          <div class="section_title">
            <img src="#IMG" alt="" />
          </div>
          <div class="section_content">
            <h1>#TITLE</h1>
            <p>#DESC</p>            
          </div>
        </div>`;
  }

  spawn(img, title, desc, url) {
    var tokens = {
      "#IMG": img,
      "#TITLE": title,
      "#DESC": desc,
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
