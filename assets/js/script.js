// when a button is pressed, a random meal/drink recipe is displayed
var mealBtn = document.getElementById("get-meal");
var drinkBtn = document.getElementById("get-drink");
var mealEl = document.getElementById("meal");
var drinkEl = document.getElementById("drink");
//var randomNumber = math.random;

//get meal api
var getRandomMeal = function() {
    var mealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(mealUrl)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

var getRandomDrink = function() {
    var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(drinkUrl)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}





drinkBtn.addEventListener("click", getRandomDrink);
mealBtn.addEventListener("click", getRandomMeal);