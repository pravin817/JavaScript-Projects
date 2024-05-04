// get the button element

const btn = document.querySelector(".btn");

const playGame = () => {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set the Attributes for the both the images

  img1.setAttribute("src", `images/dice${randomNumber1}.png`);
  img2.setAttribute("src", `images/dice${randomNumber2}.png`);

  // Set the title for the winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
};

btn.addEventListener("click", playGame);

// Function for the Automatic Game play
// setInterval(() => {
//     playGame();
// }, 1000);
