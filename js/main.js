var pictures = [
  'img/tomato-red-large.jpg',
  'img/tomato-yellow-large.jpg',
  'img/tomato-strange-large.jpg'
];

console.log(pictures);
var previews = document.querySelectorAll('.gallery__picture-preview');
var fullImg = document.querySelector('.full-picture');
previews.forEach((item, index) => {
  item.addEventListener('click', () => {
    fullImg.src = pictures[index];
  })
})

/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
