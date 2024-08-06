export class Dropdown {
  constructor(trigger, hiddenMenu) {
    this.trigger = trigger;
    this.hiddenMenu = hiddenMenu;
  }

  // main initializer
  init = () => {
    window.onload = () => {
      this.trigger.onmouseenter = this.handleReveal;
      this.trigger.onmouseleave = this.handleHide;
    };
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
