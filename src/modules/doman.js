import '../css/styles.css';

const activate = () => {
  const slider = document.getElementById('sliderContainer');
  slider.className = 'slider mx-auto';

  document.body.className = 'bg-back';

}

export {activate}