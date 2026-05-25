const stockVehicles = [
  {
    title: "Toyota Corolla XEI 2024",
    name: "Toyota Corolla XEI",
    details: "2024 AUTOMATICO",
    price: "R$ 145.000,00",
    image: "img/corolla.xei7.jpeg",
    category: "carro",
    status: "disponivel",
  },
  {
    title: "Chevrolet Corsa Maxx 1.4",
    name: "Chevrolet Corsa Maxx 1.4",
    details: "2012 MANUAL",
    price: "R$ 34.000,00",
    image: "img/corsa.jpeg",
    category: "carro",
    status: "disponivel",
  },
  {
    title: "Chevrolet Cruze LTZ",
    name: "Chevrolet Cruze LTZ",
    details: "2013 AUTOMATICO",
    price: "R$ 62.200,00",
    image: "img/cruze.jpeg",
    category: "carro",
    status: "disponivel",
  },
  {
    title: "Chevrolet Onix LTZ",
    name: "Chevrolet Onix LTZ",
    details: "2019 AUTOMATICO",
    price: "R$ 68.700,00",
    image: "img/onix.jpeg",
    category: "carro",
    status: "disponivel",
  },
  {
    title: "Chevrolet Prisma LTZ",
    name: "Chevrolet Prisma LTZ",
    details: "2015 AUTOMATICO",
    price: "R$ 58.000,00",
    image: "img/prisma.jpeg",
    category: "carro",
    status: "disponivel",
  },
  {
    title: "Fiat Strada Working",
    name: "Fiat Strada Working",
    details: "2020 COMPLETO MANUAL",
    price: "VENDIDO",
    image: "img/STRADA.jpeg",
    category: "carro",
    status: "vendido",
  },
  {
    title: "Honda Biz 125 ES",
    name: "Honda Biz 125 ES",
    details: "2010",
    price: "R$ 9.500,00",
    image: "img/BIZ.jpeg",
    category: "moto",
    status: "disponivel",
  },
  {
    title: "Sea Doo GTI 170 SE",
    name: "Sea Doo GTI 170 SE",
    details: "2023",
    price: "R$ 107.000,00",
    image: "img/JETSKI.jpeg",
    category: "nautico",
    status: "disponivel",
  },
];

const stockGrid = document.querySelector("#stock-grid");
const stockSearch = document.querySelector("#stock-search");
const stockFilter = document.querySelector("#stock-filter");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const favoritesButton = document.querySelector("#favorites-button");
const favoritesModal = document.querySelector("#favorites-modal");
const favoritesClose = document.querySelector(".favorites-close");
const favoritesList = document.querySelector("#favorites-list");
const favoritesKey = "carraoSavedVehicles";

function getSavedVehicles() {
  return JSON.parse(localStorage.getItem(favoritesKey)) || [];
}

function saveVehicles(savedVehicles) {
  localStorage.setItem(favoritesKey, JSON.stringify(savedVehicles));
}

function getFilteredVehicles() {
  const searchText = stockSearch.value.toLowerCase().trim();
  const filter = stockFilter.value;

  return stockVehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchText) || vehicle.details.toLowerCase().includes(searchText);
    const matchesFilter = filter === "todos" || vehicle.category === filter || vehicle.status === filter;

    return matchesSearch && matchesFilter;
  });
}

function renderStock() {
  const vehicles = getFilteredVehicles();

  if (vehicles.length === 0) {
    stockGrid.innerHTML = '<p class="stock-empty">Nenhum veiculo encontrado.</p>';
    return;
  }

  stockGrid.innerHTML = vehicles
    .map(
      (vehicle) => `
        <article class="stock-card">
          <a href="veiculo.html?carro=${encodeURIComponent(vehicle.title)}">
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <div class="stock-card-content">
              <span class="stock-status ${vehicle.status}">${vehicle.status}</span>
              <h2>${vehicle.name}</h2>
              <p>${vehicle.details}</p>
              <strong>${vehicle.price}</strong>
            </div>
          </a>
        </article>
      `
    )
    .join("");
}

function renderFavorites() {
  const savedVehicles = getSavedVehicles();
  const favoriteVehicles = savedVehicles
    .map((title) => stockVehicles.find((vehicle) => vehicle.title === title))
    .filter(Boolean);

  if (favoriteVehicles.length === 0) {
    favoritesList.innerHTML = '<p class="favorite-empty">Nenhum veiculo salvo ainda.</p>';
    return;
  }

  favoritesList.innerHTML = favoriteVehicles
    .map(
      (vehicle) => `
        <div class="favorite-item">
          <img src="${vehicle.image}" alt="${vehicle.name}">
          <div>
            <h3>${vehicle.name}</h3>
            <p>${vehicle.details}</p>
            <strong>${vehicle.price}</strong>
          </div>
          <div class="favorite-actions">
            <a href="veiculo.html?carro=${encodeURIComponent(vehicle.title)}">Ver</a>
            <button type="button" data-remove-favorite="${vehicle.title}">Remover</button>
          </div>
        </div>
      `
    )
    .join("");
}

function openFavorites() {
  renderFavorites();
  favoritesModal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeFavorites() {
  favoritesModal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

stockSearch.addEventListener("input", renderStock);
stockFilter.addEventListener("change", renderStock);

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

favoritesButton.addEventListener("click", openFavorites);
favoritesClose.addEventListener("click", closeFavorites);

favoritesModal.addEventListener("click", (event) => {
  if (event.target === favoritesModal) {
    closeFavorites();
  }
});

favoritesList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-favorite]");

  if (!removeButton) {
    return;
  }

  const vehicleTitle = removeButton.dataset.removeFavorite;
  const savedVehicles = getSavedVehicles().filter((title) => title !== vehicleTitle);

  saveVehicles(savedVehicles);
  renderFavorites();
});

renderStock();
