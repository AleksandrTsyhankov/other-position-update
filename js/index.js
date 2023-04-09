'use strict';

const dot = document.querySelector('.dot');
const wrapper = document.querySelector('.wrapper');
const inputs = document.querySelectorAll('input');
const h1_x = document.querySelector('#h1-x > span');
const h1_y = document.querySelector('#h1-y > span');


inputs.forEach(input => {
  input.addEventListener('input', positionUpdate);
});

function positionUpdate(e) {
  let x = +inputs[0].value;
  let y = +inputs[1].value;
  let background_position = `${x}% ${y}%`;

  wrapper.style.setProperty('background-position', background_position);

  h1_x.textContent = x;
  h1_y.textContent = y;

  let wrp_width = parseInt(window.getComputedStyle(wrapper, null).getPropertyValue('width'), 10);
  let dot_width = parseInt(window.getComputedStyle(dot, null).getPropertyValue('width'), 10);
  
  dot.style.top = (wrp_width / 100 * y - dot_width / 2) + 'px';
  dot.style.left = (wrp_width / 100 * x - dot_width / 2) + 'px';
}