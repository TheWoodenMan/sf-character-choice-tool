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
const elvesSection = document.querySelector("#elves-section");
const gnomesSection = document.querySelector("#gnomes-section");
const halfelvesSection = document.querySelector("#halfelves-section");
const halflingsSection = document.querySelector("#halflings-section");
const halforcSection = document.querySelector("#halforc-section");
const astrazoansSection = document.querySelector("#astrazoans-section");
const bantridsSection = document.querySelector("#bantrids-section");
const boraisSection = document.querySelector("#borais-section");
const khizarsSection = document.querySelector("#khizars-section");
const SROsSection = document.querySelector("#SROs-section");
const strixSection = document.querySelector("#strix-section");
const barathuSection = document.querySelector("#barathu-section");
const contemplativeSection = document.querySelector("#contemplative-section");
const draelikSection = document.querySelector("#draelik-section");
const drowSection = document.querySelector("#drow-section");
const formianSection = document.querySelector("#formian-section");
const graySection = document.querySelector("#gray-section");

// Declare taretting variables for all class thumbnails
const androids = document.querySelector("#androids");
const humans = document.querySelector("#humans");
const kasathas = document.querySelector("#kasathas");
const lashuntas = document.querySelector("#lashuntas");
const shirrens = document.querySelector("#shirrens");
const vesk = document.querySelector("#vesk");
const ysoki = document.querySelector("#ysoki");
const dwarves = document.querySelector("#dwarves");
const elves = document.querySelector("#elves");
const gnomes = document.querySelector("#gnomes");
const halfelves = document.querySelector("#halfelves");
const halflings = document.querySelector("#halflings");
const halforcs = document.querySelector("#halforcs");
const astrazoans = document.querySelector("#astrazoans");
const bantrids = document.querySelector("#bantrids");
const borais = document.querySelector("#borais");
const khizars = document.querySelector("#khizars");
const SROs = document.querySelector("#SROs");
const strix = document.querySelector("#strix");
const barathu = document.querySelector("#barathu");
const contemplative = document.querySelector("#contemplative");
const draelik = document.querySelector("#draelik");
const drow = document.querySelector("#drow");
const formian = document.querySelector("#formian");
const gray = document.querySelector("#gray");

// Set up event listeners for all classes
androids.addEventListener("click", viewAndroids);
humans.addEventListener("click", viewHumans);
kasathas.addEventListener("click", viewKasathas);
lashuntas.addEventListener("click", viewLashuntas);
shirrens.addEventListener("click", viewShirrens);
vesk.addEventListener("click", viewVesk);
ysoki.addEventListener("click", viewYsoki);
dwarves.addEventListener("click", viewDwarves);
elves.addEventListener("click", viewElves);
gnomes.addEventListener("click", viewGnomes);
halfelves.addEventListener("click", viewHalfelves);
halflings.addEventListener("click", viewHalflings);
halforcs.addEventListener("click", viewHalforcs);
astrazoans.addEventListener("click", viewAstrazoans);
bantrids.addEventListener("click", viewBantrids);
borais.addEventListener("click", viewBorais);
khizars.addEventListener("click", viewKhizars);
SROs.addEventListener("click", viewSROs);
strix.addEventListener("click", viewStrix);
barathu.addEventListener("click", viewBarathu);
contemplative.addEventListener("click", viewContemplative);
draelik.addEventListener("click", viewDraelik);
drow.addEventListener("click", viewDrow);
formian.addEventListener("click", viewFormian);
gray.addEventListener("click", viewGray);

// Set up view sections for all classes

function viewSelector(raceThumbnail, raceSection) {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  document.getElementById(`${raceThumbnail}`).classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  document.getElementById(`${raceSection}`).classList.remove("hidden");
}

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

function viewElves() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  elves.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  elvesSection.classList.remove("hidden");
}

function viewGnomes() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  gnomes.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  gnomesSection.classList.remove("hidden");
}

function viewHalfelves() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  halfelves.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  halfelvesSection.classList.remove("hidden");
}

function viewHalflings() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  halflings.classList.add("selected-thumb");
  infoSection.forEach((el) => el.classList.add("hidden"));
  halflingsSection.classList.remove("hidden");
}

function viewHalforcs() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  halforcSection.classList.remove("hidden");
  halforcs.classList.add("selected-thumb");
}

function viewHalforcs() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  halforcSection.classList.remove("hidden");
  halforcs.classList.add("selected-thumb");
}

function viewAstrazoans() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  astrazoansSection.classList.remove("hidden");
  astrazoans.classList.add("selected-thumb");
}

function viewBantrids() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  bantridsSection.classList.remove("hidden");
  bantrids.classList.add("selected-thumb");
}

function viewBorais() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  boraisSection.classList.remove("hidden");
  borais.classList.add("selected-thumb");
}

function viewKhizars() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  khizarsSection.classList.remove("hidden");
  khizars.classList.add("selected-thumb");
}

function viewSROs() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  SROsSection.classList.remove("hidden");
  SROs.classList.add("selected-thumb");
}

function viewStrix() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  strixSection.classList.remove("hidden");
  strix.classList.add("selected-thumb");
}

function viewBarathu() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  barathuSection.classList.remove("hidden");
  barathu.classList.add("selected-thumb");
}

function viewContemplative() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  contemplativeSection.classList.remove("hidden");
  contemplative.classList.add("selected-thumb");
}

function viewDraelik() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  draelikSection.classList.remove("hidden");
  draelik.classList.add("selected-thumb");
}

function viewDrow() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  drowSection.classList.remove("hidden");
  drow.classList.add("selected-thumb");
}

function viewFormian() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  formianSection.classList.remove("hidden");
  formian.classList.add("selected-thumb");
}

function viewGray() {
  imageContainer.forEach((el) => el.classList.remove("selected-thumb"));
  infoSection.forEach((el) => el.classList.add("hidden"));
  graySection.classList.remove("hidden");
  gray.classList.add("selected-thumb");
}
