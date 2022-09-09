board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
count = 0;
player = "Player 1";
symbol = "X";
gameOver = false;

function setCord(x, y) {
  if (board[x][y] == " ") {
    board[x][y] = symbol;
    document.getElementById("tile" + x + y).innerText = symbol;
    count++;
    gameOver = checkWin(symbol, player);
    if (gameOver == false) {
      if (count % 2 == 0) {
        player = "Player 1";
        symbol = "X";
        alert(player + " turn");
      } else {
        player = "Player 2";
        symbol = "O";
        alert(player + " turn");
      }
    }
  }
  console.log(board);
}

function checkWin(sym, play) {
  if (sym == board[0][0] && sym == board[0][1] && sym == board[0][2]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[1][0] && sym == board[1][1] && sym == board[1][2]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[2][0] && sym == board[2][1] && sym == board[2][2]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[0][0] && sym == board[1][0] && sym == board[2][0]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[0][1] && sym == board[1][1] && sym == board[2][1]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[0][2] && sym == board[1][2] && sym == board[2][2]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[0][0] && sym == board[1][1] && sym == board[2][2]) {
    alert(play + " has won!");
    return true;
  } else if (sym == board[2][0] && sym == board[1][1] && sym == board[0][2]) {
    alert(play + " has won!");
    return true;
  } else {
    return false;
  }
}

function reset() {
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  count = 0;
  player = "Player 1";
  symbol = "X";
  gameOver = false;
  document.getElementById("tile00").innerText = " ";
  document.getElementById("tile01").innerText = " ";
  document.getElementById("tile02").innerText = " ";
  document.getElementById("tile10").innerText = " ";
  document.getElementById("tile11").innerText = " ";
  document.getElementById("tile12").innerText = " ";
  document.getElementById("tile20").innerText = " ";
  document.getElementById("tile21").innerText = " ";
  document.getElementById("tile22").innerText = " ";
}
