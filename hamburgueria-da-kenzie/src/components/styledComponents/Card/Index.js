import styled from "styled-components";

export const DivImg = styled.div`
    width: 300px;
    height: 160px;

    background: #F5F5F5;

`

export const CardProduct = styled.li `
    width: 300px;
    height: 324px;
    padding-bottom: 10px;

    background: #FFFFFF;

    border: 2px solid #E0E0E0;
    border-radius: 5px;

    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;

    div{
        
        
    }

    img{
        width: 177px;
        height: 177px;
        display: flex;
        margin: 0 auto;
    
    }
    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        margin-left: 10px;

        color: #333333;
    }
    p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        margin-left: 10px;


        color: #828282;
    }
    h3{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        margin-left: 10px;

        color: #27AE60;
    }

`