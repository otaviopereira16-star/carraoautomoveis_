const vehicles = {
  "Toyota Corolla XEI 2024": {
    name: "Toyota Corolla XEI",
    details: "2024 AUTOMATICO",
    price: "R$ 145.000,00",
    description:
      "Completo, bancos em couro, central multimidia, camera de re, sensor de estacionamento e controle de estabilidade.",
    photos: [
      "img/corolla.xei7.jpeg",
      "img/corolla.xei.jpeg",
      "img/corolla.xei2.jpeg",
      "img/corolla.xei3.jpeg",
      "img/corolla.xei4.jpeg",
      "img/corolla.xei5.jpeg",
      "img/corolla.xei6.jpeg",
      "img/corolla.xei8.jpeg",
      "img/corolla.xei9.jpeg",
    ],
  },
  "Chevrolet Corsa Maxx 1.4": {
    name: "Chevrolet Corsa Maxx 1.4",
    details: "2012 MANUAL",
    price: "R$ 34.000,00",
    description: "Veiculo economico, compacto, ideal para o dia a dia e com otimo custo-beneficio.",
    photos: [
      "img/corsa.jpeg",
      "img/corsa2.jpeg",
      "img/corsa3.jpeg",
      "img/corsa4.jpeg",
      "img/corsa5.jpeg",
      "img/corsa6.jpeg",
      "img/corsa7.jpeg",
      "img/corsa8.jpeg",
      "img/corsa9.jpeg",
      "img/corsa10.jpeg",
    ],
  },
  "Chevrolet Cruze LTZ": {
    name: "Chevrolet Cruze LTZ",
    details: "2013 AUTOMATICO",
    price: "R$ 62.200,00",
    description: "Sedan completo, confortavel, com multimidia, direcao eletrica e excelente desempenho.",
    photos: [
      "img/cruze.jpeg",
      "img/cruze2.jpeg",
      "img/cruze3.jpeg",
      "img/cruze4.jpeg",
      "img/cruze5.jpeg",
      "img/cruze6.jpeg",
      "img/cruze7.jpeg",
      "img/cruze8.jpeg",
      "img/cruze9.jpeg",
    ],
  },
  "Chevrolet Onix LTZ": {
    name: "Chevrolet Onix LTZ",
    details: "2019 AUTOMATICO",
    price: "R$ 68.700,00",
    description:
      "Hatch completo, economico, com multimidia, direcao eletrica, sensor de estacionamento e excelente custo-beneficio.",
    photos: [
      "img/onix.jpeg",
      "img/onix2.jpeg",
      "img/onix3.jpeg",
      "img/onix4.jpeg",
      "img/onix5.jpeg",
      "img/onix6.jpeg",
      "img/onix7.jpeg",
      "img/onix8.jpeg",
      "img/onix9.jpeg",
      "img/onix10.jpeg",
    ],
  },
  "Chevrolet Prisma LTZ": {
    name: "Chevrolet Prisma LTZ",
    details: "2015 AUTOMATICO",
    price: "R$ 58.000,00",
    description: "Sedan completo, economico, confortavel, com multimidia, bancos em couro e excelente custo-beneficio.",
    photos: [
      "img/prisma.jpeg",
      "img/prisma2.jpeg",
      "img/prisma3.jpeg",
      "img/prisma4.jpeg",
      "img/prisma5.jpeg",
      "img/prisma6.jpeg",
      "img/prisma7.jpeg",
      "img/prisma8.jpeg",
      "img/prisma9.jpeg",
      "img/prisma10.jpeg",
    ],
  },
  "Fiat Strada Working": {
    name: "Fiat Strada Working",
    details: "2020 COMPLETO MANUAL",
    price: "VENDIDO",
    description: "Picape completa, robusta, economica, ideal para trabalho e uso diario.",
    photos: [
      "img/STRADA.jpeg",
      "img/STRADA2.jpeg",
      "img/STRADA3.jpeg",
      "img/STRADA4.jpeg",
      "img/STRADA5.jpeg",
      "img/STRADA6.jpeg",
      "img/STRADA7.jpeg",
      "img/STRADA8.jpeg",
      "img/STRADA9.jpeg",
      "img/STRADA10.jpeg",
    ],
  },
  "Honda Biz 125 ES": {
    name: "Honda Biz 125 ES",
    details: "2010",
    price: "R$ 9.500,00",
    description: "Moto economica, pratica, ideal para o dia a dia e com excelente custo-beneficio.",
    photos: [
      "img/BIZ.jpeg",
      "img/BIZ2.jpeg",
      "img/BIZ3.jpeg",
      "img/BIZ4.jpeg",
      "img/BIZ5.jpeg",
      "img/BIZ6.jpeg",
      "img/BIZ7.jpeg",
      "img/BIZ8.jpeg",
      "img/BIZ9.jpeg",
    ],
  },
  "Sea Doo GTI 170 SE": {
    name: "Sea Doo GTI 170 SE",
    details: "2023",
    price: "R$ 107.000,00",
    description: "Jet ski moderno, potente, confortavel e pronto para momentos de lazer na agua.",
    photos: [
      "img/JETSKI.jpeg",
      "img/JETSKI2.jpeg",
      "img/JETSKI3.jpeg",
      "img/JETSKI4.jpeg",
      "img/JETSKI5.jpeg",
      "img/JETSKI6.jpeg",
      "img/JETSKI7.jpeg",
      "img/JETSKI8.jpeg",
      "img/JETSKI9.jpeg",
      "img/JETSKI10.jpeg",
    ],
  },
};

const params = new URLSearchParams(window.location.search);
const selectedTitle = params.get("carro");
const vehicle = vehicles[selectedTitle] || vehicles["Toyota Corolla XEI 2024"];
let currentPhoto = 0;

const vehicleImage = document.querySelector("#vehicle-image");
const vehicleThumbs = document.querySelector("#vehicle-thumbs");
const vehicleName = document.querySelector("#vehicle-name");
const vehicleDetails = document.querySelector("#vehicle-details");
const vehiclePrice = document.querySelector("#vehicle-price");
const vehicleDescription = document.querySelector("#vehicle-description");
const vehicleSpecs = document.querySelector("#vehicle-specs");
const whatsappButton = document.querySelector("#vehicle-whatsapp");
const prevButton = document.querySelector(".vehicle-prev");
const nextButton = document.querySelector(".vehicle-next");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const favoriteButton = document.querySelector("#favorite-button");
const favoriteIcon = favoriteButton.querySelector(".favorite-icon");
const favoriteText = favoriteButton.querySelector(".favorite-text");
const favoritesKey = "carraoSavedVehicles";
const favoritesHeaderButton = document.querySelector("#favorites-button");
const favoritesModal = document.querySelector("#favorites-modal");
const favoritesClose = document.querySelector(".favorites-close");
const favoritesList = document.querySelector("#favorites-list");

function buildWhatsAppLink() {
  const message = `Ola, tenho interesse no ${vehicle.name}.`;
  return `https://wa.me/554498431315?text=${encodeURIComponent(message)}`;
}

function showPhoto(index) {
  currentPhoto = index;
  vehicleImage.src = vehicle.photos[currentPhoto];
  vehicleImage.alt = vehicle.name;

  vehicleThumbs.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === currentPhoto);
  });
}

function renderSpecs() {
  const specs = [
    ["Ano/modelo", vehicle.details.split(" ")[0]],
    ["Cambio", vehicle.details.includes("AUTOMATICO") ? "Automatico" : "Manual"],
    ["Loja", "Carrao Automoveis"],
    ["Contato", "(44) 9843-1315"],
  ];

  vehicleSpecs.innerHTML = specs
    .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function getSavedVehicles() {
  return JSON.parse(localStorage.getItem(favoritesKey)) || [];
}

function saveVehicles(savedVehicles) {
  localStorage.setItem(favoritesKey, JSON.stringify(savedVehicles));
}

function isVehicleSaved() {
  return getSavedVehicles().includes(selectedTitle);
}

function updateFavoriteButton() {
  const saved = isVehicleSaved();

  favoriteButton.classList.toggle("saved", saved);
  favoriteButton.setAttribute("aria-pressed", saved ? "true" : "false");
  favoriteIcon.textContent = saved ? "★" : "☆";
  favoriteText.textContent = saved ? "Veiculo salvo" : "Salvar veiculo";
}

function toggleFavorite() {
  const savedVehicles = getSavedVehicles();
  const vehicleIndex = savedVehicles.indexOf(selectedTitle);

  if (vehicleIndex >= 0) {
    savedVehicles.splice(vehicleIndex, 1);
  } else {
    savedVehicles.push(selectedTitle);
  }

  saveVehicles(savedVehicles);
  updateFavoriteButton();
}

function renderFavorites() {
  const savedVehicles = getSavedVehicles();
  const favoriteVehicles = savedVehicles.map((title) => vehicles[title]).filter(Boolean);

  if (favoriteVehicles.length === 0) {
    favoritesList.innerHTML = '<p class="favorite-empty">Nenhum veiculo salvo ainda.</p>';
    return;
  }

  favoritesList.innerHTML = savedVehicles
    .filter((title) => vehicles[title])
    .map((title) => {
      const favoriteVehicle = vehicles[title];

      return `
        <div class="favorite-item">
          <img src="${favoriteVehicle.photos[0]}" alt="${favoriteVehicle.name}">
          <div>
            <h3>${favoriteVehicle.name}</h3>
            <p>${favoriteVehicle.details}</p>
            <strong>${favoriteVehicle.price}</strong>
          </div>
          <div class="favorite-actions">
            <a href="veiculo.html?carro=${encodeURIComponent(title)}">Ver</a>
            <button type="button" data-remove-favorite="${title}">Remover</button>
          </div>
        </div>
      `;
    })
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

function renderVehicle() {
  document.title = `${vehicle.name} - Carrao Automoveis`;
  vehicleName.textContent = vehicle.name;
  vehicleDetails.textContent = vehicle.details;
  vehiclePrice.textContent = vehicle.price;
  vehicleDescription.textContent = vehicle.description;
  whatsappButton.href = buildWhatsAppLink();

  vehicleThumbs.innerHTML = vehicle.photos
    .map(
      (photo, index) =>
        `<button type="button" aria-label="Ver foto ${index + 1}"><img src="${photo}" alt="${vehicle.name}"></button>`
    )
    .join("");

  vehicleThumbs.querySelectorAll("button").forEach((button, index) => {
    button.addEventListener("click", () => showPhoto(index));
  });

  renderSpecs();
  updateFavoriteButton();
  showPhoto(0);
}

prevButton.addEventListener("click", () => {
  const previousPhoto = currentPhoto === 0 ? vehicle.photos.length - 1 : currentPhoto - 1;
  showPhoto(previousPhoto);
});

nextButton.addEventListener("click", () => {
  const nextPhoto = currentPhoto === vehicle.photos.length - 1 ? 0 : currentPhoto + 1;
  showPhoto(nextPhoto);
});

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

favoriteButton.addEventListener("click", toggleFavorite);
favoritesHeaderButton.addEventListener("click", openFavorites);
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
  updateFavoriteButton();
});

renderVehicle();
