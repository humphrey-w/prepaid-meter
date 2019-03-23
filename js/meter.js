void function(global) {
  const Meter = function() {
    return new Meter.fn();
  };

  Meter.prototype = {};

  /**
   * Turn on LEDs and display
   */
  Meter.prototype.start = function() {
    // display text opacity
    const opacity = 0.1;
    // get LED and display elements
    const led1 = document.querySelector('#status1');
    const led2 = document.querySelector('#status2');
    const screen = document.querySelector('#display');
        
    // set both to a uniform color. specifically red
    setTimeout(() => {
      beep(); // play start sound
      display(this.displayText, opacity);

      led1.style.fill = 'red';
      led2.style.fill = 'red';
      screen.style.fill = '#A1D1ED';

      setTimeout(() => {
        setInterval(() => {
          // start flashing leds
          pulse({ el1: led1, el2: led2 });
        }, 1000);
      }, 100);
    }, 1000);
  };

  /**
   * Turn off LEDs and display
   */
  Meter.prototype.stop = function() {};

  /**
   * Update the display after event 
   */
  Meter.prototype.update = function(displayText) {
    this.displayText = displayText;
  };

  // private methods
  /**
   * Flashes the two LED lights on the meter
   * @param {obj} elements Array of elements to manipulate
   */
  const pulse = function(elements) {
    const { el1, el2 } = elements;
    // set blueish fill
    el1.style.fill = "#86B8D8";
    el2.style.fill = "#86B8D8";
    // reset fill after a second
    setTimeout(() => {
      el1.style.fill = "#EEEEEE";
      el2.style.fill = "#EEEEEE";
    }, 10);
  };

  /**
   * Plays a beep sound
   */
  const beep = function() {
    const audio = new Audio('../res/beep.mp3');
    audio.play();
  };

    /**
     * Output to the meter's display
     */
  const display = function(displayText, opacity) {
    const svg = document.querySelector('#svg8');
    const { main, top, side } = displayText;
    let child, node;

    child = `<tspan id="top" y="68" x="88">${top}</tspan>`;
    child += `<tspan id="main" y="77" x="96">${main}</tspan>`;
    node = `<text id="display_text" style="fill-opacity:${opacity}">`;
    node += `${child}</text>`;

    svg.insertAdjacentHTML('beforeend', node);
  };

  /**
   * Meter function constructor
   * @param {string} status On/Off 
   */
  Meter.fn = function() { 
    this.displayText = { 
      main: '88888888', 
      top: '000 <tspan y="65" x="127" id="unit">KWh</tspan>', 
      side: '' 
    };       
    this.button = { value: 0, label: '' }; // pressed | active button
  };

  Meter.fn.prototype = Meter.prototype;

  global.meter = Meter;
}(window);