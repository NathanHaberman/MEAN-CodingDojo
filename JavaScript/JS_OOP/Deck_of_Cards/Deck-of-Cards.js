class Deck{
    constructor(){
        let suits = ['Hearts', 'Clubs', 'Dimonds', 'Spades'];
        let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

        let cards = [];
        for (let i = 0; i < suits.length; i++){
            for (let j = 0; j < values.length; j++){
                cards.push(values[j] + ' of ' + suits[i]);
            }
        }

        this.cards = cards;
    }

    shuffle(){
        let deck = this.cards;
        let cards = [];
        let n = deck.length;
        let i;

        while(n){
            i = Math.floor(Math.random() * n--)
            cards.push(deck.splice(i,1)[0]);
        }

        this.cards = cards;

        return this;
    }

    reset(){
        this.cards = new Deck().cards;
        return this;
    }

    dealCard(){
        let i = Math.floor(Math.random() * 52);
        return this.cards.splice(i,1)[0]
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    takeCard(deck){
        this.hand.push(deck.dealCard());
        return this;
    }

    discard(index){
        this.hand.splice(index,1);
        return this
    }
}

let deck = new Deck();
let player = new Player('Bob');

// player.takeCard(deck).takeCard(deck);
// console.log(player.hand);
// player.discard(1);
// console.log(player.hand);