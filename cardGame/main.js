let deckId = "";
let count1 = 0;
let count2 = 0;

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", draw);

function draw() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#player1").src = data.cards[0].image;
      document.querySelector("#player2").src = data.cards[1].image;

      function convertToNum(num) {
        if (num === "ACE") {
          return 14;
        } else if (num === "KING") {
          return 13;
        } else if (num === "QUEEN") {
          return 12;
        } else if (num === "JACK") {
          return 11;
        } else {
          return Number(num);
        }
      }
      if (data.remaining === 0 && count1 > count2) {
        document.querySelector("h3").innerText = "Player 1 Victorious";
      } else if (data.remaining === 0 && count1 < count2) {
        document.querySelector("h3").innerText = "Player 2 Victorious";
      } else if (data.remaining === 0 && count1 === count2) {
        document.querySelector("h3").innerText = "BIG TIE";
      } else {
        let player1Val = convertToNum(data.cards[0].value);
        let player2Val = convertToNum(data.cards[1].value);
        if (player1Val > player2Val) {
          (document.querySelector("h3").innerText = "Player 1 Wins"),
            count1++,
            count2--;
        } else if (player1Val < player2Val) {
          (document.querySelector("h3").innerText = "Player 2 Wins"),
            count1--,
            count2++;
        } else {
          (document.querySelector("h3").innerText = "I....De....clare..."),
            count1--,
            count2--;
        }
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
