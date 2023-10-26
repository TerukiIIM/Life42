class Game {
    constructor () {
        this.deck = []
        this.players = []
    }

    draw() {
        // ...
    }
    
    shovel() {
        // ...
    }

    initialDraw() {

    }

    async generateDeck() {
        var allCards = await (await fetch('./cards.json')).json();
        console.log(allCards);
        return allCards
    }
}