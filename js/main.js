const PHOTO_DESCRIPTION_COUNT = 25;
const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;

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

const getPhotoId = getIdGenerator(); // Генератор ID для фотографий
const getCommentId = getIdGenerator(); // Генератор ID для комментариев

// Генерация случайного числа в диапазоне
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генерация одного комментария
const generateComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Генерация массива комментариев
const generateComments = () => {
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  return Array.from({length: commentsCount}, generateComment);
};

// Генерация одного описания фотографии
const generatePhotoDescription = () => ({
  id: getPhotoId(),
  url: `photos/${getRandomInteger(PHOTOS_MIN, PHOTOS_MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: generateComments(),
});

// Генерация массива описаний фотографий
const photoDescriptions = Array.from(
  {length: PHOTO_DESCRIPTION_COUNT},
  generatePhotoDescription);

