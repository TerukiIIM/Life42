class Game {
    constructor () {
        this.id = "";
        this.deck = []
        this.players = []
    }

    static createGame() {
        
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