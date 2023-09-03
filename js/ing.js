let Ingredlist= []
async function getIngred(){
    let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data = await Req.json()
    Ingredlist= data.meals
    displayIngred()
    // console.log(Ingredlist);
}
function displayIngred(){
    let temp=""
    Ingredlist.forEach((e)=>{
        temp+= `<div class="col-md-3" onclick="ingredMeal('${e.strIngredient}')">
        
        <i class="dabos fa-solid fa-drumstick-bite fs-1"></i>
        <div class="ingredtitle">
        <h3>${e.strIngredient}</h3>
        
        <p>${e.strDescription}</p>
       
        </div>
   
        
        
    </div>`
    }
    )
    document.getElementById("myingredients").innerHTML = temp
}

getIngred()







async function ingredMeal(ingmeal){

    var Req= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingmeal}`)
    var data = await Req.json()
    ingMaellistt=data.meals
    displayingMeal()
}
function displayingMeal(){
    let  temp = " ";
    ingMaellistt.forEach((e) => {
        temp+= `<div class="col-md-3" >
       <div class="areaimg " onclick="getRecipe('${e.idMeal}')">
           <img src="${e.strMealThumb}" alt="" class="w-100">
       <div class="arealayer">
           <div class="title">${e.strMeal}</div>
       </div>
       </div>
   </div>`
        
    })
    document.getElementById("myingredients").innerHTML = temp}




    async function getRecipe(id){
        let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let data = await Req.json()
        recipelist= data.meals
        console.log(recipelist);
    
        displayrecipe()
    }
    
    function displayrecipe() {

        let temp = ""
        recipelist.forEach((e) => {
            temp += ` <div class="col-sm-3 therecipieone ">
            <img src="${e.strMealThumb}" alt="" class="w-100" >
            <h3 class="titleee">${e.strMeal}</h3>
            <div class="recipeid d-none ">${e.idMeal}</div>
    
        </div>
    
        <div class="col-sm-9 therecipiedetails ">
            <h2>instructions</h2>
            <p>${e.strInstructions}</p>
    
            <h2>Area: ${e.strArea}</h2>
            <h2>Category: ${e.strCategory}</h2>
            <h2>Recipes: </h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1"> ${e.strIngredient1} </li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient2}</li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient3}</li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient4}</li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient5} </li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient6}</li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient7} </li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient8} </li>
            <li class="alert alert-info m-2 p-1"> ${e.strIngredient9}</li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient10}</li>
            <li class="alert alert-info m-2 p-1"> ${e.strIngredient11}</li>
            <li class="alert alert-info m-2 p-1"> ${e.strIngredient12} </li>
            <li class="alert alert-info m-2 p-1">${e.strIngredient14}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strIngredient15}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strIngredient16}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strIngredient17}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strIngredient18}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strIngredient19}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strIngredient20}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure1}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure2}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure3}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure4}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure5}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure6}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure7}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure8}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure9}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure10}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure11}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure12}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure13}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure14}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure15}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure16}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure17}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure18}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure19}</li>
            <li class="alert alert-info m-2 p-1">  ${e.strMeasure20}</li>
        </ul>
    
    
            <h3>Tags:</h3>
            <p>${e.strTags}</p>
            <button type="button" onclick="window.location.href = '${e.strSource}';" class="btn btn-success ">Source</button>
            <button type="button" onclick="window.location.href = '${e.strYoutube}';" class="btn btn-danger ">Youtube</button>
    
       
        </div>`
        }
        )
        document.getElementById("mydataa").innerHTML = temp
    
    }
    
    getRecipe()

