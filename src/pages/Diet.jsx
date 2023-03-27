import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca";

function Diet() {

    const [diet, setDiet] = useState([]);
    let params = useParams();

    const getDiet = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPI}&diet=${name}`);
        const recipes = await data.json();
        setDiet(recipes.results);
    };

    useEffect(() => {
        getDiet(params.name);
        console.log(params.name);
    }, [params.name]);

    return (
        <Grid>
           {diet.map((item) => {
            return (
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            );
           })} 
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem
`;

const Card = styled.div`

`;

export default Diet;