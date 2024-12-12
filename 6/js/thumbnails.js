const similarPhotoTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const PhotoFragment = document.createDocumentFragment();

const renderDataPhotos = (container, dataPhotos) => {
  dataPhotos.forEach(({url, description, likes, comments}) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);

    const photoElementImg = photoElement.querySelector('.picture__img');
    photoElementImg.src = url;
    photoElement.alt = description;

    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    PhotoFragment.append(photoElement);
  });

  container.append(PhotoFragment);
};

export { renderDataPhotos };
