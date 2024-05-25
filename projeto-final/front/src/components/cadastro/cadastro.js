import React from "react";
import "./cadastro.css";
import {InputUsuario, Label} from '../styles/inputs'
import {CadastroContainer, FormRow} from '../styles/containers'
import { ButtonCadastro } from "../styles/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      user: "",
      senha: ""
    });
    
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(prevState => ({...prevState, [name]:value}))
    }

    const handleSubmit = async (e) => {
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
          navigate('/')
        }

        setFormData({user: "", senha: "" })
      }
      catch(error){
        console.log(error)
      }
    }
    return (
      <>
      <form onSubmit={handleSubmit}>
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
            <ButtonCadastro type="submit">Cadastrar</ButtonCadastro>
          </FormRow>
        </CadastroContainer>
      </form>
      </>
    );
  };

export default Cadastro;
