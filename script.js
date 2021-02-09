const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getMealList);

function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(res => res.json())
    .then(data => {console.log(data)});
}

