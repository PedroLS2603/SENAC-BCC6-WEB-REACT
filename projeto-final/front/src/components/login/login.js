import React from "react";
import "./login.css";
import {InputUsuario, Label, Link} from '../styles/inputs'
import {CadastroContainer, FormRow} from '../styles/containers'
import { ButtonCadastro } from "../styles/button";
import { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user: "",
    senha: ""
  });
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    // Atualizar o estado do formulário com os dados do input
    setFormData(prevState => ({...prevState, [name]:value}))
  }

  const handleLogar = async (e) => {
    // Evitar o comportamento padrão do formulário
    e.preventDefault();
    if (!formData.user || !formData.senha) {
      alert("Por favor, preencha todos os campos.")
      return; 
    }
    try{
      const response = await fetch("http://localhost:8000/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if(response.status == 204){
        alert("Usuário não cadastrado")
      } else {
        navigate('/home')
      }

      setFormData({user: "", senha: "" })
    }
    catch(error){
      console.log(error)
    }
  }

  const handleCadastrar = async (e) => {
    e.preventDefault();
      if (!formData.user || !formData.senha) {
        alert("Por favor, preencha todos os campos.")
        return; 
      }
      try{
        const response = await fetch("http://localhost:8000/usuario/cadastro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if(response.status == 422){
          alert("Usuário já cadastrado.")
        } else {
          alert("Usuário cadastrado com sucesso!")
        }

        setFormData({user: "", senha: "" })
      }
      catch(error){
        console.log(error)
      }
  }

  return (
    <>
    <form>
        <CadastroContainer>
          <FormRow>
            <Label>Usuário</Label>
            <InputUsuario type="text" name="user" value={formData.user} onChange={handleChange}/>
          </FormRow>
          <FormRow>
            <Label>Senha</Label>
            <InputUsuario type="text" name="senha" value={formData.senha} onChange={handleChange}/>
          </FormRow>
          <FormRow>
            <ButtonCadastro onClick={handleCadastrar}>Cadastrar</ButtonCadastro>
            <ButtonCadastro onClick={handleLogar}type="submit">Entrar</ButtonCadastro>
          </FormRow>
        </CadastroContainer>
      </form>
    </>
  );
};

export default Login;
