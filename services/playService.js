const CardService = require('../services/cardService');
const UtilitiesService = require('../services/utilitiesService');
  

class PlayService {

    constructor(players) {
        this.players = players;
        this.currentPlayer = null;
        this.draw = CardService.generateDraw();
        this.turnOrder = [];
    }

    generateOrder() {
        var turnOrder = UtilitiesService.shuffle(UtilitiesService.generateArrayOfIndex(this.players));
        this.turnOrder = turnOrder;
    }

    isGameOver() {
        return this.draw.length == 0; 
    }

    nextPlayer() {
        let indexNextPlayer = (this.turnOrder.indexOf(this.currentPlayer) + 1) % this.turnOrder.length;
        return this.players[indexNextPlayer];
    }

    drawCard(numberToDraw) {
        var cardsToAdd = [];
        for(var i = 0; i < numberToDraw; i++) {
            var random = Math.floor(Math.random() * this.draw.length);
            var card = this.draw.splice(random, 1);
            cardsToAdd.push(card);
        }
        this.players[this.currentPlayer].hand.push(...card);
        return card;
    }

    playCard(cardIndex) {
        var card = this.players[this.currentPlayer].hand.splice(cardIndex, 1);
        //TODO
    }

    get gameState() {
        return {
            players: this.players,
            currentPlayer: this.currentPlayer,
            draw: this.draw,
            turnOrder: this.turnOrder
        }
    }

    get getTurnOrder() {
        return this.turnOrder;
    }

}

module.exports = PlayService;