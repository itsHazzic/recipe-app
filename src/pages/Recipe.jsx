import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca";

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
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: grey;
  background: orange;
`;

const Information = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
