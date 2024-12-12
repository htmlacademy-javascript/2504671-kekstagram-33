// import './upload.js';
// import './scale.js';
// import './effects.js';
// import './validation.js';
// import './fetch.js';
// import './filters.js';
// import './fullscreen.js';
// import './feed.js';
// import './form.js';
// import './form-visability.js';

import {generatePhotoDescriptions} from './data.js';
import {renderDataPhotos} from './thumbnails.js';

const pictureContainer = document.querySelector('.pictures');
const dataPhotos = generatePhotoDescriptions();

renderDataPhotos(pictureContainer, dataPhotos);
