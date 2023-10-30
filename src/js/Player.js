class Player {
    constructor(){
        this.id = this.getLocalId();
        this.hand = []
    }

    discard() {
        // ...
    }
    
    useCard() {
        // ...
    }

    getLocalId() {
        if(localStorage.getItem('playerId') == null) {
            let randomId = crypto.randomUUID();
            localStorage.setItem('playerId', randomId);
            return randomId;
        } else {
            return localStorage.getItem('playerId');
        }
    }
}