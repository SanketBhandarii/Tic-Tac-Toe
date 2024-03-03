let currentTurn = "X";
let arr = Array(9).fill(null);
let winnerMsg = document.querySelector('h2');
let row = document.querySelectorAll('.row');
let btn = document.querySelector('button');
let col = document.querySelectorAll('.col');
function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
     winnerMsg.innerHTML = `Winner is :- <span>${currentTurn}<span>`;
     winnerMsg.style.display = "block";
     btn.style.display = "block";
     row.forEach((r)=>{
      r.style.display = "none";
    })
     return;
  }

  if(!arr.some((e) => e === null)){
    row.forEach((r)=>{
      r.style.display = "none";
    })
     winnerMsg.innerHTML = `Match <span>Draw</span>`;
     winnerMsg.style.display = "block";
     btn.style.display = "block";
     return;
  }
}

function trackClick(col) {
  const index = Number(col.id);
  if (arr[index] !== null) {
    return;
  }
  arr[index] = currentTurn;
  col.style.background = "rgba(0, 0, 0, 0.244)";
  if(currentTurn == "O"){
    col.style.color = "rgb(255, 255, 0)";
  }
  col.innerHTML = currentTurn;
  checkWinner();
  currentTurn = currentTurn === "X" ? "O" : "X";
}

btn.addEventListener('click',()=>{
    location.reload();
})
