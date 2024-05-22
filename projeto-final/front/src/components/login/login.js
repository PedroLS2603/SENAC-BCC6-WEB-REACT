import React from "react";
import "./login.css";
import {InputUsuario, Label} from '../styles/inputs'
import {CadastroContainer, FormRow} from '../styles/containers'
import { ButtonCadastro } from "../styles/button";


const Login = () => {
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
            <ButtonCadastro>Entrar</ButtonCadastro>
          </FormRow>
        </CadastroContainer>
    </>
  );
};

export default Login;
