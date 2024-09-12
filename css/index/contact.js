const CONTACTS = [
  {
    img: "assets/icons/contact/external-github-with-cat-logo-an-online-community-for-software-development-logo-color-tal-revivo.png",
    title: "Github",
    val: "zaqks",
    url: "https://github.com/zaqks",
  },
  {
    img: "assets/icons/contact/discord-logo.png",
    title: "Discord",
    val: "zaqks",
    url: "",
  },
  {
    img: "assets/icons/contact/instagram-new.png",
    title: "Instagram",
    val: "_zaqks",
    url: "https://instagram.com/_zaqks",
  },
  {
    img: "assets/icons/contact/gmail-new.png",
    title: "Gmail",
    val: "zakeladj",
    url: "",
  },
];

const contact_cards = new ContactCard("contact_cards");

for (const project of CONTACTS) {
  contact_cards.spawn(project.img, project.title, project.val, project.url);
}
