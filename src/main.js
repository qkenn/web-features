import './style.css';
import chevronIcon from './icons/chevron-down.svg';

const dropIcon = document.getElementById('chevron-icon'),
  dropLink = document.getElementById('drop-link'),
  hiddenMenu = document.getElementById('hidden-menu');

dropIcon.setAttribute('src', chevronIcon);

dropLink.addEventListener('mouseenter', () => {
  hiddenMenu.style.display = 'block';

  const fadeIn = hiddenMenu.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    fill: 'forwards',
  });
});

dropLink.addEventListener('mouseleave', () => {
  const fadeOut = hiddenMenu.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500,
  });

  fadeOut.onfinish = () => {
    hiddenMenu.style.display = 'none';
  };
});
