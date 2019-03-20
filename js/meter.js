void function(global) {
    const Meter = status => {
        const self = this;
        return new Meter.fn(this, status);
    }

    Meter.prototype = {};

    /**
     * Intialize prepaid meter
     */
    Meter.prototype.start = () => {
        // get both pulse elements
        // set both to a uniform color. specifically red
        if (self.status === 'on')
        setInterval(pulse, self.pulseInterval);
    };

    /**
     * Update the display after event 
     */
    Meter.prototype.update = () => {};

    const
        /**
         * Flashing of the two LED lights on the meter
         * @param {obj} elements Array of elements to manipulate
         */
        pulse = (elements) => {
            // 
        },

        /**
         * Output to the meter's display
         */
        display = () => {};

    Meter.fn = (status) => {
        const self = this;
        self.status = status; // power status on | off
        self.pulseInterval = 1000; // execute after every second
        self.output = "- - - - - - - -"; // output at init
        self.button = { value: 0, label: '' }; // pressed | active button
    }

    Meter.fn.prototype = Meter.prototype;

    global.meter = Meter;
}(window);