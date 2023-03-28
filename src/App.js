import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { Link, BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>
            <h2>FRIENDLY FOODS</h2>
          </Logo>
        </Nav>
        <SearchBar />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  font-color: orange;
  font size: 1.5rem;
  text-decoration: none;
  color: black;
 font-family: "Dela Gothic One", cursive;
 font-size: 2rem;
 margin: 4rem;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
