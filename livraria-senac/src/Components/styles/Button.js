import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px;
    background-color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    `;

export const Botao = styled.button`

    background-color: white;
    height: 40px;
    width: 100px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(2px);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    `;


export const ButtonCadastro = styled.button`
    width: 110px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px;
    background-color: #000000;
    cursor: pointer;
    font-size: 19px;
    color: white;
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.3s ease; /* Adicione essa linha para o efeito de transição */

    &:hover {
        background-color: #333; /* Cor diferente quando o mouse estiver sobre o botão */
    }
`;
