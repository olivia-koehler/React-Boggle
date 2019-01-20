import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    border: 1px solid black;
    font-size: 1.5rem;
    border-radius: 10px;
    margin: 20px;
    padding: 10px 30px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background: #ADDCAD;
    }
`

function ScrambleButton(props) {
    return (
            <StyledButton onClick={() => window.location.reload()}>Scramble the board!</StyledButton>
    )
}

export default ScrambleButton;