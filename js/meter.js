void function(global) {
    const Meter = status => {
        return new Meter.fn(status);
    };

    Meter.prototype = {};

    /**
     * Intialize prepaid meter
     */
    Meter.prototype.start = () => {
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
        // if (self.status === 'on')
            pulse({ el1: led1, el2: led2, el3: display });

        if (self.status === 'off')
            return;
    };

    /**
     * Update the display after event 
     */
    Meter.prototype.update = () => {};

    // private methods
    const
        /**
         * Flashing of the two LED lights on the meter
         * @param {obj} elements Array of elements to manipulate
         */
        pulse = (elements) => {
            // remove fill
        },

        /**
         * Output to the meter's display
         */
        display = () => {};

    /**
     * Meter function constructor
     * @param {string} status On/Off 
     */
    Meter.fn = function(status) {        
        const self = this;
        self.status = status || 'on'; // power status on | off
        self.button = { value: 0, label: '' }; // pressed | active button
    };

    Meter.fn.prototype = Meter.prototype;

    global.meter = Meter;
}(window);