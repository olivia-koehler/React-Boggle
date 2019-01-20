import React from "react";
import Tile from "./Tile"
import styled from "styled-components";

const StyledBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20%;
    border: 1px solid black;
`

function BoardContainer(props) {
    return (
        <StyledBoard>
            {props.tiles.map((tile, index) => <Tile tile={tile} key={index} index={index}/>)}
        </StyledBoard>
    )
}

export default BoardContainer;