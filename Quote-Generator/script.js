let apiQuotes = [];

//Show new Quote
function newQuote() {
   //Pick random quote from the array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   console.log(quote)
}

//Get quotes from API
async function getQuotes() {
   const apiUrl = "https://type.fit/api/quotes";
   try {
      const response = await fetch(apiUrl); //Get the quotes from the api
      apiQuotes = await response.json(); //Convert to json
      newQuote();
   } catch (err) {}
}

//On Load
getQuotes();
