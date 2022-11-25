let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "http://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInp = document.getElemtntById("user-inp"),value;
fetch (url + "big mac")
    .then((response) => response.json())
    .then ((data) => {
        let myMeal = data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstruction);
        let count = 1;
        let ingredients = [];
        for (let i in myMeal){
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strngredients") && myMeal[i])
            {
                ingredient = myMeal[i];
                measure = myMeal [`strMeasure` + count];
                count += 1;
                ingredients.push(`${measure} ${ingredients}`);
            }
        } 
        console.log(ingredients);
        result.innerHTML = `<img src=${myMeal.strMealThumb}></img>`;
    }
    );