import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca";

function Vegetarian() {

    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
    },[]);

    const getVegetarian = async () => {
        const check = localStorage.getItem('vegetarian');
        if(check) {
            setVegetarian(JSON.parse(check)); //takes the string created from localstorage and changes it back to an array
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${spoonAPI}&number=4&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("vegetarian", JSON.stringify(data.recipes)); //takes the array and saves it as a string
            setVegetarian(data.recipes);
        }
    };

    return (
        <div>
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                    {vegetarian.map((recipe) => {
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

export default Vegetarian;