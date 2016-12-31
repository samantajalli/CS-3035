// Global variables
var pot = 200;
var player = 50;

function decideRound(lowCard, highCard, playersCard){
    lowCard %= 13;
    highCard %= 13;
    playersCard %= 13;
    return (playersCard > lowCard) && (playersCard < highCard);
}

//create a deck of cards with deal, shuffle methods
var deck = {
    cards:undefined,
    create: function(shuffle){
        cards = [];
        for(i = 0; i < 52; i++){
          cards[i] = [i];
        }

        shuffle(cards);
        return cards;
    },
    deal: function(){
      return this.cards.pop();
    },
    map: undefined,
    size: 52,
    createMap: function (){
        var map = {};
        var str = "";
        var suits = [" of Spades", " of Clubs", " of Diamonds", " of Hearts"];
        var faceCards = ["Jack", "Queen", "King", "Ace"]
        for(i = 0; i < 52; i++){
            suitNo = Math.floor(i/13);
            str += suits[suitNo];

            if((i % 13) > 8){
              str = faceCards[(i % 13) - 9] + str;
            }else{
              str = ((i % 13) + 2) + str;
            }

            map[i] = str;
            str = "";
        }
        return map;
    },
    shuffle: function(array) {
      /**
       * From Stack Overflow
       * Randomize array element order in-place.
       * Using Durstenfeld shuffle algorithm.
       */
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

};

/// run program //////////////////////////////////
// set up deck

//create cards for deck
deck.cards = deck.create(deck.shuffle);

//create card dictionary
deck.map = deck.createMap();

// for testing deck
// for(i = 0; i < deck.size; i++)
//     console.log(deck.map[deck.deal()]);

//Start game
// main game loop

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Welcome to Acey Deucy! Enter 1 to play, 0 to quit");
rl.setPrompt('AceyDeucy> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "0") rl.close();

    //deal cards
    var card1 = deck.deal();
    var card2 = deck.deal();
    var lowCard = (card1 % 13 >= card2 % 13) ? card2:card1;
    var highCard = (card1 % 13 >= card2 % 13) ? card1:card2;
    var playersCard;

    console.log("You are dealt: ");
    console.log(deck.map[lowCard] + ", " + deck.map[highCard]);
    var bet = 0;

    rl.question("How much do you want to bet?", function(bet){
        bet = parseInt(bet);
        playersCard = deck.deal();
        console.log("You are delt the " + deck.map[playersCard]);
        if(decideRound(lowCard, highCard, playersCard)){
            player += bet;
            pot -= bet;
            console.log("You win! " +  bet + " added to your pile.")

        }else{
            player -= bet;
            pot += bet;
            console.log("You lose. " +  bet + " taken from your pile.")
        }

        console.log("Your bank: " + player);
        console.log("Pot: " + pot);

        console.log("Enter 1 to play again, 0 to quit");
        rl.prompt();
    });


}).on('close',function(){
    console.log("Thanks for playing!");
    process.exit(0);
});
