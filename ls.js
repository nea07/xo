// let area = document.getElementById("area");
// let cells = document.getElementsByClassName("cell");
// let whoWins = document.getElementById("whoWins");
// let currentPlayer = document.getElementById("currentPlayer");

// let roundHistory = [];
// let player = "X";
// let ai = "O";

// let stat = {
//   X: 0,
//   O: 0,
//   D: 0,
// };

// let winCombination = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// for (let i = 1; i <= 9; i++) {
//   area.innerHTML += `<div class='cell' pos=${i}></div>`;
// }

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", cellOnclick);
// }
// function cellOnclick() {
//   let data = [];
//   if (!this.innerHTML) {
//     this.innerHTML = player;
//   } else alert("ячейка уже занята!");
//   for (let i in cells) {
//     if (cells[i].innerHTML == player) {
//       data.push(parseInt(cells[i].getAttribute("pos")));
//     }
//   }
//   // console.log(data)
//   if (checkWinner(data)) {
//     stat[player] += 1;
//     whoWins.innerHTML = "победа" + [player];
//     roundHistory.push(whoWins.innerHTML);
//   } else {
//     let draw = true;
//     for (let i in cells) {
//       if (cells[i].innerHTML === "") draw = false;
//     }
//     if (draw) {
//       stat.D += 1;
//       whoWins.innerHTML = "ничья";
//       roundHistory.push(whoWins.innerHTML);
//     }
//   }
//   player = player === "X" ? "O" : "X";
//   currentPlayer.innerHTML = player.toLocaleLowerCase();
// }

// function checkWinner(data) {
//   for (var i in winCombination) {
//     var win = true;
//     for (var j in winCombination[i]) {
//       var id = winCombination[i][j];
//       var ind = data.indexOf(id);
//       if (ind === -1) {
//         win = false;
//       }
//     }
//     if (win) return true
//   }
//   return false
// }

// function restart(text) {
    
//   alert(text);
//   for(var i = 0; i < cells.length; i++) {
//       cells[i].innerHTML = '';
//   }
//   updateStat();
// }

// function updateStat() {
//   document.getElementById('sX').innerHTML = stat.X;
//   document.getElementById('sO').innerHTML = stat.O;
//   document.getElementById('sD').innerHTML = stat.D;
// }
let area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlyr');
var whowins = document.getElementById('whowins');


var player = "x";
var stat = {
    'x': 0,
    'o': 0,
    'd': 0
}
var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(var i = 1; i <= 9; i++) {
    area.innerHTML += `<div class='cell' pos='${i}'></div>`;
}

for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {        stat[player] += 1;
        restart("Выграл: " + player);

    }else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in winIndex) {
        var win = true;
        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}