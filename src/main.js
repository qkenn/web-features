import './style.css';
import chevronIcon from './images/chevron-down.svg';
import { Dropdown } from './scripts/Dropdown';

// set dropdown menu icon
document.getElementById('chevron-icon').setAttribute('src', chevronIcon);

const dropdown = new Dropdown(
  document.getElementById('drop-link'),
  document.getElementById('hidden-menu')
);

dropdown.init();
