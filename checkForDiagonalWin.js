export default class CheckForDiagonalWin {
    constructor(columns){
        this.columns = columns;
    }

    inspect(){
            console.log(this.columns);
            for (let index = 5; index >= 0; index--) {
            const column1 = this.columns[0].getTokenAt(index);
            const column2 = this.columns[1].getTokenAt(index - 1);
            const column3 = this.columns[2].getTokenAt(index - 2);
            const column4 = this.columns[3].getTokenAt(index - 3);
                

            if (column1 === column2 && column2 === column3 && column3 === column4 && column1 !== null) {
                return column1;
            }
        }
        for (let index = 5; index >= 0; index--) {
            const column1 = this.columns[3].getTokenAt(index);
            const column2 = this.columns[2].getTokenAt(index - 1);
            const column3 = this.columns[1].getTokenAt(index - 2);
            const column4 = this.columns[0].getTokenAt(index - 3);


            if (column1 === column2 && column2 === column3 && column3 === column4 && column1 !== null) {
                return column1;
            }
        }
    }
};