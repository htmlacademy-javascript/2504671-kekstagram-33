import { isEscapeKey,toggleClass, clearElement } from './util.js';

const fullscreenContainer = document.querySelector('.big-picture');
const fullscreenPhoto = fullscreenContainer.querySelector('.big-picture__img img');
const likesCount = fullscreenContainer.querySelector('.likes-count');
const photoCaption = fullscreenContainer.querySelector('.social__caption');
const commentsList = fullscreenContainer.querySelector('.social__comments');
const closeButton = fullscreenContainer.querySelector('.big-picture__cancel');


// Создает один комментарий на основе данных
const createComment = ({ avatar, name, message }) => {
  const commentTemplate = document
    .querySelector('#comment')
    .content.querySelector('.social__comment');

  // Клонирование шаблона
  const newComment = commentTemplate.cloneNode(true);

  // Настройка комментария
  const newCommentImg = newComment.querySelector('.social__picture');
  newCommentImg.src = avatar;
  newCommentImg.alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};


// Отрисовывает комментарии
const renderComments = (comments) => {
  clearElement(commentsList);
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.append(createComment(comment));
  });
  commentsList.append(fragment);
};

// Заполняет информацию о фотографии
const fillPhotoData = (thumbnail) => {
  const {url, likes, description, comments} = thumbnail;
  fullscreenPhoto.src = url;
  fullscreenPhoto.alt = description;
  photoCaption.textContent = description;
  likesCount.textContent = likes;
  renderComments(comments);
};

// Закрывает окно полноразмерного просмотра
function сloseFullscreen () {
  toggleClass (fullscreenContainer, 'hidden');
  toggleClass (document.body, 'modal-open');
  closeButton.removeEventListener('click', сloseFullscreen);
  document.removeEventListener('keydown', onEscPress);
}

// Обработчик закрытия по ESC
function onEscPress (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    сloseFullscreen();
  }
}

// Открывает окно полноразмерного просмотра
const openFullScreen = (thumbnail) => {
  fillPhotoData (thumbnail);

  toggleClass (fullscreenContainer, 'hidden');
  toggleClass (document.body, 'modal-open');

  closeButton.addEventListener('click', сloseFullscreen);
  document.addEventListener('keydown', onEscPress);
};

export { openFullScreen };


