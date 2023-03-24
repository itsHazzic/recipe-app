import { useEffect, useState } from "react";

const spoonAPI = "9bc0a14567ad453a8bdbb7da98d758ca";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${spoonAPI}&number=9`);
        const data = await api.json();
        setPopular(data.recipes);
    };

    return (
        <div>
            {popular.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <p>{recipe.title}</p>
                    </div>
                );
            })};
        </div>
    );
};

export default Popular;