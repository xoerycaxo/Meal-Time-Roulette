// when a button is pressed, a random meal/drink recipe is displayed
var mealBtn = document.getElementById("meal-btn");
var mealEl = document.getElementById("meal");
var clearMeal = document.getElementById("clear-meal");

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

                    if(meal.strMeasure1 === null){
                        meal.strMeasure1 = "";
                    };
                    if(meal.strMeasure2 === null){
                        meal.strMeasure2 = "";
                    };
                    if(meal.strMeasure3 === null){
                        meal.strMeasure3 = "";
                    };
                    if(meal.strMeasure4 === null){
                        meal.strMeasure4 = "";
                    };
                    if(meal.strMeasure5 === null){
                        meal.strMeasure5 = "";
                    };
                    if(meal.strMeasure6 === null){
                        meal.strMeasure6 = "";
                    };
                    if(meal.strMeasure7 === null){
                        meal.strMeasure7 = "";
                    };
                    if(meal.strMeasure8 === null){
                        meal.strMeasure8 = "";
                    };
                    if(meal.strMeasure9 === null){
                        meal.strMeasure9 = "";
                    };
                    if(meal.strMeasure10 === null){
                        meal.strMeasure10 = "";
                    };
                    if(meal.strMeasure11 === null){
                        meal.strMeasure11 = "";
                    };
                    if(meal.strMeasure12 === null){
                        meal.strMeasure12 = "";
                    };
                    if(meal.strMeasure13 === null){
                        meal.strMeasure13 = "";
                    };
                    if(meal.strMeasure14 === null){
                        meal.strMeasure14 = "";
                    };
                    if(meal.strMeasure15 === null){
                        meal.strMeasure15 = "";
                    }; 
                    if(meal.strMeasure16 === null){
                        meal.strMeasure16 = "";
                    };
                    if(meal.strMeasure17 === null){
                        meal.strMeasure17 = "";
                    };
                    if(meal.strMeasure18 === null){
                        meal.strMeasure18 = "";
                    };
                    if(meal.strMeasure19 === null){
                        meal.strMeasure19 = "";
                    };
                    if(meal.strMeasure20 === null){
                        meal.strMeasure20 = "";
                    };
                    if(meal.strIngredient1 === null){
                        meal.strIngredient1 = "";
                    };
                    if(meal.strIngredient2=== null){
                        meal.strIngredient2 = "";
                    };
                    if(meal.strIngredient3=== null){
                        meal.strIngredient3 = "";
                    };
                    if(meal.strIngredient4=== null){
                        meal.strIngredient4 = "";
                    };
                    if(meal.strIngredient5=== null){
                        meal.strIngredient5 = "";
                    };
                    if(meal.strIngredient6=== null){
                        meal.strIngredient6 = "";
                    };
                    if(meal.strIngredient7=== null){
                        meal.strIngredient7 = "";
                    };
                    if(meal.strIngredient8=== null){
                        meal.strIngredient8 = "";
                    };
                    if(meal.strIngredient9=== null){
                        meal.strIngredient9 = "";
                     };
                    if(meal.strIngredient10 === null){
                        meal.strIngredient10 = "";
                    };
                    if(meal.strIngredient11 === null){
                        meal.strIngredient11 = "";
                    };
                    if(meal.strIngredient12 === null){
                        meal.strIngredient12 = "";
                    };
                    if(meal.strIngredient13 === null){
                        meal.strIngredient13 = "";
                    };
                    if(meal.strIngredient14 === null){
                        meal.strIngredient14 = "";
                    };
                    if(meal.strIngredient15 === null){
                        meal.strIngredient15 = "";
                    };
                    if(meal.strIngredient16 === null){
                        meal.strIngredient16 = "";
                    };
                    if(meal.strIngredient17 === null){
                        meal.strIngredient17 = "";
                    };
                    if(meal.strIngredient18 === null){
                        meal.strIngredient18 = "";
                    };
                    if(meal.strIngredient19 === null){
                        meal.strIngredient19 = "";
                    };
                    if(meal.strIngredient20 === null){
                        meal.strIngredient20 = "";
                    };

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
            mealEl.classList.remove("hidden");
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

                    if(drink.strMeasure1 === null){
                        drink.strMeasure1 = "";
                    };
                    if(drink.strMeasure2 === null){
                        drink.strMeasure2 = "";
                    };
                    if(drink.strMeasure3 === null){
                        drink.strMeasure3 = "";
                    };
                    if(drink.strMeasure4 === null){
                        drink.strMeasure4 = "";
                    };
                    if(drink.strMeasure5 === null){
                        drink.strMeasure5 = "";
                    };
                    if(drink.strMeasure6 === null){
                        drink.strMeasure6 = "";
                    };
                    if(drink.strMeasure7 === null){
                        drink.strMeasure7 = "";
                    };
                    if(drink.strMeasure8 === null){
                        drink.strMeasure8 = "";
                    };
                    if(drink.strMeasure9 === null){
                        drink.strMeasure9 = "";
                    };
                    if(drink.strMeasure10 === null){
                        drink.strMeasure10 = "";
                    };
                    if(drink.strMeasure11 === null){
                        drink.strMeasure11 = "";
                    };
                    if(drink.strMeasure12 === null){
                        drink.strMeasure12 = "";
                    };
                    if(drink.strMeasure13 === null){
                        drink.strMeasure13 = "";
                    };
                    if(drink.strMeasure14 === null){
                        drink.strMeasure14 = "";
                    };
                    if(drink.strMeasure15 === null){
                        drink.strMeasure15 = "";
                    };    
                    if(drink.strIngredient1 === null){
                        drink.strIngredient1 = "";
                    };
                    if(drink.strIngredient2=== null){
                        drink.strIngredient2 = "";
                    };
                    if(drink.strIngredient3=== null){
                        drink.strIngredient3 = "";
                    };
                    if(drink.strIngredient4=== null){
                        drink.strIngredient4 = "";
                    };
                    if(drink.strIngredient5=== null){
                        drink.strIngredient5 = "";
                    };
                    if(drink.strIngredient6=== null){
                        drink.strIngredient6 = "";
                    };
                    if(drink.strIngredient7=== null){
                        drink.strIngredient7 = "";
                    };
                    if(drink.strIngredient8=== null){
                        drink.strIngredient8 = "";
                    };
                    if(drink.strIngredient9=== null){
                        drink.strIngredient9 = "";
                     };
                    if(drink.strIngredient10 === null){
                        drink.strIngredient10 = "";
                    };
                    if(drink.strIngredient11 === null){
                        drink.strIngredient11 = "";
                    };
                    if(drink.strIngredient12 === null){
                        drink.strIngredient12 = "";
                    };
                    if(drink.strIngredient13 === null){
                        drink.strIngredient13 = "";
                    };
                    if(drink.strIngredient14 === null){
                        drink.strIngredient14 = "";
                    };
                    if(drink.strIngredient15 === null){
                        drink.strIngredient15 = "";
                    };

                    html += `
                    <img src = "${drink.strDrinkThumb}" alt = "drink">
                    <h2>${drink.strDrink}</h2>
                    <h3>Ingredients</h3>
                    <ul id="meal-ingredients">
                    <scrpit> 
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

                    <h3>Type of Glass:</h3>
                    <p>${drink.strGlass}</p>

                    <div id="instructions">
                        <h3>Instructions</h3>
                        <p>${drink.strInstructions}</p>
                    </div>


                    `;console.log(drink);
                    



                });
            }

            drinkEl.innerHTML = html;
            drinkEl.classList.remove("hidden");
        })
        .catch(err => console.error(err));
}

var resetMeal = function() {
   //mealEl.remove();
   mealEl.classList.add("hidden");
};

var resetDrink = function() {
    //drinkEl.remove();
    drinkEl.classList.add("hidden");
};

drinkBtn.addEventListener("click", getRandomDrink);
mealBtn.addEventListener("click", getRandomMeal);
clearMeal.addEventListener("click", resetMeal);
clearDrink.addEventListener("click", resetDrink);