import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// const spoonAPI = "e03747fcb6294f39a5076b453fe3cbaa"; //original sarah api key

// const spoonAPI = "e03747fcb6294f39a5076b453fe3cbaa"; //charliy api key

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem("vegetarian");
    if (check) {
      setVegetarian(JSON.parse(check)); //takes the string created from localstorage and changes it back to an array
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${spoonAPI}&number=4&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes)); //takes the array and saves it as a string
      setVegetarian(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>
          Vegetarian Picks <FontAwesomeIcon icon={faStar} />
        </h3>
        <StyledGrid>
          {vegetarian.map((recipe) => {
            return (
              <Card key={recipe.id}>
                <Link
                  to={"/recipe/" + recipe.id}
                  style={{ textDecoration: "none" }}
                >
                  <img src={recipe.image} alt={recipe.title} />

                  <StyledVeggieP>
                    <p>{recipe.title}</p>
                  </StyledVeggieP>
                </Link>
              </Card>
            );
          })}
        </StyledGrid>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 5rem;
  h3 {
    font-family: "Dela Gothic One", cursive;
    font-size: 2rem;
  }
`;

const StyledGrid = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  h4 {
    text-decoration: none;
    color: black;
    font-family: "Abel", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
  }

  img {
    border-radius: 2rem;
    border: 3px black solid;
    box-shadow: 15px 15px black;
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`;

const StyledVeggieP = styled.p`
  font-family: "Abel", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export default Vegetarian;
