import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/' + input);
    };
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    width: 50%;

    div {
        width: 100%;
    }
    input {
        background-color: grey;
        color: green;
        width: 50%;
    }
`;

export default SearchBar;