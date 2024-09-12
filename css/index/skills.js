const SKILLS = {
  lang_cards: [
    {
      img: "assets/icons/skills/dart.png",
      title: "Dart",
    },
    {
      img: "assets/icons/skills/python--v1.png",
      title: "Python",
    },
    {
      img: "assets/icons/skills/external-project-jupyter-a-nonprofit-organization-created-to-open-source-software-logo-shadow-tal-revivo.png",
      title: "Jupyter Notebook",
    },
    {
      img: "assets/icons/skills/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
      title: "SQL",
    },
    {
      img: "assets/icons/skills/json.png",
      title: "JSON",
    },
    {
      img: "assets/icons/skills/html-5--v1.png",
      title: "HTML",
    },
    {
      img: "assets/icons/skills/css3.png",
      title: "CSS",
    },
    {
      img: "assets/icons/skills/javascript--v1.png",
      title: "JS",
    },
    {
      img: "assets/icons/skills/c-programming.png",
      title: "C",
    },
    {
      img: "assets/icons/skills/c-plus-plus-logo.png",
      title: "C++",
    },
    {
      img: "assets/icons/skills/java-coffee-cup-logo--v1.png",
      title: "Java",
    },
  ],
  framework_cards: [
    {
      img: "assets/icons/skills/flutter.png",
      title: "Flutter",
    },
    {
      img: "assets/icons/skills/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png",
      title: "Django",
    },
    {
      img: "assets/icons/skills/opencv.png",
      title: "Opencv",
    },
    {
      img: "assets/icons/skills/spring-logo.png",
      title: "Spring Boot",
    },
    {
      img: "assets/icons/skills/thymeleaf.png",
      title: "Thymeleaf",
    },
  ],
  service_cards: [
    {
      img: "assets/icons/skills/google-play-store-new.png",
      title: "Google Play",
    },
    {
      img: "assets/icons/skills/play--v1.png",
      title: "Google Console",
    },
    {
      img: "assets/icons/skills/google-colab.png",
      title: "Google Colab",
    },
    {
      img: "assets/icons/skills/github.png",
      title: "Github",
    },
    {
      img: "assets/icons/skills/git.png",
      title: "Git",
    },
  ],
  os_cards: [
    {
      img: "assets/icons/skills/linux--v1.png",
      title: "Linux",
    },
    {
      img: "assets/icons/skills/arch-linux.png",
      title: "Arch Linux",
    },
    {
      img: "assets/icons/skills/kali-linux.png",
      title: "Kali Linux",
    },
    {
      img: "assets/icons/skills/ubuntu--v1.png",
      title: "Ubuntu",
    },
    {
      img: "assets/icons/skills/windows-10.png",
      title: "Windows",
    },
  ],
  software_cards: [
    {
      img: "assets/icons/skills/filmora.png",
      title: "Filmora 9",
    },
    {
      img: "assets/icons/skills/gimp.png",
      title: "Gimp",
    },
    {
      img: "assets/icons/skills/inkscape--v1.png",
      title: "Inkscape",
    },
    {
      img: "assets/icons/skills/lmms.png",
      title: "LMMS",
    },
    {
      img: "assets/icons/skills/audacity.png",
      title: "Audacity",
    },
    {
      img: "assets/icons/skills/fl-studio.png",
      title: "FL Studio",
    },
    {
      img: "assets/icons/skills/solidworks.png",
      title: "Solidworks",
    },
  ],
};

for (const categ in SKILLS) {
  const skill_cards = new SkillCard(categ);
  for (const skill of SKILLS[categ]) {
    skill_cards.spawn(skill.img, skill.title);
  }
}
