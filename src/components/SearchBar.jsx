import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  margin: 5rem 5rem 10rem 5rem;

  div {
    display: flex;
    justify-content: center;
  }
  input {
    background-color: white;
    color: grey;
    width: 50vw;
    height: 3rem;
    border: 4px solid black;
    font-family: "Dela Gothic One", cursive;
    font-size: 2rem;
    box-shadow: 15px 15px black;
  }
`;

export default SearchBar;
