export default class Column {
    constructor(){
        this.tokens = [null,null,null,null,null,null];
    }

    add(playerNum){
        for(let i = 5; i >= 0; i--){
            if(this.tokens[i] === null){
                this.tokens[i] = playerNum;
                break;
            }
            
        }
    
    }

    getTokenAt(rowIndex){
        // console.log('It got here')
        return this.tokens[rowIndex];
    }

    isFull() {
        for (let i = 0; i < this.tokens.length; i++) {
            if (this.tokens[i] === null) {
                return false;
            } 
        }
        return true;
    }
}
