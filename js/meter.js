void function(global) {
    const Meter = function() {
        return new Meter.fn();
    };

    Meter.prototype = {};

    /**
     * Turn on LEDs and display
     */
    Meter.prototype.start = function() {
        // change of status
        // get both pulse elements
        const
            led1 = document.getElementById('status1'),
            led2 = document.getElementById('status2'),
            display = document.getElementById('display');
            
        // set both to a uniform color. specifically red
        setTimeout(() => {
            beep(); // play start sound
            led1.style.fill = 'red';
            led2.style.fill = 'red';
            display.style.fill = '#A1D1ED';

            setTimeout(() => {
                setInterval(() => {
                    // start flashing leds
                    pulse({ el1: led1, el2: led2, el3: display });
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
    Meter.prototype.update = function() {};

    // private methods
    const
        /**
         * Flashes the two LED lights on the meter
         * @param {obj} elements Array of elements to manipulate
         */
        pulse = function(elements) {
            const { el1, el2, el3 } = elements;
            // set blueish fill
            el1.style.fill = "#86B8D8";
            el2.style.fill = "#86B8D8";
            // reset fill after a second
            setTimeout(() => {
                el1.style.fill = "#EEEEEE";
                el2.style.fill = "#EEEEEE";
            }, 10);
        },

        /**
         * Plays a beep sound
         */
        beep = function() {
            const audio = new Audio('../res/beep.mp3');
            audio.play();
        },

        /**
         * Output to the meter's display
         */
        display = function() {};

    /**
     * Meter function constructor
     * @param {string} status On/Off 
     */
    Meter.fn = function() {        
        const self = this;
        self.button = { value: 0, label: '' }; // pressed | active button
    };

    Meter.fn.prototype = Meter.prototype;

    global.meter = Meter;
}(window);