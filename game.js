import Column  from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./ row-win-inspector.js";
import checkForDiagonalWin from "./checkForDiagonalWin.js"


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
        try {
            this.columns[columnIndex].add(this.currentPlayer);
            if (this.currentPlayer === 1) {
                this.currentPlayer = 2;
            } else {
                this.currentPlayer = 1;
            }
            this.checkForTie();
            this.checkForColumnWin();
            this.checkForRowWin();
            this.checkForDiagonalWin();
        } catch (error){
            console.log("Dont click there dumb ass");
        }
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
            if (winner === 1 || winner === 2) {
                console.log(winner);
                this.winnerNumber = winner;
                return this.winnerNumber;
            } else return;
        }
    }

    checkForRowWin(){
        if(this.winnerNumber !== 0) return;
        const firstThree = this.columns.slice(0,4);
        const nextThree = this.columns.slice(1,5);
        const afterThree = this.columns.slice(2, 6);
        const lastThree = this.columns.slice(3,7);
        const rowCondition1 = new RowWinInspector(firstThree);
        const rowCondition2 = new RowWinInspector(nextThree);
        const rowCondition3 = new RowWinInspector(afterThree);
        const rowCondition4 = new RowWinInspector(lastThree);
        let conditionArr = [rowCondition1, rowCondition2,
            rowCondition3, rowCondition4];
        for(let row of conditionArr){
            const winner = row.inspect();
            if (winner === 1 || winner === 2){
                this.winnerNumber = winner;
                return this.winnerNumber;
            }
        } return;
    }

    checkForDiagonalWin() {
        if (this.winnerNumber !== 0) return;
        const firstColumns = this.columns.slice(0,4);
        const secondColumns = this.columns.slice(1,5);
        const thirdColumns = this.columns.slice(2, 6);
        const fourthColumns = this.columns.slice(3,7);
        const rowCondition1 = new checkForDiagonalWin(firstColumns);
        const rowCondition2 = new checkForDiagonalWin(secondColumns);
        const rowCondition3 = new checkForDiagonalWin(thirdColumns);
        const rowCondition4 = new checkForDiagonalWin(fourthColumns);

        let conditionArr = [rowCondition1, rowCondition2, rowCondition3, rowCondition4];

        for(let row of conditionArr){
            const winner = row.inspect();
            if (winner === 1 || winner === 2){
                this.winnerNumber = winner;
                return this.winnerNumber;
            }
        } return;
    }

}


