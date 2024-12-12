// Создает миниатюру фотографии на основе данных

const createThumbnail = ({ url, description, likes, comments }) => {
  const pictureTemplate = document
    .querySelector('#picture')
    .content.querySelector('.picture');

  // Клонирование шаблона
  const thumbnail = pictureTemplate.cloneNode(true);

  // Настройка изображения
  const thumbnailImg = thumbnail.querySelector('.picture__img');
  thumbnailImg.src = url;
  thumbnailImg.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};


// Отрисовывает миниатюры фотографий в заданный контейнер

const renderPhotos = (container, photos) => {
  // Создание фрагмента для оптимизации
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    fragment.append (thumbnail);
  });

  container.append(fragment);
};

export { renderPhotos };
