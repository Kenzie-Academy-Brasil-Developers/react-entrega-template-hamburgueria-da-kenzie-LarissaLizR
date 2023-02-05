import styled from "styled-components";

const HeaderStyled = styled.header`

    min-width: 424px;
    height: 139px;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #F5F5F5;

    @media (min-width: 769px) {
        
        max-width: 1600px;
        flex-direction: row;
        justify-content: space-around;
        

    }

`

export default HeaderStyled