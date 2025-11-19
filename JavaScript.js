const topMovies = [
  {
    rank: 1,
    title: "Buen Provecho Majestad.",
    description: "Una chef viaja en el tiempo a la dinastía Joseon de Corea, donde debe cocinar para un rey tiránico y exigente. Aunque inicialmente debe usar su talento culinario para sobrevivir, gradualmente gana la confianza del rey y se enreda en las intrigas de la corte",
    genre: "Drama",
    actors: ["Lee Min Ho", "Han Ji Min"],
    image: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeJVEuzZnpa5UV-h2mTp3CKkG4NKOSHnehwd0wczDzOlY2YM8vz32P7aibH_LeUd3E122GGDNVOa2Xh7UlbdumywOV3tfgVuj0xK.jpg?r=5fc",
    similar: [
      { title: "Mas alla dela barra", image: "https://asianwiki.com/images/0/00/Esquire_KD-p.jpeg" },
      { title: "Avatar", image: "https://spoilertown.com/wp-content/uploads/2024/07/avatar-2009.webp" }
    ]
  },
  {
    rank: 2,
    title: "Kung fu panda 4.",
    description: "Po mientras es elegido para convertirse en el Líder Espiritual del Valle de la Paz, lo que significa que debe encontrar y entrenar a un nuevo Guerrero Dragón. En su camino, se encuentra con una nueva y poderosa hechicera que cambia de forma llamada La Camaleona",
    genre: "Aventura",
    actors: ["Scarlett Johansson", "Tom Hardy"],
    image: "https://pics.filmaffinity.com/Kung_Fu_Panda_4-159494298-large.jpg",
    similar: [
      { title: "Kung fu panda 3", image: "https://sm.ign.com/ign_pl/screenshot/default/1_27ye.png" },
      { title: "Los Increibles 2", image: "https://lumiere-a.akamaihd.net/v1/images/eu_inc-2_showcase_hero_m_8651c594.jpeg?region=0,0,750,668" }
    ]
  },
  {
    rank: 3,
    title: "John Wick 4",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://butacamax.com/wp-content/uploads/2025/04/Pelicula404_JohnWick4.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 4,
    title: "Pasión de gavilanes",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://m.media-amazon.com/images/M/MV5BMTY5MWEzMTMtZDU0Yy00ZDBjLWE2Y2MtY2ZlMmIwZGQ0Njk5XkEyXkFqcGc@._V1_.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 5,
    title: "King the Land",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://i.mydramalist.com/wJAkqn_4f.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 6,
    title: "Belleza Verdadera",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2020/12/w300/zfKcn6xqCu0zopDdWPiYC7t4R2g.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 7,
    title: "Amor Oculto",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://images.justwatch.com/poster/322944302/s718/hidden-love.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 8,
    title: "Emily en Paris",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZn7RyjhT_OGDLyEPxRrsGiOkji7nE2ADUROOkVZ1rj0pYHaAnYD2LTJs3dqfV5CIJtIUGKi06UIONGidWzZ6nUoKC2WFDd2o1H9TFM8i8nquFDc4AizjGd6gYEoUQb-uaT9VA.webp?r=4f9",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank:9 ,
    title: "Vendo puesta de sol",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://lionsgate.brightspotcdn.com/0f/6a/cedeb5e54c8bb3951d27b2703814/selling-sunset-season-8-shows-poster-01.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 10,
    title: "La Diplomatica",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2023/4/w300/1jEUtX0NQyZjZUt575061fKIaXm.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 11,
    title: "El juego: Nunca juegas solo",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://static.toiimg.com/photo/msid-124332680.jpeg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
  {
    rank: 12,
    title: "El Refugio Atómico",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://theshowroommag.com/wp-content/uploads/2025/10/hq720-2.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
   {
    rank: 13,
    title: "Mobius: Día de insomnio",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://images.justwatch.com/poster/335932592/s718/mobius-dia-de-insomnio.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
   {
    rank: 14,
    title: "1899",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://resizing.flixster.com/d7JcAw3QHaVCp3vvrY0NQjPbuqw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22550084_b_h9_aa.jpg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
   {
    rank: 15,
    title: "El Chema",
    description: "A diver discovers a lost city beneath the waves.",
    genre: "Acción",
    actors: ["Jason Momoa", "Emily Blunt"],
    image: "https://ponlotv.com/upload/Q281ETNljmN9A4Ra7eLq4hvyb.jpeg",
    similar: [
      { title: "Blue Depths", image: "https://via.placeholder.com/100x150.png?text=Blue+Depths" },
      { title: "Under Currents", image: "https://via.placeholder.com/100x150.png?text=Under+Currents" }
    ]
  },
];

const moviesContainer = document.getElementById("moviesCarousel");
const modal = document.getElementById("movie-modal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalRank = document.getElementById("modal-rank");
const modalDescription = document.getElementById("modal-description");
const movieBackground = document.getElementById("movieBackground");
const recommendedContainer = document.getElementById("recommendedContainer");
const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");
const dropdownBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("menuDropdown");
const leftScroll = document.getElementById("leftScroll");
const rightScroll = document.getElementById("rightScroll");
const genreChips = document.getElementById("genreChips");

function displayMovies(list) {
  moviesContainer.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`;
    card.addEventListener("click", () => openModal(movie));
    moviesContainer.appendChild(card);
  });
}

displayMovies(topMovies);

function openModal(movie) {
  modal.style.display = "block";
  modalTitle.textContent = movie.title;
  modalRank.textContent = `Posición #${movie.rank}`;
  modalDescription.textContent = movie.description;
  movieBackground.style.backgroundImage = `url(${movie.image})`;

  recommendedContainer.innerHTML = "";
  movie.similar.forEach(sim => {
    const img = document.createElement("img");
    img.src = sim.image;
    img.alt = sim.title;
    recommendedContainer.appendChild(img);
  });
}

closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

leftScroll.addEventListener("click", () => moviesContainer.scrollBy({ left: -300, behavior: "smooth" }));
rightScroll.addEventListener("click", () => moviesContainer.scrollBy({ left: 300, behavior: "smooth" }));

dropdownBtn.addEventListener("click", () => dropdownMenu.classList.toggle("show"));
window.addEventListener("click", e => { if (!dropdownBtn.contains(e.target)) dropdownMenu.classList.remove("show"); });

const genres = [...new Set(topMovies.map(m => m.genre))];
genres.forEach(g => {
  const chip = document.createElement("div");
  chip.className = "chip";
  chip.textContent = g;
  chip.addEventListener("click", () => {
    const filtered = topMovies.filter(m => m.genre === g);
    displayMovies(filtered);
  });
  genreChips.appendChild(chip);
});

function showSuggestions(query) {
  suggestionsBox.innerHTML = "";
  if (!query) {
    suggestionsBox.classList.remove("active");
    return;
  }
  const q = query.toLowerCase();
  const results = topMovies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.actors.some(a => a.toLowerCase().includes(q))
  );
  if (results.length > 0) {
    suggestionsBox.classList.add("active");
    results.forEach(m => {
      const item = document.createElement("div");
      item.textContent = `${m.title} (${m.genre})`;
      item.addEventListener("click", () => {
        openModal(m);
        suggestionsBox.classList.remove("active");
      });
      suggestionsBox.appendChild(item);
    });
  } else {
    suggestionsBox.classList.remove("active");
  }
}

searchInput.addEventListener("input", e => showSuggestions(e.target.value));
