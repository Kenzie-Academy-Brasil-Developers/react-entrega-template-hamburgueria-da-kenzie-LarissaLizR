import styled from "styled-components";

const Adding = styled.div`
        width: 384px;
        height: 128px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      
        background: #F5F5F5;
        border-radius: 0px 0px 5px 5px;

    img{
        width: 70px;
        height: 70px;
        background-color: #E0E0E0;
        border-radius: 5px;
    }
    h3{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: #333333;
    }
    h4{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;

        color: #828282;
    }

    button{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    
        color: #BDBDBD;
        border: none;
        background-color: transparent;
        cursor: pointer;

    }

    @media (min-width: 769px) {

    margin-top: 26px;
    
}

`

export default Adding