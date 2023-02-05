import styled from "styled-components";


 const InputHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 382px;
    height: 60px;
 
    margin-top: 10px;
    padding: 0px 10px 0px 0px;

    background: #FFFFFF;

    border: 2px solid #E0E0E0;
    border-radius: 8px;
    

    input{
    width: 280px;
    height: 50px;
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    }
    input::placeholder{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        padding-left: 20px;

        color: #E0E0E0;
    }

`

export default InputHeader