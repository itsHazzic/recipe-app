import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <List>
      <NLink to={"/diet/gluten-free"}>
        <StyledHeader1>
          <h4>Gluten Free</h4>
        </StyledHeader1>
      </NLink>
      <NLink to={"/diet/low-fodmap"}>
        <StyledHeader1>
          <h4>Low FODMAP</h4>
        </StyledHeader1>
      </NLink>
      <NLink to={"/diet/vegan"}>
        <StyledHeader1>
          <h4>Vegan</h4>
        </StyledHeader1>
      </NLink>
      <NLink to={"/diet/vegetarian"}>
        <StyledHeader1>
          <h4>Vegetarian</h4>
        </StyledHeader1>
      </NLink>
    </List>
  );
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
  text-decoration: none;
  border-bottom-style: none;
  color: black;

  &.active {
    h4 {
      color: green;
    }
  }
`;

const StyledHeader1 = styled.h1`
  background-color: #68dede;
  font-family: "Dela Gothic One", cursive;
  font-size: 1.5rem;
`;

export default Categories;
