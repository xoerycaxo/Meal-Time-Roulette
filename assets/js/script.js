// when a button is pressed, a random meal/drink recipe is displayed
var mealBtn = document.getElementById("meal-btn");
var mealEl = document.getElementById("meal");
var clearMeal = document.getElementById("clear-meal");
var mealContainer = document.getElementById("meal-container");

var drinkBtn = document.getElementById("drink-btn");
var drinkEl = document.getElementById("drink");
var clearDrink = document.getElementById("clear-drink");

//get meal api
var getRandomMeal = function() {
    var mealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(mealUrl)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if(data.meals){
                data.meals.forEach(meal => {
                    html += `
                    <img src = "${meal.strMealThumb}" alt = "food">
                    <h2>${meal.strMeal}</h2>
                    <h3>Ingredients:</h3>
                    <ul id="meal-ingredients">
                        <li>${meal.strIngredient1}</li>
                        <li>${meal.strIngredient2}</li>
                        <li>${meal.strIngredient3}</li>
                        <li>${meal.strIngredient4}</li>
                        <li>${meal.strIngredient5}</li>
                        <li>${meal.strIngredient6}</li>
                        <li>${meal.strIngredient7}</li>
                        <li>${meal.strIngredient8}</li>
                        <li>${meal.strIngredient9}</li>
                        <li>${meal.strIngredient10}</li>
                        <li>${meal.strIngredient11}</li>
                        <li>${meal.strIngredient12}</li>
                        <li>${meal.strIngredient13}</li>
                        <li>${meal.strIngredient14}</li>
                        <li>${meal.strIngredient15}</li>
                        <li>${meal.strIngredient16}</li>
                        <li>${meal.strIngredient17}</li>
                        <li>${meal.strIngredient18}</li>
                        <li>${meal.strIngredient19}</li>
                        <li>${meal.strIngredient20}</li>
                    </ul>

                    <h3>Measurements:</h3>
                    <ul id="meal-measurements">
                        <li>${meal.strMeasure1}</li>
                        <li>${meal.strMeasure2}</li>
                        <li>${meal.strMeasure3}</li>
                        <li>${meal.strMeasure4}</li>
                        <li>${meal.strMeasure5}</li>
                        <li>${meal.strMeasure6}</li>
                        <li>${meal.strMeasure7}</li>
                        <li>${meal.strMeasure8}</li>
                        <li>${meal.strMeasure9}</li>
                        <li>${meal.strMeasure10}</li>
                        <li>${meal.strMeasure11}</li>
                        <li>${meal.strMeasure12}</li>
                        <li>${meal.strMeasure13}</li>
                        <li>${meal.strMeasure14}</li>
                        <li>${meal.strMeasure15}</li>
                        <li>${meal.strMeasure16}</li>
                        <li>${meal.strMeasure17}</li>
                        <li>${meal.strMeasure18}</li>
                        <li>${meal.strMeasure19}</li>
                        <li>${meal.strMeasure20}</li>
                    </ul>


                    <div id="instructions">
                        <h3>Instructions</h3>
                        <p>${meal.strInstructions}</p>
                    </div>

                    <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/${meal.strYoutube.substring(meal.strYoutube.indexOf('=') + 1)}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>

                    <p>Source:${meal.strSource}</p>
                    `;
                    console.log(meal);
                });
            }
            
            mealEl.innerHTML = html;
        })
        .catch(err => console.error(err));
}

var getRandomDrink = function() {
    var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(drinkUrl)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if(data.drinks){
                data.drinks.forEach(drink => {
                    html += `
                    <img src = "${drink.strDrinkThumb}" alt = "drink">
                    <h2>${drink.strDrink}</h2>
                    <h3>Ingredients</h3>
                    <ul id="meal-ingredients">
                        <li>${drink.strIngredient1}</li>
                        <li>${drink.strIngredient2}</li>
                        <li>${drink.strIngredient3}</li>
                        <li>${drink.strIngredient4}</li>
                        <li>${drink.strIngredient5}</li>
                        <li>${drink.strIngredient6}</li>
                        <li>${drink.strIngredient7}</li>
                        <li>${drink.strIngredient8}</li>
                        <li>${drink.strIngredient9}</li>
                        <li>${drink.strIngredient10}</li>
                        <li>${drink.strIngredient11}</li>
                        <li>${drink.strIngredient12}</li>
                        <li>${drink.strIngredient13}</li>
                        <li>${drink.strIngredient14}</li>
                        <li>${drink.strIngredient15}</li>
                    </ul>

                    <h3>Measurements:</h3>
                    <ul id="meal-measurements">
                        <li>${drink.strMeasure1}</li>
                        <li>${drink.strMeasure2}</li>
                        <li>${drink.strMeasure3}</li>
                        <li>${drink.strMeasure4}</li>
                        <li>${drink.strMeasure5}</li>
                        <li>${drink.strMeasure6}</li>
                        <li>${drink.strMeasure7}</li>
                        <li>${drink.strMeasure8}</li>
                        <li>${drink.strMeasure9}</li>
                        <li>${drink.strMeasure10}</li>
                        <li>${drink.strMeasure11}</li>
                        <li>${drink.strMeasure12}</li>
                        <li>${drink.strMeasure13}</li>
                        <li>${drink.strMeasure14}</li>
                    </ul>

                    <h3>Type of Glass</h3>
                    <p>${drink.strGlass}</p>

                    <div id="instructions">
                        <h3>Instructions</h3>
                        <p>${drink.strInstructions}</p>
                    </div>


                    `;console.log(drink);

                });
            }

            drinkEl.innerHTML = html;
        })
        .catch(err => console.error(err));
}

var resetMeal = function() {
    mealEl.remove();
};

var resetDrink = function() {
    drinkEl.remove();
};

drinkBtn.addEventListener("click", getRandomDrink);
mealBtn.addEventListener("click", getRandomMeal);
clearMeal.addEventListener("click", resetMeal);
clearDrink.addEventListener("click", resetDrink);