import { useEffect, useState } from "react";
import style from "./Pizza.module.css";

export default function Pizza() {
  const [recipes, setRecipes] = useState([]);
  async function getRecipes() {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    setRecipes(data.recipes);
  }
  useEffect( ()=>{
    getRecipes();
  },[]);

  return (
    <section className={`${style.bgPizza}`}>
      <div className="container">
        {recipes.length == 0?<h1>Loading . . . </h1>:
          <div className="row py-5 align-items-center justify-content-center">
                <h1 className="fw-bolder text-center p-5"> Pizza Recipes</h1>
            {
            recipes.map(recipe=> 
                <div className="col-lg-4">
              <div className="p-3 mb-5 card">
                <h2 className="text-center">{recipe.title.split(' ').slice(0,2).join(' ')}</h2>
                <img src={recipe.image_url} alt="pizza" title="pizza" />
              </div>
                </div>

            )
            }
          </div>
        }
      </div>
      </section>
  )
}
