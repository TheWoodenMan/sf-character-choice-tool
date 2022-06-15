// Declare targetting variables for all classes

const infoSection = document.querySelectorAll(".info-section");
const imageContainer = document.querySelectorAll(".image-container");

// Decare targetting variables for the center section of all classes
const androidSection = document.querySelector("#android-section");
const humanSection = document.querySelector("#human-section");
const kasathaSection = document.querySelector("#kasatha-section");
const lashuntaSection = document.querySelector("#lashunta-section");
const shirrenSection = document.querySelector("#shirren-section");
const veskSection = document.querySelector("#vesk-section");
const ysokiSection = document.querySelector("#ysoki-section");
const dwarvesSection = document.querySelector("#dwarves-section");

const halforcSection = document.querySelector("#halforc-section");

// Declare taretting variables for all class thumbnails
const androids = document.querySelector("#androids");
const humans = document.querySelector("#humans");
const kasathas = document.querySelector("#kasathas");
const lashuntas = document.querySelector("#lashuntas");
const shirrens = document.querySelector("#shirrens");
const vesk = document.querySelector("#vesk");
const ysoki = document.querySelector("#ysoki");
const dwarves = document.querySelector("#dwarves");

const halforcs = document.querySelector("#halforcs");

// Set up event listeners for all classes
androids.addEventListener("click", viewAndroids);
humans.addEventListener("click", viewHumans);
kasathas.addEventListener("click", viewKasathas);
lashuntas.addEventListener("click", viewLashuntas);
shirrens.addEventListener("click", viewShirrens);
vesk.addEventListener("click", viewVesk);
ysoki.addEventListener("click", viewYsoki);
dwarves.addEventListener("click", viewDwarves);

halforcs.addEventListener("click", viewHalforcs);

// Set up view sections for all classes

function viewAndroids() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  androids.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  androidSection.classList.remove("hidden");
}

function viewHumans() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  humans.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  humanSection.classList.remove("hidden");
}

function viewKasathas() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  kasathas.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  kasathaSection.classList.remove("hidden");
}

function viewLashuntas() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  lashuntas.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  lashuntaSection.classList.remove("hidden");
}

function viewShirrens() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  shirrens.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  shirrenSection.classList.remove("hidden");
}

function viewVesk() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  vesk.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  veskSection.classList.remove("hidden");
}

function viewYsoki() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  ysoki.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  ysokiSection.classList.remove("hidden");
}

function viewDwarves() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  dwarves.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  dwarvesSection.classList.remove("hidden");
}

function viewHalforcs() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  halforcSection.classList.remove("hidden");
  halforcs.classList.add("selected-thumb");
}
