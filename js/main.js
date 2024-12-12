import {generatePhotoDescriptions} from './data.js';
import {renderPhotos} from './thumbnails.js';

const pictureContainer = document.querySelector('.pictures');
const dataPhotos = generatePhotoDescriptions();

renderPhotos(pictureContainer, dataPhotos);
