const PHOTO_DESCRIPTION_COUNT = 25;

const NAMES = [
  'Настя_yellow',
  'Kate',
  'Иван',
  'Маша',
  'Olly_Sunshine',
  'Женя',
  'Олег',
  'Кирилл Ivanov',
  'Alex'
];
const DESCRIPTIONS = [
  'Прекрасный день!',
  'Новая фотография для альбома.',
  'Делюсь своими впечатлениями.',
  'Захватывающее место!',
  'Это был незабываемый момент.',
  'Доброе утро, Мир!',
  'Всем хорошего дня и прекрасного настроения.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Генерация уникального ID
const getIdGenerator = () => {
  let id = 0;
  return function () {
    id ++;
    return id;
  };
};

const photoId = getIdGenerator();
const commentId = getIdGenerator();

// Генерация случайного числа в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const likesCount = getRandomInteger(15, 200);

// Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генерация одного комментария
const generateComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)}`,
  name: `${getRandomArrayElement(NAMES)}`,
});

// Генерация массива комментариев
const generateComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  return Array.from({length: commentsCount}, generateComment);
};

// Генерация одного описания фотографии
const generatePhotoDescription = () => ({
  id: photoId(),
  url: `photos/${photoId()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: likesCount,
  comments: generateComments(),
});

// Генерация массива описаний фотографий
const photoDescriptions = Array.from({length: PHOTO_DESCRIPTION_COUNT}, generatePhotoDescription);
