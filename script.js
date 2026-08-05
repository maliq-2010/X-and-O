let board = ["","","","","","","","",""];

let player = "X";

let gameOver = false;


function play(index){

    if(board[index] !== "" || gameOver){
        return;
    }


    board[index] = player;

    document.getElementsByClassName("cell")[index].innerHTML = player;


    checkWinner();


    player = player === "X" ? "O" : "X";

    document.getElementById("status").innerHTML =
    "Player " + player + " Turn";
}



function checkWinner(){

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];


    for(let combo of wins){

        let a = combo[0];
        let b = combo[1];
        let c = combo[2];


        if(board[a] && board[a] === board[b] && board[a] === board[c]){

            document.getElementById("status").innerHTML =
            "Player " + player + " Wins!";

            gameOver = true;

        }
    }


    if(!board.includes("") && !gameOver){

        document.getElementById("status").innerHTML =
        "Draw Game";

        gameOver = true;
    }

}



function restart(){

    board = ["","","","","","","","",""];

    player="X";

    gameOver=false;


    let cells=document.getElementsByClassName("cell");

    for(let cell of cells){
        cell.innerHTML="";
    }


    document.getElementById("status").innerHTML =
    "Player X Turn";
}