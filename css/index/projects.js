const PROJECTS = [
  {
    img:"assets/images/projects/quake.png",
    title:"QuakeGuard",
    desc:"an API 7 and App that allow EarthQuake detection using an Arduino Vibration Sensor Or Dedicated Hardware (Prototyping using Wifi and Bluetooth)",
    url:"https://github.com/zaqks/QuakeGuard"
  },
  {
    img: "assets/images/comingsoon.jpg",
    title: "Movie Rating (RNN)",
    desc: `An RNN is gonna be added to the MLZ library. It will be used to rate movis according to the audience comments, whenever the comments are positive, negative or neutral.`,
  },
  {
    img: "assets/images/comingsoon.jpg",
    title: "DOOM Web",
    desc: `An upgrade & web version for my previous Raycaster. It features more advanced projection methods, collision detection, Y axis, a more detailed map, WebGL instead of Software acceleration.`,
  },
  {
    img: "assets/images/projects/encryption.png",
    title: "Public web encryption",
    desc: `This is a simple implementation of an encrypted public webpage using the crpyto-js library.
    The content is stored as a token and can't be viewed until decrypted by the visitor.`,
    url: "https://github.com/zaqks/public_web_encryption",
  },
  {
    img: "assets/images/projects/ml.png",
    title: "Digit Recognition (Custom)",
    desc: `For each output class, a matrix was defined with the training data; this allow to indentify the digit patters using a simple comparison between 2 matrices.`,
  },
  {
    img: "assets/images/projects/ml.png",
    title: "Digit Recognition (CNN)",
    desc: `the previous MNIST problem was solved this time using a CNN, the sigmoid was used as an activation function. It reached 98.4% precision. After the training, a the NN was linked to an API in order to implement a human input. One major improvement was scaling up and centering the input grid.`,
  },
  {
    img: "assets/images/projects/ml.png",
    title: "Digit Recognition (NN)",
    desc: `MNIST problem solved with a 784x10x10 NN, the sigmoid was used as an activation function. It reached 97.8% precision. After the training, a the NN was linked to an API in order to implement a human input. One major improvement was scaling up and centering the input grid.`,
  },
  {
    img: "assets/images/projects/mlz.svg",
    title: "Machine Learning Library (MLZ)",
    desc: `A machine learning library built from scratch using Numpy. It offers an environnement to develop custom layers & activation methods. It supports classical NNs, CNNs, and it's under development for a wider set of tools.`,
  },
  {
    img: "assets/images/projects/majesty.png",
    title: "MAJESTY",
    desc: `An ecom API that features 3D preview for its products. The 3D models are generated using a set of images from multiple angles, then processed using photogrammetry algorithms. It also includes a shop & orders management system along with statistics.`,
  },
  {
    img: "assets/images/projects/bassmati.png",
    title: "Bassmati",
    desc: `An app developed for a startup. Its purpose is connecting Psychologists, Speech Therapist & Patients. It includs medical records storage and encryption, appoinments management, Staff authentication, Payments verification.`,
  },
  {
    img: "assets/images/projects/timeley.png",
    title: "Timeley",
    desc: `A schedule management API. It allows businesses to manage their appointments through the automated scheduling system. The client chooses from the working times, then the request is gonna be auto processed.`,
  },

  {
    img: "assets/images/projects/chat.png",
    title: "Chat App",
    desc: `An encrypted chatting system with integrated VPN and fully customizable UI and features. It includes an API intergration too.`,
  },

  {
    img: "assets/images/projects/elmeyloudre.png",
    title: "El meyloud RE",
    desc: `A platform that reunites real estate agents and clients. It encapsulates various features such Geolocation, property validation, encrypted contracts and appointments management.`,
    url: "https://github.com/zaqks/el_meyloud_re",
  },

  {
    img: "assets/images/projects/elrafik.png",
    title: "El rafik",
    desc: `A startup app that won a label in 2024. It allows Psychology students & professional to register for an intership ot a training. The approved ones would be able to be contacted by future patients through the app.`,
  },
  {
    img: "assets/images/projects/sdl_raycast.png",
    title: "SDL Raycaster",
    desc: `A basic raycaster first interpretation using the SDL library based on the techniques used to make the famous DOOM game. It is able to render maps defined by a 2D array.`,
    url: "https://github.com/zaqks/SDL_RAYCASTER",
  },
  /*
  {
    img: "",
    title: "Resto app",
    desc: "resto desc",
  },
  */
  {
    img: "assets/images/projects/3d_proj.png",
    title: "3D Renderer",
    desc: `Built using SDL, this is a tool to render objects defined by various points and vertices. It is possible to interact with them by applying the essential projection matrices.`,
    url: "https://github.com/zaqks/SDL_3D_Projection",
  },
];

const project_cards = new ProjectCard("project_cards");

for (const project of PROJECTS) {
  project_cards.spawn(project.img, project.title, project.desc, project.url);
}
