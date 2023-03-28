import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledPicksHeader } from "./Vegetarian";
// const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca";

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
              <Link to={"/recipe/" + recipe.id}>
                <p>{recipe.title}</p>
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
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
`;

const Headerwrapper = styled.div`
  display: flex;
  margin: 5rem;
`;

//Vegan Title Styling
const StyledPicksHeaderVegan = styled.h3`
  font-family: "Dela Gothic One", cursive;
`;

export default Vegan;
