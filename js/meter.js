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
            
        // console.log(self.status);
        // set both to a uniform color. specifically red
        setTimeout(() => {
            led1.style.fill = 'red';
            led2.style.fill = 'red';
            display.style.fill = '#a1d1ed';
        }, 1500);

        // start flashing LED if on
        pulse({ el1: led1, el2: led2, el3: display });
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
         * Flashing of the two LED lights on the meter
         * @param {obj} elements Array of elements to manipulate
         */
        pulse = function(elements) {
            // remove fill
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