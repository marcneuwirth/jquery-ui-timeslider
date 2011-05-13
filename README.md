# jQuery UI Time Slider Plugin

This plugin adds some functionality on top of the jQuery UI Slider widget so that it can easily be used to select times.


## Options:

  * sliderOptions: use this to set the default jQuery UI slider options
  * errorMessage: Selector for the element that will contain the error message if the range is over 24 hours
  * timeDisplay: Selector for the element that will contain the current selected time
  * submitButton: Selector for the element that will act as submit Button
  * clickSubmit: The function that will be executed when the submitButton is clicked


## Methods:

  * getTime: .timeslider('getTime', value) Takes an int and converts it to a Date and returns the time in hours and minutes


.timeslider uses .slider so you can still access all of the base properties
