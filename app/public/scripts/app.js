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
		$('#survey').prepend(`	
		<div class="form-group">
		<label for="question-${i + 1}">${questions[i]}.</label>
		<select class="form-control" id="question1">
			<option value="empty"></option>
			<option value="1">1 (Strongly Disagree)</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5 (Strongly Agree)</option>
		</select>
	</div>
	`);
	}
});

// $('#survey').on('submit', function() {
// 	event.preventDefault();
// 	let isValid;
// 	'select'.each(function() {
// 		let element = $(this);
// 		if (!element.val()) {
// 			isValid = false;
// 		}
// 	});
// 	alert(isValid);
// });
