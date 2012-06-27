(function($) {  
    $.widget("ui.timeslider", {
        getTime: function(value, format){
			
			if (format == 'undefined')
				format = 12;
			
            var time = null,
                minutes,
                hours;
				
			hours = Math.floor(value / 60);
			minutes = value - (hours * 60);

			if (format == 12)
			{
				if (hours === 0) {
					hours = 12;
				}
			
				if (hours > 12) {
					hours = hours - 12;
					time = "PM";
				}
				else {
					time = "AM";   
				}
			
				if (minutes < 10) {
					minutes = "0" + minutes;
				}
			
				return hours + ":" + minutes + " " + time;
			}
			else
			{

				if (minutes < 10) {
					minutes = "0" + minutes;
				}
			
				return hours + ":" + minutes;
			}
        },
        _slideTime: function (event, ui){
            var that = $(this),
                startTime = null,
                endTime = null;
            
            if(that.slider( "option", "range" )){
                startTime = that.timeslider('getTime',that.slider("values", 0), that.timeslider('option', 'clockFormat'));
                endTime = that.timeslider('getTime', that.slider("values", 1), that.timeslider('option', 'clockFormat'));
            
                that.timeslider('option', 'timeDisplay').text(startTime + ' - ' + endTime);
				
				if(that.timeslider('option', 'addInputs'))
				{
					that.timeslider('option', 'inputsContainer').find('input.start_time').val(startTime);
					that.timeslider('option', 'inputsContainer').find('input.end_time').val(endTime);
				}
            }
            else {
                startTime = that.timeslider('getTime', that.slider("value"), that.timeslider('option', 'clockFormat'));
    
                that.timeslider('option', 'timeDisplay').text(startTime);
				
				if(that.timeslider('option', 'addInputs'))
				{
					that.timeslider('option', 'inputsContainer').find('input.start_time').val(startTime);
				}
            }
        },
        _checkMax: function(event, ui) {
            var that = $(this);
        
            if(that.slider( "option", "range" )){
                var div = that.find('div'),
                    size = that.slider("values", 1) - that.slider("values", 0);
                if( size >= 1435) {
		            div.addClass("ui-state-error");
                    that.timeslider('option', 'submitButton').attr("disabled","disabled").addClass("ui-state-disabled");
                    that.timeslider('option', 'errorMessage').text("Cannot be more than 24 hours");
	            }
		        else {	
                    div.removeClass("ui-state-error");
                    that.timeslider('option', 'submitButton').attr("disabled",null).removeClass("ui-state-disabled");
                    that.timeslider('option', 'errorMessage').text("");
                } 
            }
        },
        options: {
            sliderOptions: {},
            errorMessage: null,
            timeDisplay: null,
            submitButton: null,
            clickSubmit: null,
			inputsContainer: '.timesliderInputsContainer',
            addInputs: false,
			clockFormat: 12,
			startTime: null,
			endTime: null
        },
        _create: function() {
            var that = this,
                o = that.options,
                el = that.element;
                
                o.sliderOptions.slide = that._slideTime;
                o.sliderOptions.change = that._checkMax;
                o.sliderOptions.stop = that._slideTime;
                
                
                o.errorMessage = $(o.errorMessage);
                o.timeDisplay = $(o.timeDisplay);
                o.submitButton = $(o.submitButton).click(o.clickSubmit);
                
				if(o.addInputs)
				{
					var container = o.inputsContainer;
					
					if(container.indexOf(".") != -1)
						var inputsContainer_html = '<div class="'+container.split(".").join("")+'"></div>';
					else
						var inputsContainer_html = '<div id="'+container.split("#").join("")+'"></div>';
					
					if (!$(o.inputsContainer).size())
					{
						el.append(inputsContainer_html);
					}
					
					if (!$("input.start_time",o.inputsContainer).size())
						$(o.inputsContainer).append('<input type="hidden" name="start_time" value="" class="start_time" />');
						
					if (!$("input.end_time",o.inputsContainer).size())
						$(o.inputsContainer).append('<input type="hidden" name="end_time" value="" class="end_time" />');
						
					o.inputsContainer = $(o.inputsContainer);
				}
				
				if (o.startTime != null && o.endTime != null)
				{
					var time_parts = o.startTime.split(":");
					var timeslider_start_time = ((time_parts[0]) * 60) + time_parts[1]*1;
		
					time_parts = o.endTime.split(":");
					var timeslider_end_time = ((time_parts[0]) * 60) + time_parts[1]*1;

					o.sliderOptions.values = [timeslider_start_time, timeslider_end_time];

				}
				
				el.slider(o.sliderOptions);
                that._slideTime.call(el);
        },
        _destroy: function() {
            this.element.remove();
        }
    });
})(jQuery);
    