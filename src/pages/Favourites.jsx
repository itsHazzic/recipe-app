import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const recipeFavourites = JSON.parse(
      localStorage.getItem("friendly-foods-recipe-favourites")
    );

    if (recipeFavourites) {
      setFavourites(recipeFavourites);
    }
  }, []);

  const recipes = favourites;

  return (
    <div>
      <Grid>
        {recipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link
                to={"/recipe/" + item.id}
                style={{ textDecoration: "none" }}
              >
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
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

export default Favourites;
