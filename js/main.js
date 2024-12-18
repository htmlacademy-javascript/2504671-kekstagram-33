import {generatePhotoData} from './data.js';
import {renderThumbnails} from './thumbnails.js';

const pictureContainer = document.querySelector('.pictures');
const photos = generatePhotoData();

renderThumbnails(pictureContainer, photos);
