// app.js

var gAudioContext = new AudioContext();
var gOscillator = null;

$(document).ready(function() {
	$('button').click(function (e) {
		e.preventDefault();

		$(this).toggleClass('checked');

		if ($(this).hasClass('checked')) {
			console.log('START',
				$(this).parent().parent().find('.btn-group label.active input')[0].id
			);
			gOscillator = gAudioContext.createOscillator();
			gOscillator.frequency.value = 200;
			gOscillator.connect(gAudioContext.destination);
			gOscillator.start(0);	
		} else {
			console.log('STOP');
			gOscillator.stop(0);
			gOscillator.disconnect();
		}

	});

	$(document).on('change', 'input:radio', function (e) {
		e.preventDefault();
		console.log('clicked selector', e.target.id);
	});
});