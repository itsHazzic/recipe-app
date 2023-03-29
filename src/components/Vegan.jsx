import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledPicksHeader } from "./Vegetarian";
// const spoonAPI = "e03747fcb6294f39a5076b453fe3cbaa";

function Vegan() {
  const [vegan, setVegan] = useState([]);

  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    const check = localStorage.getItem("vegan");
    if (check) {
      setVegan(JSON.parse(check)); //takes the string created from localstorage and changes it back to an array
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${spoonAPI}&number=4&tags=vegan`
      );
      const data = await api.json();
      localStorage.setItem("vegan", JSON.stringify(data.recipes)); //takes the array and saves it as a string
      setVegan(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <Headerwrapper>
          <StyledPicksHeaderVegan>
            <h3>Vegan Picks</h3>
          </StyledPicksHeaderVegan>
        </Headerwrapper>
        {vegan.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link
                to={"/recipe/" + recipe.id}
                style={{ textDecoration: "none" }}
              >
                <StyledVeganP>
                  <p>{recipe.title}</p>
                </StyledVeganP>
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

const Headerwrapper = styled.div`
  display: flex;
  margin: 5rem;
`;

//Vegan Title Styling
const StyledPicksHeaderVegan = styled.h3`
  font-family: "Dela Gothic One", cursive;
`;

const StyledVeganP = styled.p`
  font-family: "Abel", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export default Vegan;
