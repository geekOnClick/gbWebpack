import audio_1 from '../audio/1.mp3'
import audio_2 from '../audio/2.mp3'
import audio_3 from '../audio/3.mp3'

const songs = [
   { audio: audio_1, title: 'Liquid Feel' },
   { audio: audio_2, title: 'Liquid Feel' },
   { audio: audio_3, title: 'Liquid Feel' },


];

const renderMediaItem = (audio = audio_1, title = "Liquid Feel") =>
   `<article class="gallery__item">
   <audio controls class="gallery__audio">
   <source src="${audio}" type="audio/mpeg">
   </audio>
   <div class="gallery__content-title">
      <h3 class="gallery__title">${title}</h3>
   </div>
</article>`;


const renderMediaList = (list) => {
   let mediaList = list.map(item => renderMediaItem(item.audio, item.title)).join('');
   document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', mediaList)

}

renderMediaList(songs);



