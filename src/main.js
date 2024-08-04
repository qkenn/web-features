import './style.css';
import chevronIcon from './images/chevron-down.svg';

document.getElementById('chevron-icon').setAttribute('src', chevronIcon);

const dropLink = document.getElementById('drop-link'),
  hiddenMenu = document.getElementById('hidden-menu');

dropLink.addEventListener('mouseenter', () => {
  hiddenMenu.style.display = 'block';

  const fadeIn = hiddenMenu.animate(
    [
      { opacity: 0, transform: 'translateY(0)' },
      { opacity: 1, transform: 'translateY(.5rem)' },
    ],
    {
      duration: 200,
      fill: 'forwards',
    }
  );
});

dropLink.addEventListener('mouseleave', () => {
  const fadeOut = hiddenMenu.animate(
    [
      { opacity: 1, transform: 'translateY(.5rem)' },
      { opacity: 0, transform: 'translateY(0)' },
    ],
    {
      duration: 200,
      fill: 'forwards',
    }
  );

  fadeOut.onfinish = () => {
    hiddenMenu.style.display = 'none';
  };
});
