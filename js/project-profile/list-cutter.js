// spare list of rooms  (project-profile page)
// Получаем ссылки на списки и блоки
const firstList = document.getElementById("firstList");
const secondList = document.getElementById("secondList");
const catalogueItems = document.querySelectorAll(".planning-info__catalogue li");

// Создаем массив для хранения пунктов
const catalogueData = [];

// Заносим пункты в массив
catalogueItems.forEach((item) => {
  const room = item.querySelector(".list-planning__num").textContent;
  const area = parseFloat(item.querySelector("div:last-child").textContent);
  catalogueData.push({ room, area });
});

// Сортируем пункты по площади (по возрастанию)
catalogueData.sort((a, b) => a.area - b.area);

// Очищаем списки перед добавлением новых элементов
if (firstList) {
  firstList.innerHTML = "";
}
if (secondList) {
  secondList.innerHTML = "";
}

// Разбиваем данные и добавляем элементы в списки
const halfLength = Math.ceil(catalogueData.length / 2);
for (let i = 0; i < catalogueData.length; i++) {
  const { room, area } = catalogueData[i];
  const listItem = document.createElement("li");
  listItem.classList.add("list-planning__item");
  listItem.innerHTML = `<div class="list-planning__num">${room}</div><div>${area}</div>`;

  if (firstList && i < halfLength) {
    firstList.appendChild(listItem);
  } else if (secondList) {
    secondList.appendChild(listItem);
  }
};


// show more mobile version
const btnMore = document.getElementById("btn-more");
const secondList1 = document.getElementById("secondList");

btnMore.addEventListener("click", function(){
  console.log('Good');
  btnMore.style.display = "none";
  secondList1.style.display = "block";
});