import {
  PHOTO_DESCRIPTION_COUNT,
  PHOTOS_MIN,
  PHOTOS_MAX,
  LIKES_MIN,
  LIKES_MAX,
  AVATAR_MIN,
  AVATAR_MAX,
  COMMENTS_MIN,
  COMMENTS_MAX,
  NAMES,
  DESCRIPTIONS,
  MESSAGES
} from './constants.js';

import {
  getIdGenerator,
  getRandomInteger,
  getRandomArrayElement} from './util.js';

const generatePhotoId = getIdGenerator(); // Генератор ID для фотографий
const generateCommentId = getIdGenerator(); // Генератор ID для комментариев


// Генерация одного комментария
const generateComment = () => ({
  id: generateCommentId(),
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
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(PHOTOS_MIN, PHOTOS_MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: generateComments(),
});

// Генерация массива описаний фотографий
const generatePhotoDescriptions = () => Array.from(
  {length: PHOTO_DESCRIPTION_COUNT},
  generatePhotoDescription);

export { generatePhotoDescriptions };
