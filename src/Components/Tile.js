import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
    border: 1px solid black;
    font-size: 3rem;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: white;
`

function Tile(props) {
    console.log()
    return(
        <StyledTile>A</StyledTile>
    )
}

export default Tile;