import React from "react";
import Tile from "./Tile"
import styled from "styled-components";

const StyledBoard = styled.div`
    width: 410px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    border: 5px solid green;
    background: #ADDCAD;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function BoardContainer(props) {
    return (
        <StyledBoard>
            {props.tiles.map((tile, index) => <Tile tile={tile} key={index} index={index} randomizeTile={props.randomizeTile}/>)}
        </StyledBoard>
    )
}

export default BoardContainer;