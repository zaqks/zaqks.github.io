const PROJECTS = [
  {
    img: "assets/images/projects/quake.png",
    title: "QuakeGuard",
    desc: "An API and app for earthquake detection using an Arduino vibration sensor or dedicated hardware. Prototyping includes Wi-Fi and Bluetooth integration.",
    url: "https://github.com/zaqks/QuakeGuard"
  },
  {
    img: "assets/images/comingsoon.jpg",
    title: "Movie Rating (RNN)",
    desc: "An RNN will be added to the MLZ library to rate movies based on audience comments, classifying them as positive, negative, or neutral."
  },
  {
    img: "assets/images/comingsoon.jpg",
    title: "DOOM Web",
    desc: "An upgrade and web version of my previous Raycaster, featuring advanced projection methods, collision detection, Y-axis support, a detailed map, and WebGL instead of software acceleration."
  },
  {
    img: "assets/images/projects/encryption.png",
    title: "Public Web Encryption",
    desc: "A simple implementation of an encrypted public webpage using the crypto-js library. Content is stored as a token and can only be viewed after decryption.",
    url: "https://github.com/zaqks/public_web_encryption"
  },
  {
    img: "assets/images/projects/ml.png",
    title: "Digit Recognition (Custom)",
    desc: "Each output class is defined by a matrix based on training data, allowing digit patterns to be identified through simple matrix comparisons."
  },
  {
    img: "assets/images/projects/ml.png",
    title: "Digit Recognition (CNN)",
    desc: "The MNIST problem solved using a CNN with a sigmoid activation function, achieving 98.4% precision. The NN is linked to an API for human input with improved scaling and centering of the input grid."
  },
  {
    img: "assets/images/projects/ml.png",
    title: "Digit Recognition (NN)",
    desc: "The MNIST problem solved with a 784x10x10 NN using a sigmoid activation function, achieving 97.8% precision. The NN is linked to an API for human input with improved scaling and centering of the input grid."
  },
  {
    img: "assets/images/projects/mlz.svg",
    title: "Machine Learning Library (MLZ)",
    desc: "A machine learning library built from scratch using Numpy. It provides an environment for developing custom layers and activation methods, supporting classical NNs and CNNs while expanding for additional tools."
  },
  {
    img: "assets/images/projects/majesty.png",
    title: "MAJESTY",
    desc: "An e-commerce API featuring 3D product previews generated from multi-angle images processed with photogrammetry algorithms. Includes shop and order management systems with statistics."
  },
  {
    img: "assets/images/projects/bassmati.png",
    title: "Bassmati",
    desc: "An app connecting psychologists, speech therapists, and patients. Features include encrypted medical record storage, appointment management, staff authentication, and payment verification."
  },
  {
    img: "assets/images/projects/timeley.png",
    title: "Timeley",
    desc: "A schedule management API enabling businesses to automate appointment scheduling based on client-selected working times."
  },
  {
    img: "assets/images/projects/chat.png",
    title: "Chat App",
    desc: "An encrypted chat system with integrated VPN and customizable UI features. Includes API integration."
  },
  {
    img: "assets/images/projects/elmeyloudre.png",
    title: "El Meyloud RE",
    desc: "A platform connecting real estate agents and clients. Features include geolocation, property validation, encrypted contracts, and appointment management.",
    url: "https://github.com/zaqks/el_meyloud_re"
  },
  {
    img: "assets/images/projects/elrafik.png",
    title: "El Rafik",
    desc: "A startup app awarded a label in 2024. It allows psychology students and professionals to register for internships or training. Approved users can connect with future patients through the app."
  },
  {
    img: "assets/images/projects/sdl_raycast.png",
    title: "SDL Raycaster",
    desc: "A basic raycaster implemented using the SDL library based on techniques from the DOOM game. It renders maps defined by a 2D array.",
    url: "https://github.com/zaqks/SDL_RAYCASTER"
  },
  {
    img: "assets/images/projects/3d_proj.png",
    title: "3D Renderer",
    desc: "Built using SDL, this tool renders objects defined by points and vertices. Users can interact with objects by applying essential projection matrices.",
    url: "https://github.com/zaqks/SDL_3D_Projection"
  }
];

const project_cards = new ProjectCard("project_cards");

for (const project of PROJECTS) {
  project_cards.spawn(project.img, project.title, project.desc, project.url);
}
