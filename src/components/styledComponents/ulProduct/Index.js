import styled from "styled-components";

 const CardUl = styled.ul `
    gap: 20px;
    width: 100%;
    height: 361px;
    padding: 10px;

    display: flex;

    overflow-x: scroll;

    @media (min-width: 769px) {
    width: 950px;
    height: 800px;

    flex-wrap: wrap;
    flex-direction: column;

    overflow-x: auto;
    }
`


export default CardUl