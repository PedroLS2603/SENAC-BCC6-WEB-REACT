import React from "react";
import { Titulo, Label, InputUsuario } from "../styles/Texts";
import { ButtonCadastro } from "../styles/Button";
import { CadastroContainer, ContainerCaixa, FormRow, CenterDiv } from "../styles/Containers";
import "./cadastro.css";

const Cadastro = () => {
  return (
    <CenterDiv>
      <Titulo color="white">Bem vindo, faça seu Cadastro</Titulo>
      <ContainerCaixa>
        <form>
          <CadastroContainer>
            <FormRow>
              <Label>Nome:</Label>
              <InputUsuario type="text" name="nome" />
            </FormRow>
            <FormRow>
              <Label>Email:</Label>
              <InputUsuario type="email" name="email" />
            </FormRow>
            <FormRow>
              <Label>Senha:</Label>
              <InputUsuario type="password" name="senha" />
            </FormRow>
            <ButtonCadastro type="submit">Cadastrar</ButtonCadastro>
          </CadastroContainer>
        </form>
      </ContainerCaixa>
    </CenterDiv>
  );
};

export default Cadastro;
