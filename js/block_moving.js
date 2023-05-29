"use strict"
// ===================================
// Получаем ссылки на секцию, из которой нужно вырезать блоки, и на секцию, в которую нужно вставить блоки
const sourceSection = document.querySelector('.project-profile__item');
const sourceSection2 = document.querySelector('.project-profile__data');
const targetSection = document.querySelector('.project-profile__main-slider');

// Получаем ссылки на блоки, которые нужно вырезать
const block1 = sourceSection.querySelector('.project-profile__btn');
const block2 = sourceSection2.querySelector('.project-profile__info');

// Получаем ссылку на блок, в который нужно вставить блоки в целевой секции
const targetBlock = targetSection.querySelector('.main-slider__info');

// Создаем медиа запрос, который будет проверять ширину экрана
const mediaQuery = window.matchMedia('(min-width: 290.98px) and (max-width: 1024.98px)');

// Функция для выполнения операций вставки и удаления блоков в зависимости от результата проверки медиа запроса
function handleMediaQuery(event) {
  if (event.matches) {
    // Если условие медиа запроса выполняется, то вырезаем блоки из исходной секции
    if (sourceSection.contains(block1)) {
      sourceSection.removeChild(block1);
    }
    if (sourceSection2.contains(block2)) {
      sourceSection2.removeChild(block2);
    }
    
    // Вставляем блоки в целевой блок в целевой секции
    targetBlock.appendChild(block1);
    targetBlock.appendChild(block2);
  } else {
    // Если условие медиа запроса не выполняется, то вырезанные блоки возвращаются в исходную секцию
    if (targetBlock.contains(block1)) {
      targetBlock.removeChild(block1);
    }
    if (targetBlock.contains(block2)) {
      targetBlock.removeChild(block2);
    }
    
    // Вставляем блоки в исходную секцию
    sourceSection.appendChild(block1);
    sourceSection2.appendChild(block2);
  }
}

  // Добавляем слушатель события изменения состояния медиа запроса и вызываем функцию handleMediaQuery при изменении состояния
mediaQuery.addEventListener('change', handleMediaQuery);

// Вызываем функцию handleMediaQuery для начальной проверки медиа запроса
handleMediaQuery(mediaQuery);

// =================================================

// // Получаем ссылки на секцию, из которой нужно вырезать блоки, и на секцию, в которую нужно вставить блоки
const sectionSource = document.querySelector('.planning-info__wrap');
const sectionTarget = document.querySelector('.planning__block .planning__title');

// Получаем ссылки на блоки, которые нужно вырезать
const titleBlock = sectionSource.querySelector('.planning-info__title');

//Получаем ссылку на блок, в который нужно вставить блоки в целевой секции
const blockTarget = sectionTarget.querySelector('.planning__title');

// Создаем медиа запрос, который будет проверять ширину экрана
const mediaQuery1 = window.matchMedia('(min-width: 290.98px) and (max-width: 1200.98px)');

// // Функция для выполнения операций вставки и удаления блоков в зависимости от результата проверки медиа запроса

function handleMediaQuery1(event) {
  if (event.matches) {
    // Если условие медиа запроса выполняется, то вырезаем блоки из исходной секции
    if (sectionSource.contains(titleBlock)) {
      sectionSource.removeChild(titleBlock);
    }
    // Вставляем блоки в целевой блок в целевой секции
    sectionTarget.appendChild(titleBlock);

  } else {
    // Если условие медиа запроса не выполняется, то вырезанные блоки возвращаются в исходную секцию
    if (sectionTarget.contains(titleBlock)) {
      sectionTarget.removeChild(titleBlock);
    }
    
    // Вставляем блоки в исходную секцию
    sectionSource.appendChild(titleBlock);
  }
}

//   // Добавляем слушатель события изменения состояния медиа запроса и вызываем функцию handleMediaQuery при изменении состояния
mediaQuery1.addEventListener('change', handleMediaQuery1);

// // Вызываем функцию handleMediaQuery для начальной проверки медиа запроса
handleMediaQuery1(mediaQuery1);

// =================================================Block moving of project-profile__list

const list = document.querySelector('.project-profile__list');
const list2 = document.querySelector('.project-profile__data-container');
const liList = Array.from(list.querySelectorAll('li'));

window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 640 && screenWidth <= 1024) {
    let count = 0;
    for (let i = 4; i < liList.length; i++) {
      if (count < 4) {
        list2.appendChild(liList[i]);
        count++;
      } else {
        break;
      }
    }
  } else {
    const liList2 = Array.from(list2.querySelectorAll('li'));
    liList2.forEach(function(li) {
      list.appendChild(li);
    });
  }
});

// =================================================
// Получить доступ к списку, который нужно скрыть.
const hiddenList = document.querySelector('ol.planning-info__catalogue');
// Получить все элементы списка
const hiddenListItems = hiddenList.querySelectorAll('li');


// Разделить элементы на две группы, создаем два пустых массива
const list1Items = [];
const list2Items = [];
const numContainer = document.querySelector('.list-planning__nums');

for (let i = 0; i < hiddenListItems.length; i++) {
  const item = hiddenListItems[i];
  const itemText = item.textContent;
  
  
  if (list2Items.length < list1Items.length) {
    list2Items.push(item);
  } else {
    list1Items.push(item);
  }

  const span = document.createElement('span');
  
  // span.classList.add('list-planning__num');
span.textContent = i + 1;
console.log(span.textContent);
numContainer.appendChild(span);
  
  
}


// Получаем доступ к двум спискам, в которые нужно поместить элементы
const listF = document.getElementById('firstList');
const listS = document.getElementById('secondList');
// Добавляем элементы в соответствующие списки
list1Items.forEach(item => listF.appendChild(item));
list2Items.forEach(item=> listS.appendChild(item));







