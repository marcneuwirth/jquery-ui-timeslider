# jQuery UI Time Slider Plugin

This plugin adds some functionality on top of the jQuery UI Slider widget so that it can easily be used to select times.


## Options:

  * sliderOptions: use this to set the default jQuery UI slider options
  * errorMessage: Selector for the element that will contain the error message if the range is over 24 hours
  * timeDisplay: Selector for the element that will contain the current selected time
  * submitButton: Selector for the element that will act as submit Button
  * clickSubmit: The function that will be executed when the submitButton is clicked
  * inputsContainer: Selector for placing inputs for start time and end time in it. Works if addInputs is true. default: '.timesliderInputsContainer'
  * addInputs: if true, will add inputs for start and end dates in the element defined by property inputsContainer. default: false
 	* clockFormat: formats for getTime(). Available 12, 24. default: 12
		* startTime: startTime and endTime values will override sliderOptions.values. Format: "hh:mm". default: null
		* endTime: startTime and endTime values will override sliderOptions.values. Format: "hh:mm". default: null


## Methods:

  * getTime: .timeslider('getTime', value) Takes an int and converts it to a Date and returns the time in hours and minutes


.timeslider uses .slider so you can still access all of the base properties
