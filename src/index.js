import './css/styles.css';
import * as Doman from './modules/doman';

Doman.activate();

let imgs = ["https://cdn.hipwallpaper.com/i/95/94/d2Jnk5.jpg",
  "https://steamuserimages-a.akamaihd.net/ugc/859474532974286482/822FE5B02F4B76156DF18F36129F73A323ACE08A/",
  "https://cdn.hipwallpaper.com/i/39/4/V2YikX.jpg","https://i.ytimg.com/vi/sCJ41IS7VaQ/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AO8Hw2EzCiPNyy_Z48Zpgj8Ad8FXVP4SwA&usqp=CAU",
  "https://wallpapercave.com/wp/wp6322092.jpg",
  "https://wallpapercave.com/wp/wp5952036.jpg"
];

let slide = document.getElementById('slideObject');
let index = 0;
let img = document.createElement('img');
img.className = 'w-100 h-100'
img.src = imgs[0];
slide.appendChild(img);

const prevBtn  = document.getElementById('prevBtn');

prevBtn.onclick = () => {
 slide.innerHTML = '';
 index--;
 if (index < 0 ){
   index = 0
 }
 
 
 
 img.className = 'w-100 h-100 move-back'
 setTimeout(function(){ img.src = imgs[index]; }, 500);
 slide.appendChild(img);
}

const nextBtn = document.getElementById('nextBtn');
nextBtn.onclick = () => {
  index++;
  if(index > imgs.length - 1 ){
    index = imgs.length - 1
  }
  img.className = 'w-100 h-100 move-front'
  setTimeout(function(){ img.src = imgs[index]; }, 500);
  slide.appendChild(img);
 }