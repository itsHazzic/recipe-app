import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

// const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca"; //original sarah api key

// const spoonAPI = "e03747fcb6294f39a5076b453fe3cbaa"; //charliy api key

function Diet() {
  const [diet, setDiet] = useState([]);
  let params = useParams();

  const getDiet = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPI}&diet=${name}`
    );
    const recipes = await data.json();
    setDiet(recipes.results);
  };

  useEffect(() => {
    getDiet(params.name);
  }, [params.name]);

  return (
    <Grid>
      {diet.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id} style={{ textDecoration: "none" }}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
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
  }
`;

export default Diet;
