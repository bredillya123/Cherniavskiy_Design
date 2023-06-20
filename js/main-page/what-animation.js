// what animation
const drawingsBtn = document.querySelector(".drawings");
const drawingsBackground = document.querySelector(".drawings .what__info");
const drawingsTitle = document.querySelector(".drawings .what__info .what__text");
const drawingsInfo = document.querySelector(".drawings-popup");
const drawingPopupClose = document.getElementById("drawings-close");

const vizualizationBtn = document.querySelector(".vizualization");
const vizualizationBackground = document.querySelector(".vizualization .what__info");
const vizualizationTitle = document.querySelector(".vizualization .what__info .what__text");
const vizualizationInfo = document.querySelector(".vizualization-popup");
const vizualizationPopupClose = document.getElementById("vizualization-close");

const implementationBtn = document.querySelector(".implementation");
const implementationBackground = document.querySelector(".implementation .what__info");
const implementationTitle = document.querySelector(".implementation .what__info .what__text");
const implementationInfo = document.querySelector(".implementation-popup");
const implementationPopupClose = document.getElementById("implementation-close");

// drawings open
if (drawingsBtn) {
  drawingsBtn.addEventListener("click", DrawingsBtnClick);
};

function DrawingsBtnClick() {
  drawingsBtn.classList.add("elem--active");
  drawingsBackground.classList.add("what__info--active");
  drawingsTitle.classList.add("what__text--active");
  drawingsInfo.classList.add("drawings-popup--active");
  vizualizationBtn.classList.add("what__elem--active");
  implementationBtn.classList.add("what__elem--active");
};

// vizualization open
if (vizualizationBtn) {
  vizualizationBtn.addEventListener("click", VizualizationBtnClick);
};

function VizualizationBtnClick() {
  vizualizationBtn.classList.add("elem--active");
  vizualizationBtn.classList.add("elem--active-right");
  vizualizationBackground.classList.add("what__info--active");
  vizualizationTitle.classList.add("what__text--active");
  vizualizationInfo.classList.add("drawings-popup--active");
  drawingsBtn.classList.add("what__elem--active");
  implementationBtn.classList.add("what__elem--active-r");
};

// implementation open
if (implementationBtn) {
  implementationBtn.addEventListener("click", ImplementationBtnClick);
};

function ImplementationBtnClick() {
  implementationBtn.classList.add("elem--active");
  implementationBtn.classList.add("elem--active-right-double");
  implementationBackground.classList.add("what__info--active");
  implementationTitle.classList.add("what__text--active");
  implementationInfo.classList.add("drawings-popup--active");
  drawingsBtn.classList.add("what__elem--active");
  vizualizationBtn.classList.add("what__elem--active");
};

// drawings close
if (drawingPopupClose) {
  drawingPopupClose.addEventListener("click", DrawingsClose);
};

function DrawingsClose(e) {
  e.preventDefault();
  drawingsBtn.classList.remove("elem--active");
  drawingsBackground.classList.remove("what__info--active");
  drawingsTitle.classList.remove("what__text--active");
  drawingsInfo.classList.remove("drawings-popup--active");
  vizualizationBtn.classList.remove("what__elem--active");
  implementationBtn.classList.remove("what__elem--active");
};

// vizualization close
if (vizualizationPopupClose) {
  vizualizationPopupClose.addEventListener("click", VizualizationClose);
};

function VizualizationClose(e) {
  e.preventDefault();
  vizualizationBtn.classList.remove("elem--active");
  vizualizationBtn.classList.remove("elem--active-right");
  vizualizationBackground.classList.remove("what__info--active");
  vizualizationTitle.classList.remove("what__text--active");
  vizualizationInfo.classList.remove("drawings-popup--active");
  drawingsBtn.classList.remove("what__elem--active");
  implementationBtn.classList.remove("what__elem--active-r");
};

// implementation close
if (implementationPopupClose) {
  implementationPopupClose.addEventListener("click", ImplementationClose);
};

function ImplementationClose(e) {
  e.preventDefault();
  implementationBtn.classList.remove("elem--active");
  implementationBtn.classList.remove("elem--active-right-double");
  implementationBackground.classList.remove("what__info--active");
  implementationTitle.classList.remove("what__text--active");
  implementationInfo.classList.remove("drawings-popup--active");
  drawingsBtn.classList.remove("what__elem--active");
  vizualizationBtn.classList.remove("what__elem--active");
};