const changeColor = () => {
  let color = [
    "#40E0D0",
    "#FF7F50",
    "#6495ED",
    "#FFBF00",
    "#DE3163",
    "#FFA600",
    "#B200FF",
    "#FF005D",
    "#5694EE",
    "#72E824",
  ];

  let randomNumber = Math.floor(Math.random() * color.length);
  let randomColor = color[randomNumber];

  document.body.style.background = randomColor;
  console.log(randomNumber);
  // alert("Color changed")
};
