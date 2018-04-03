$('#submit').click(function() {
	var height = $('#height').val();
	var width = $('#width').val();
	createGrid(height, width);
});

function createGrid(height, width) {
	$('.innerGrid').remove();
	for (var x = 0; x < height; x++) {
		for (var y = 0; y < width; y++) {
			$('#outerGrid').append('<div class="inline innerGrid"></div>');
		}
		$('#outerGrid').append('<div class="innerGrid"></div>');
	}
};

$('#outerGrid').on('click', '.innerGrid', function() {
	var color = $('#colorPicker').val();
	if ($(this).css('background-color') != 'rgba(0, 0, 0, 0)') {
		$(this).css('background-color', 'rgba(0, 0, 0, 0)');	
	} else {
		$(this).css('background-color', color);	
	}
});