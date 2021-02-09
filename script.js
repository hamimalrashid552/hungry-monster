const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');

searchBtn.addEventListener('click', getMealList);


function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="meal-item" data-id = "${meal.idMeal}>
                            <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a onclick="displayMealDetails" href="#" class="recipe-btn">Get ingredient</a>
                            </div>
                        </div>
                    `;

                });
            }

            mealList.innerHTML = html;
        });
}

