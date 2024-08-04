import './style.css';
import chevronIcon from './images/chevron-down.svg';

// set dropdown menu icon
document.getElementById('chevron-icon').setAttribute('src', chevronIcon);

// dropdown class
class Dropdown {
  constructor(trigger, hiddenMenu) {
    this.trigger = trigger;
    this.hiddenMenu = hiddenMenu;

    // listen for events soon after dropdown gets created
    this.reveal();
    this.hide();
  }

  // hidden menu reveal event
  reveal = () => {
    this.trigger.addEventListener('mouseenter', this.handleReveal);
  };

  // reveal event handler
  handleReveal = () => {
    // remove initial hidden state
    this.hiddenMenu.style.display = 'block';

    // reveal with a slight effect
    this.hiddenMenu.animate(
      [{ opacity: 0 }, { opacity: 1, transform: 'translateY(.5rem)' }],
      {
        duration: 200,
        fill: 'forwards',
      }
    );
  };

  // hidden menu hide event
  hide = () => {
    this.trigger.addEventListener('mouseleave', this.handleHide);
  };

  // hide event handler
  handleHide = () => {
    // hide with a slight effect
    this.hiddenMenu.animate(
      [{ opacity: 1 }, { opacity: 0, transform: 'translateY(0)' }],
      {
        duration: 200,
        fill: 'forwards',
      }

      // hide after effect displayed
    ).onfinish = () => {
      this.hiddenMenu.style.display = 'none';
    };
  };
}

const dropdown = new Dropdown(
  document.getElementById('drop-link'),
  document.getElementById('hidden-menu')
);
