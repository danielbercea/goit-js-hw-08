// Initializeaza modulele necesare

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// selecteaza elementul si creaza un nou player
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Functia care actualizeaza timpul de redare în localStorage
const onTimeUpdate = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);

// Setează timpul de redare la ultima valoare salvata la incarcarea paginii
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(savedTime).catch(error => {
  switch (error.name) {
    case 'RangeError':
      // timpul era în afara intervalului acceptat
      break;
    default:
      // alte erori
      break;
  }
});
