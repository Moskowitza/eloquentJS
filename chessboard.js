
let output;
drawBoard(4,4)
function drawBoard(row, col){
    for (i = 0; i < col; i++) {
        if(i%2==0){hashRow(row)}
        else{spaceRow(row)}
    console.log(output)
    }
}


function hashRow(row){
    output = " "
    for (j = 1; j <= row; j++)
    if (j % 2 == 0) {
        output = output + "#"
    } else {
        output = output + " "
    }
}
function spaceRow(row){
    output = " "
    for (j = 1; j <= row; j++)
    if (j % 2 == 0) {
        output = output + " "
    } else {
        output = output + "#"
    }
}