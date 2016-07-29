var cards = [
	'<img src="images/monsters-01.png">',
	'<img src="images/monsters-02.png">',
	'<img src="images/monsters-03.png">',
	'<img src="images/monsters-04.png">',
	'<img src="images/monsters-05.png">',
	'<img src="images/monsters-06.png">',
	'<img src="images/monsters-07.png">',
	'<img src="images/monsters-08.png">',
	'<img src="images/monsters-09.png">',
	'<img src="images/monsters-10.png">',
	'<img src="images/monsters-11.png">',
	'<img src="images/monsters-12.png">',
	'<img src="images/monsters-13.png">',
	'<img src="images/monsters-14.png">',
	'<img src="images/monsters-15.png">',
	'<img src="images/monsters-16.png">',
];
// var gridSize = 0; // make this user defined based on a buttons
var boardCards = []; // array to hold cards for board
var numMoves = 0; // 


// All code will wait until the DOM is ready!
$(document).ready(function(){
	shuffleCards(cards); // shuffle entire image bank

	$('.easy, .medium, .hard').click(function(){
		var gridSize = Number($(this).val());
		$('.easy, .medium, .hard').prop('disabled', true);
		console.log(gridSize);

		for(var i = 0; i < (gridSize / 2); i++){ // generate cards to be placed on the board
			boardCards.push(cards[i], cards[i]);
		}

		shuffleCards(boardCards); // shuffle cards to be placed on the board

		var mgHTML = '';
		for(var i = 0; i < gridSize; i++){
			var card = boardCards[i];
			mgHTML += '<div class="col-sm-3 mg-tile">';
				mgHTML += '<div class="mg-tile-inner">';
					mgHTML += '<div class="mg-front">'+card+'</div>';
					mgHTML += '<div class="mg-back"></div>';
				mgHTML += '</div>';
			mgHTML += '</div>';
		}

		$('.mg-contents').html(mgHTML);

		$('.mg-tile-inner').click(function(){
			moveCount();
			$(this).toggleClass('flip');
			var cardsUp = $('.flip');
			if(cardsUp.length == 2){
				// check to see if they are the same
				if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
					// if the pictures are the same this is a match
					cardsUp.addClass('matched');
				}else{
					// the user has flipped two cards and they don't match
					setTimeout(function(){
						cardsUp.removeClass('flip');
					}, 750);
				}
			}
		});
	});

	// for(var i = 0; i < (gridSize / 2); i++){ // generate cards to be placed on the board
	// 	boardCards.push(cards[i], cards[i]);
	// }

	// shuffleCards(boardCards); // shuffle cards to be placed on the board

	// var mgHTML = '';
	// for(var i = 0; i < gridSize; i++){
	// 	var card = boardCards[i];
	// 	mgHTML += '<div class="col-sm-3 mg-tile">';
	// 		mgHTML += '<div class="mg-tile-inner">';
	// 			mgHTML += '<div class="mg-front">'+card+'</div>';
	// 			mgHTML += '<div class="mg-back"></div>';
	// 		mgHTML += '</div>';
	// 	mgHTML += '</div>';
	// }

	// $('.mg-contents').html(mgHTML);

	// $('.mg-tile-inner').click(function(){
	// 	moveCount();
	// 	$(this).toggleClass('flip');
	// 	var cardsUp = $('.flip');
	// 	if(cardsUp.length == 2){
	// 		// check to see if they are the same
	// 		if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
	// 			// if the pictures are the same this is a match
	// 			cardsUp.addClass('matched');
	// 		}else{
	// 			// the user has flipped two cards and they don't match
	// 			setTimeout(function(){
	// 				cardsUp.removeClass('flip');
	// 			}, 750);
	// 		}
	// 	}
	// });
	
});

function shuffleCards(toShuffle){
	for(var i = 0; i < 1000; i++){
		card1 = Math.floor(Math.random() * toShuffle.length);
		card2 = Math.floor(Math.random() * toShuffle.length);
		var temp = toShuffle[card1];
		toShuffle[card1] = toShuffle[card2];
		toShuffle[card2] = temp;
	}
}

function moveCount(){
	numMoves++; // increment move counter
	$('.move-count').text(' '+numMoves); // update count in html
}