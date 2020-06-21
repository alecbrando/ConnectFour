export default class RowWinInspector {
    constructor(columns){
        this.column = columns;
    }

    inspect(){
        for(let i = 0; i <= 5; i++){
            const column1 = this.column[0].getTokenAt(i);
            const column2 = this.column[1].getTokenAt(i);
            const column3 = this.column[2].getTokenAt(i);
            const column4 = this.column[3].getTokenAt(i);

            if(column1 === column2 && column2 === column3 && column3 === column4 && column1 !== null){
                return column1;
            }
        }
        return 0;
    }
}