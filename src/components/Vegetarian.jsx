import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const spoonAPI = "e03747fcb6294f39a5076b453fe3cbaa";

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
        <Headerwrapper>
          <StyledPicksHeaderVeggie>
            <h3>Vegetarian Picks</h3>
          </StyledPicksHeaderVeggie>
        </Headerwrapper>
        {vegetarian.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link
                to={"/recipe/" + recipe.id}
                style={{ textDecoration: "none" }}
              >
                <StyledVeggieP>
                  <p>{recipe.title}</p>
                </StyledVeggieP>
                <img src={recipe.image} alt={recipe.title} />
              </Link>
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 2rem;
`;

const Headerwrapper = styled.div`
  display: flex;
  margin: 5rem;
`;

const Card = styled.div`
  display: flex;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    border: 3px black solid;
    box-shadow: 15px 15px black;
    margin: 2rem;
    max-height: 10rem;
  }
`;

//Veggie Title Styling
const StyledPicksHeaderVeggie = styled.h3`
  font-family: "Dela Gothic One", cursive;
`;

const StyledVeggieP = styled.p`
  font-family: "Abel", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export default Vegetarian;
