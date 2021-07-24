const quoteText = document.querySelector("span.quote");
const quoteAuthorText = document.querySelector("span.author");
const newQuoteBtn = document.querySelector("#new-btn");
const loader = document.querySelector(".loader");
let apiQuotes = [];

//Show new Quote
async function newQuote() {
  //Pick random quote from the array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent = quote.text;
  quoteAuthorText.textContent = quote.author;
}

//Get quotes from API
async function getQuotes() {
  try {
    const apiUrl = "https://type.fit/api/quotes";
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
    loader.classList.add("loaded");
  } catch (err) {
    console.log(err);
  }
}
//On Load
getQuotes();

//Get new quote when clicked
newQuoteBtn.onclick = () => {
  newQuote();
};
