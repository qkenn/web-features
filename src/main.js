import './style.css';
import chevronIcon from './icons/chevron-down.svg';

const dropIcon = document.getElementById('chevron-icon'),
  dropLink = document.getElementById('drop-link');

dropIcon.setAttribute('src', chevronIcon);

dropLink.addEventListener('mouseenter', function () {
  console.log('hovering');
});
