import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
