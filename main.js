//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// require('dotenv').config();

//look at all the processes

// console.log(process.env)

//put the secret key in a variable
// const apiKey = process.env.SECRET_API_KEY;

// console.log(apiKey)

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
    // Get the value from the input element
    let drink = document.querySelector("input").value;
  
    // Use encodeURIComponent with the drink variable directly in the fetch URL
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(drink)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.drinks[0]);
        document.querySelector("h2").innerText = data.drinks[0].strDrink;
        document.querySelector("img").src = data.drinks[0].strDrinkThumb;
        document.querySelector("h3").innerText = data.drinks[0].strInstructions;
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
  