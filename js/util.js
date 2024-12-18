// Генерация уникального ID
const getIdGenerator = () => {
  let id = 0;
  return () => ++id;
};

// Генерация случайного числа в диапазоне
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Нажатие клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Переключение классов
const toggleClass = (element, className = '') => {
  if(element) {
    element.classList.toggle(className);
  }
};

// Функция очистки элементов
const clearElement = (element) => {
  element.innerHTML = '';
};

export {
  getIdGenerator,
  getRandomInteger,
  getRandomArrayElement,
  isEscapeKey,
  toggleClass,
  clearElement
};
