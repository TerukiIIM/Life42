class PlayerService {

    constructor(playerName) {
        this.name = playerName;
        this.hand = [],
        this.malus = [],
        this.love = [],
        this.salaire = [],
        this.work = [],
        this.invest = []
    }

    get getHand() {
        return this.hand;
    }

    set setHand(hand) {
        this.hand = hand;
    }

}

module.exports = PlayerService;