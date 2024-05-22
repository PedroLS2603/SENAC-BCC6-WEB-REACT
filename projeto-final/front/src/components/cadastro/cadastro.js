import React from "react";
import "./cadastro.css";
import {InputUsuario, Label} from '../styles/inputs'
import {CadastroContainer, FormRow} from '../styles/containers'
import { ButtonCadastro } from "../styles/button";

const Cadastro = () => {
  return (
    <>
        <CadastroContainer>
          <FormRow>
            <Label>Usuário</Label>
            <InputUsuario/>
          </FormRow>
          <FormRow>
            <Label>Senha</Label>
            <InputUsuario/>
          </FormRow>
          <FormRow>
            <ButtonCadastro>Cadastrar</ButtonCadastro>
          </FormRow>
        </CadastroContainer>
    </>
  );
};

export default Cadastro;
