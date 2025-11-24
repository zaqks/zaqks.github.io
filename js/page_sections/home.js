const home_titles = document.getElementById("home_titles");
const title_template = `<p>#title#</p>`;

let titles = [];
let currentIndex = 0;

fetchCsv('data/titles.csv').then(function (data) {
  titles = data.map(row => row.titles).filter(t => t);
  if (titles.length > 0) {
    cycleTitles();
  }
});

function cycleTitles() {
  home_titles.innerHTML = '';
  const currentTitle = title_template.replace('#title#', titles[currentIndex] || '');
  home_titles.innerHTML = currentTitle;
  
  currentIndex = (currentIndex + 1) % titles.length;
  setTimeout(cycleTitles, 2000); // Cycle every 2 seconds
}