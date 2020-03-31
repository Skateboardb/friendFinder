const questions = [
	'I have an energetic personality',
	'I am naturally talented',
	'I am known for my intelligence',
	'I get am easily bothered',
	'I trust others easily',
	'I seek adventure',
	'I find it difficult to approach people',
	'I would enjoy an afternoon drinking tea and playing board games',
	'I have a bit of a dark side',
	'I think food is among the most important things in life',
	'I would do anything for my friends'
];

$(document).ready(() => {
	for (let i = 0; i < questions.length; i++) {
		$('#question-div').append(`	
		<div class="">
		<label for="question-${i + 1}">${questions[i]}.</label>
		<fieldset class="form-group" id="question1">
		
			<input id="q${i + 1}-1" type="radio" name="question-${i + 1}" value="1"></input>
			<label for="q${i + 1}-1">1</label>

			<input id="q${i + 1}-2" type="radio" name="question-${i + 1}" value="2"></input>
			<label for="q${i + 1}-2">2</label>

			<input id="q${i + 1}-3" type="radio" name="question-${i + 1}" value="3"></input>
			<label for="q${i + 1}-3">3</label>

			<input id="q${i + 1}-4" type="radio" name="question-${i + 1}" value="4"></input>
			<label for="q${i + 1}-4">4</label>

			<input id="q${i + 1}-5" type="radio" name="question-${i + 1}" value="5"></input>
			<label for="q${i + 1}-5">5</label>

		</fieldset>
	</div>
	`);
	}
});

$(document).on('submit', '#survey', function() {
	event.preventDefault();
	let newUser = {
		name: $('#name')
			.val()
			.trim(),
		photo: $('#photo')
			.val()
			.trim(),
		data: []
	};

	$('input:checked').each(function() {
		newUser.data.push($(this).val());
	});

	if (newUser.data.length !== 11) {
		console.log('Please answer all questions');
	} else {
		runIt();
	}

	// function testImage(url, timeoutT) {
	// 	return new Promise(function(resolve, reject) {
	// 	  var timeout = timeoutT || 5000;
	// 	  var timer, img = new Image();
	// 	  img.onerror = img.onabort = function() {
	// 		  clearTimeout(timer);
	// 			reject("error");
	// 	  };
	// 	  img.onload = function() {
	// 		   clearTimeout(timer);
	// 		   resolve("success");
	// 	  };
	// 	  timer = setTimeout(function() {
	// 		  // reset .src to invalid URL so it stops previous
	// 		  // loading, but doens't trigger new load
	// 		  img.src = "//!!!!/noexist.jpg";
	// 		  reject("timeout");
	// 	  }, timeout);
	// 	  img.src = url;
	// 	});
	// }
	// let URL = window.location.origin;
	function runIt() {
		$.ajax('/api/friends', {
			type: 'POST',
			data: newUser
		}).then(function(req, res) {
			console.log(req);
		});
	}
});
