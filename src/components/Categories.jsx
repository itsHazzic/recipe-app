import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
    return (
        <List>
            <NLink to={"/diet/gluten-free"}>
                <h4>Gluten Free</h4>
            </NLink>
            <NLink to={"/diet/low-fodmap"}>
                <h4>Low FODMAP</h4>
            </NLink>
            <NLink to={"/diet/vegan"}>
                <h4>Vegan</h4>
            </NLink>
            <NLink to={"/diet/vegetarian"}>
                <h4>Vegetarian</h4>
            </NLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const NLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

    &.active {

        h4 {
            color: green;
        }
    }
`;

export default Categories;