import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: ${props => props.size || "32px"};
  color: ${props => props.color || "dark-gray"};
  line-weight: ${props => props.weight || "1.5rem"};
  `;

export const Subtitulo = styled.h2`
    font-size: ${props => props.size || "24px"};
    color: ${props => props.color || "white"};
    line-weight: ${props => props.weight || "1.5rem"};
    `;

export const Texto = styled.p`
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "black"};
    line-weight: ${props => props.weight || "1.5rem"};
    font-weight: 400;
    `;

export const Input = styled.input`
    width: 600px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px
    background-color: #fff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    `;

export const Label = styled.label`
    font-size: 19px;
    color: black;
    font-weight: bold;
    padding: 8px;
    `;

export const InputUsuario = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px
    background-color: #fff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    `;





