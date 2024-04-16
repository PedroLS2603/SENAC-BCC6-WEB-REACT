import { Form } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  height: 50px;
  background-color: white;
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: 100%;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 15px;
    `;

export const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    padding-top: 40px;
    border-radius: 10px;
    background-color: #c4c0c0;
    width: 500px;
`;


export const ContainerCaixa = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: 100%;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

export const CenterDiv = styled.div`
  margin-top: 10rem;
`;