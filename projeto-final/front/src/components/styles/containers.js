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

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d31af;
  padding: 20px;
  border-radius: 10px;
  min-height: 25vh;
  width: 20vw;
  justify-content: space-between;
`

export const Card = styled.div`
  &:hover ${CardContent} {
    padding-left: 50px;
    padding-right: 50px;
    min-height: 25vh;
    transition: .15s;
    cursor: pointer;
  }
`;



export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    align-items: center
    margin-bottom: 15px;
    `;

export const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    padding-top: 40px;
    border-radius: 10px;
    background-color: #c4c0c0;
    width: 500px;
    justify-self: center;
    min-height: 50vh;
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