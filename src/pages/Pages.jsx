import React from "react";
import Home from "./Home";
import Diet from "./Diet";
import SearchedPage from "./SearchedPage";
import Recipe from "./Recipe";
import Favourites from "./Favourites";
import { Route, Routes } from "react-router-dom";

function Pages() {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/diet/:name" element={<Diet />}/>
                <Route path="/search/:search" element={<SearchedPage />}/>
                <Route path="/recipe/:id" element={<Recipe />}/>
                <Route path="/favourites" element={<Favourites />}/>
            </Routes>
    );
}

export default Pages;