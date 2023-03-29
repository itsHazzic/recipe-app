import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca";

function Recipe() {
  const [recipe, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${spoonAPI}`
    );
    const recipeData = await data.json();
    setRecipeDetails(recipeData);
    console.log(recipeData);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [params.id]);

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <ul>
          {recipe.diets?.map((dietname) => (
            <li key={dietname.id}>{dietname}</li>
          ))}
        </ul>
      </div>
      <Information>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h4>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Information>
    </RecipeWrapper>
  );
}

const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background-color: green;
  }

  h2 {
    text-decoration: none;
    color: black;
    font-family: "Abel", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
  }

  li {
    font-family: "Abel", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: orange;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  border-radius: 2rem;
  border: 3px black solid;
  box-shadow: 10px 10px black;
`;

const Information = styled.div`
  margin-left: 10rem;
  text-decoration: none;
  color: black;
  font-family: "Abel", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

export default Recipe;
