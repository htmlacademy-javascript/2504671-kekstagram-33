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

export {
  getIdGenerator,
  getRandomInteger,
  getRandomArrayElement
};
