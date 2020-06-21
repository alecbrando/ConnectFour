import Column from "./column.js";
export default class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }
    inspect() {
        for(let i = 0; i <= 2; i++){
            const token1 = this.column.getTokenAt(i);
            const token2 = this.column.getTokenAt(i + 1);
            const token3 = this.column.getTokenAt(i + 2);
            const token4 = this.column.getTokenAt(i + 3);

            if(token1 === token2 && token2 === token3 && token3 === token4){
                return token1;
            }
        }
            return 0;
}

}
    
















































// Determine if array has 4 1 in a row


// let arr = [2,1,1,1,1,3];

// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] === arr[j] && arr[i + 2] === arr[j + 2]){
//             console.log("Hello");
//         }
//     }
// }
