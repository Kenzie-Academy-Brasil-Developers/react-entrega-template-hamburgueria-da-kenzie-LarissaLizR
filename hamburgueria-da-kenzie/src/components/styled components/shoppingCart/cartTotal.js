import styled from "styled-components";

const SectionTotal = styled.div`

        background: #F5F5F5;

        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 2px solid #E0E0E0;

        height: 130px;

        border-bottom-left-radius: 5px ;
        border-bottom-right-radius: 5px;

        
        

    div{
        display: flex;
        align-items: center;
        gap: 270px;
    }

    h3{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: #333333;
    }
    span{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: #828282;
    }
    button{
        width: 343px;
        height: 60px;

        background: #E0E0E0;

        border: 2px solid #E0E0E0;
        border-radius: 8px;
        

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: #828282;
        cursor: pointer;
    }

    @media (min-width: 769px) {

    margin-top: 26px;
    
}
`

export default SectionTotal