import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { NavLink, Link, BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBowlFood,
  faRectangleList,
  faWandMagicSparkles,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>
            <h2>
              FRIENDLY FOODS <FontAwesomeIcon icon={faBowlFood} />
            </h2>
            <h3>
              For all your dietary recipe needs{" "}
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </h3>
          </Logo>
        </Nav>
        <SearchBar />
        <NLink to={"/favourites"}>
          <h4>
            Favourites
            <FontAwesomeIcon icon={faStar} />
          </h4>
        </NLink>
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

 h3 {
  font-family: "Abel", sans-serif;
 font-size: 2rem;
 color: grey;
  }


`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

  h4 {
    text-decoration: none;
    color: black;
    font-family: "Dela Gothic One", cursive;
    font-size: 2rem;
    padding: 1rem;
    background-color: #33ff99;
    border-radius: 2rem;
    border: 3px black solid;
    box-shadow: 15px 15px black;
    width: 20rem;
  }

  &.active {
    h4 {
      color: grey;
    }
  }
`;

export default App;
