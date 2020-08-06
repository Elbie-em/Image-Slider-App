import '../css/styles.css';

const activate = () => {
  const slider = document.getElementById('sliderContainer');
  slider.className = 'slider mx-auto';
  document.body.className = 'bg-back';

}

const getItem = (id) => {
  const elem = document.getElementById(id);
  return elem;
}

const createItem = (name) => {
  const elem = document.createElement(name);
  return elem;
}

const addItem = (container,elem) => {
  container.appendChild(elem)
}



export {activate,getItem,createItem,addItem}