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
        if (this.winnerNumber <= 0) {
            this.checkForColumnWin();

        }
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    getTokenAt(colIndex, rowIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }

    checkForColumnWin() {
        for (let i = 0; this.columns.length; i++) {
            let currentColumn = this.columns[i];
            let columnWin = new ColumnWinInspector(currentColumn);
            let value = columnWin.inspect();
            console.log(value);
            if (value !== -1) {
                console.log('winner');
                return value;
            }
        }
    }

}


