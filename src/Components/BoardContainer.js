import React from "react";
import Tile from "./Tile"
import styled from "styled-components";

const StyledBoard = styled.div`
    width: 410px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10%;
    border: 5px solid black;
    background: lightgray;
    padding: 10px;
    border-radius: 15px;
`

function BoardContainer(props) {
    return (
        <StyledBoard>
            {props.tiles.map((tile, index) => <Tile tile={tile} key={index} index={index}/>)}
        </StyledBoard>
    )
}

export default BoardContainer;