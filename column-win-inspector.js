import Column from "./column.js"

export default class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }
    inspect() {
        for(let i = 0; i <= 5; i++){
    for(let j = i + 1; j <= 5; j++){
        if (column.getTokenAt(i) === column.getTokenAt(j) && column.getTokenAt(i + 1) === column.getTokenAt(j + 2)){
            return column.getTokenAt(i);
        }
    }
            return -1;
}
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
