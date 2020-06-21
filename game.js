import Column  from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";

export default class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(),
                        new Column(), new Column(), new Column()];
        this.winnerNumber = 0;
    }

    checkForTie() {
        let bool = this.columns.every((column) => column.isFull());

    }
    getName() {
        if(this.winnerNumber === 1 || this.winnerNumber === 2){
            return this.winnerNumber === 1 ? `${this.player1} wins!`: `${this.player2} wins!`;
        } else if (this.winnerNumber === 3) {
            return "It's a tie!";
        }
        return `${this.player1} vs ${this.player2}`;
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);
        
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    getTokenAt(colIndex, rowIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex) {
        if(this.winnerNumber === 1 || this.winnerNumber === 2){
            return true;
        }
        return this.columns[columnIndex].isFull();
    }

    checkForColumnWin() {
        if(this.winnerNumber !== 0) return;
        for (let i = 0; this.columns.length; i++) {
            let currentColumn = this.columns[i];
            let columnWin = new ColumnWinInspector(currentColumn);
            let winner = columnWin.inspect();
            console.log(winner);
            if (winner === 1 || winner === 2) {
                console.log(winner);
                this.winnerNumber = winner;
                return this.winnerNumber;
            } else return;
        }
    }

}


