// Load home section data
fetchCsv('data/home.csv').then(function (data) {
  const homeData = {};
  data.forEach(row => {
    homeData[row.field] = row.value;
  });
  
  document.getElementById('home_name').textContent = `Hey, I'm ${homeData.name}`;
  document.getElementById('home_image').src = homeData.image;
  document.getElementById('resume_link').href = homeData.resume_link;
  document.getElementById('github_repos_link').href = homeData.github_repos;
});

// Load and cycle through titles
const home_titles = document.getElementById("home_titles");
const title_template = `<p class="title-item">#title#</p>`;

let titles = [];
let currentIndex = 0;

fetchCsv('data/titles.csv').then(function (data) {
  titles = data.map(row => row.titles).filter(t => t);
  if (titles.length > 0) {
    cycleTitles();
  }
});

function cycleTitles() {
  const titleElement = home_titles.querySelector('.title-item');
  
  if (titleElement) {
    titleElement.classList.add('fade-out');
    setTimeout(() => {
      home_titles.innerHTML = title_template.replace('#title#', titles[currentIndex] || '');
      currentIndex = (currentIndex + 1) % titles.length;
    }, 300);
  } else {
    home_titles.innerHTML = title_template.replace('#title#', titles[currentIndex] || '');
    currentIndex = (currentIndex + 1) % titles.length;
  }
  
  setTimeout(cycleTitles, 3000);
}