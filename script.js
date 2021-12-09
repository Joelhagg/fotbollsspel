let game = document.getElementById("game");
let bollkalle = document.getElementById("bollkalle");
let gameOver = document.getElementById("gameOver");
let result = document.getElementById("result");
let score = document.getElementById("score");
let sound1 = new Audio('sound/trummor_cowbell.wav'); 
let sound2 = new Audio('sound/trummor_stick.wav');
let bottom = 0;
let left = 220;
let points = 0;

document.addEventListener("keydown", (evt) => {
  switch (evt.key) {
    case "ArrowLeft":
      if (left > 0) {
        left -= 10;
        bollkalle.style.left = left + "px";
        //console.log("vänster", bollkalle.style.left);
      }
      break;
    case "ArrowRight":
      if (left < 426) {
        left += 10;
        bollkalle.style.left = left + "px";
        //console.log("höger", bollkalle.style.left);
      }
      break;
    default:
      break;
  }
});

let footballId = 0;

function addFootball() {
  footballId++;

  //console.log("Fotboll kommer!");

  bollkalle.style.left = left;

  let football = document.createElement("div");
  football.innerHTML = "<i class='fas fa-futbol'></i>";
  football.classList = "football";

  let footballTop = 0;
  let footballPosition = Math.round(
    Math.floor((Math.random() * (426 - 1)) / 10) * 10
  );

  football.style.top = footballTop + "px";
  football.style.left = footballPosition + "px";
  football.id = footballId;

  let move = setInterval(() => {
    footballTop += 10;
    document.getElementById(footballId).style.top = footballTop + "px";

    //console.log(footballTop);
    //console.log(football.style.left);
    //console.log(bollkalle.style.left);

    if (footballTop == 400 && bollkalle.style.left == football.style.left) {
      //console.log("Du fångade!!");
      points++;
      score.innerHTML = "Score: " + points;
      
      sound1.play()
    
      clearInterval(move);

      football.remove();
      if (points < 5) {
        addFootball();
      } else {

        fasterFootball();
      }


        
    
      //   addFootball();
    } else if (footballTop == 450) {
      //console.log("GAME OVER!!!");
      gameOver.innerHTML = "GAME OVER!!!";
      clearInterval(move);
      sound2.play()
      // Skapar en restart knapp
      let restart = document.createElement("button");
      restart.id = "restart";
      restart.innerText = "Restart";
      result.append(restart);

      // om man trycker på knappen så laddas sidan om
      restart.addEventListener("click", function () {
        location.reload();
      });
    }
  }, 100);
  game.append(football);
}

console.log(points);

function fasterFootball() {
  footballId++;

  //console.log("Fotboll kommer!");

  bollkalle.style.left = left;

  let football = document.createElement("div");
  football.innerHTML = "<i class='fas fa-futbol'></i>";
  football.classList = "football";

  let footballTop = 0;
  let footballPosition = Math.round(
    Math.floor((Math.random() * (426 - 1)) / 10) * 10
  );

  football.style.top = footballTop + "px";
  football.style.left = footballPosition + "px";
  football.id = footballId;

  let move = setInterval(() => {
    footballTop += 10;
    document.getElementById(footballId).style.top = footballTop + "px";

    //console.log(footballTop);
    //console.log(football.style.left);
    //console.log(bollkalle.style.left);

    if (footballTop == 400 && bollkalle.style.left == football.style.left) {
      //console.log("Du fångade!!");
      points++;
      score.innerHTML = "Score: " + points;
      sound1.play()
      clearInterval(move);
      football.remove();
      addFootball();
    } else if (footballTop == 450) {
      //console.log("GAME OVER!!!");
      gameOver.innerHTML = "GAME OVER!!!";
      clearInterval(move);
      sound2.play()
      // Skapar en restart knapp
      let restart = document.createElement("button");
      restart.id = "restart";
      restart.innerText = "Restart";
      result.append(restart);

      // om man trycker på knappen så laddas sidan om
      restart.addEventListener("click", function () {
        location.reload();
      });
    }
  }, 50);
  game.append(football);
}

// return;
addFootball();
