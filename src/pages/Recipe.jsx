import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBowlFood,
  faRectangleList,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { spoonAPI } from "../ApiKey";

function Recipe() {
  const [recipe, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const [activeFave, setActiveFave] = useState("unsaved");
  const [favourites, setFavourites] = useState([]);
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

  const saveToLocalStorage = (items) => {
    localStorage.setItem('friendly-foods-recipe-favourites', JSON.stringify(items))
  };

  const addFavouriteRecipe = (recipe) => {
    const newFavouriteList = [...favourites, recipe];
    setFavourites(newFavouriteList);
    setActiveFave("saved");
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteRecipe = (recipe) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== recipe.id
    );
    setFavourites(newFavouriteList);
    setActiveFave("unsaved");
    saveToLocalStorage(newFavouriteList);
  };


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
        <Button className={activeFave === 'saved' ? 'activefave' : ''} onClick={() => addFavouriteRecipe(recipe)}>Save Recipe</Button>
        <Button className={activeFave === 'unsaved' ? 'activefave' : ''} onClick={() => removeFavouriteRecipe(recipe)}>Remove Saved Recipe</Button>
      </div>
      <Information>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions{"  "}
          <FontAwesomeIcon icon={faRectangleList} />
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients{"  "}
          <FontAwesomeIcon icon={faUtensils} />
        </Button>
        {activeTab === "instructions" && (
          <div>
            <StyledRecipeP style={{ textDecoration: "none" }}>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            </StyledRecipeP>
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
   {
    margin: 10rem;
    display: flex;
  }

  .active {
    background-color: #33ff99;
  }

  .activefave {
    background-color: grey;
    display: none;
  }

  h2 {
    text-decoration: none;
    color: black;
    font-family: "Dela Gothic One", cursive;
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

  img {
    border-radius: 2rem;
    border: 3px black solid;
    box-shadow: 15px 15px black;
    margin: 2rem;
  }

  p {
    text-decoration: none;
  }

  ul {
    margin: 1rem;
  }
`;

const Button = styled.button`
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: #cc66ff;
  text-decoration: none;
  font-family: "Dela Gothic One", cursive;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  border-radius: 1rem;
  border: 3px black solid;
  box-shadow: 10px 10px black;

  .activefave {
    background-color: grey;
    display: none;
  }
`;

const Information = styled.div`
  margin-left: 10rem;
  text-decoration: none;
  color: black;
  font-family: "Abel", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledRecipeP = styled.p`
  text-decoration: none;

  a {
    text-decoration: none;
    color: #ed5ed5;
  }
`;

export default Recipe;
