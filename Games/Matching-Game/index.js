let cardCount = 12;

//Helper function for adding style in the elements
function styleElement(item, styles) {
  for (const key in styles) {
    item.style[key] = styles[key];
  }
}

//Helper function for generating random number within the array length
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

//Create front card
function createFrontCard(card, i) {
  const frontCard = document.createElement("div");
  frontCard.classList.add("front-card");
  //Style for the front card
  styleElement(frontCard, {
    backgroundColor: "rgba(39,39,39,.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: "3rem",
    height: "100%",
    // display: "none",
  });
  frontCard.innerText = i + 1;
  card.appendChild(frontCard);
}

//create back card
function createBackCard(card) {
  const backCard = document.createElement("div");
  backCard.classList.add("back-card");

  const randomIndex = getRandomNumber(cards);
  styleElement(backCard, {
    backgroundColor: cards[randomIndex].backgroundColor,
    height: "100%",
    display: "none",
  });
  backCard.setAttribute("data-type", cards[randomIndex].type);
  card.appendChild(backCard);
}

// Create Card
function createCards(board) {
  for (let i = 0; i < cardCount; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    //Style for the card
    styleElement(card, {
      cursor: "pointer",
      width: "100%",
      height: "100%",
      zIndex: "10",
    });
    createFrontCard(card, i);
    createBackCard(card);
    board.appendChild(card);
  }
}

//Initialize game board
function initialize() {
  const board = document.createElement("div");
  styleElement(board, {
    width: "100%",
    height: "100vh",
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "2rem",
    backgroundColor: "whitesmoke",
  });
  createCards(board);
  document.body.appendChild(board);
  //Card on click
  document.querySelectorAll(".card").forEach((card) => {
    let open = false;

    card.addEventListener("click", () => {
      if (open) {
        card.querySelectorAll(".front-card").forEach((item) => {
          item.style.display = "flex";
        });
        card.querySelectorAll(".back-card").forEach((item) => {
          item.style.display = "none";
        });
        open = false;
      } else {
        card.querySelectorAll(".front-card").forEach((item) => {
          item.style.display = "none";
        });
        card.querySelectorAll(".back-card").forEach((item) => {
          item.style.display = "";
        });
        open = true;
      }
    });
  });
}

initialize();
