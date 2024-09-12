class SkillCard {
  constructor(id) {
    this.container = document.getElementById(id);
    this.template = `<div class="section skill_card">
          <div class="section_title">
            
          </div>
          <div class="section_content">
            <img src="#IMG" alt="" />
            <h1>#TITLE</h1>                        
          </div>
        </div>`;
  }

  spawn(img, title) {
    const tokens = {
      "#IMG": img,
      "#TITLE": title,      
    };

    var rslt = this.template;

    for (const token in tokens) {
      rslt = rslt.replace(token, tokens[token]);
    }

    this.container.innerHTML += rslt;
  }
}
