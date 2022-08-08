import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        
        input {
            margin: 5px;
            height: 30px;
            padding: 10px;
            font-size: 17px;
            border-radius: 10px;
            border: 1px solid;
            box-shadow: 5px 5px 10px #878686;
        }

        button {
            height: 30px;
            box-shadow: 5px 5px 10px #878686;
        }
    }

    button {
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
        border: 1px solid 
    }
`

export const Botao = styled.button`
    width: 100px;
    height: 30px;
`