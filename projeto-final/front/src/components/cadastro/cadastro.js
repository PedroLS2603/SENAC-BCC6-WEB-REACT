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
      tipo: "",
      descricao: "",
      titulo:"",
      entrega_estimada:"",
    });
    
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(prevState => ({...prevState, [name]:value}))
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.tipo || !formData.descricao || !formData.titulo || !formData.entrega_estimada) {
        alert("Por favor, preencha todos os campos.")
        return; 
      }
      try{
        formData.entrega_estimada = ((new Date(formData.entrega_estimada).getTime() / 1000) + 10800).toString()
        console.log(formData)
        const response = await fetch("http://localhost:8000/tarefas/cadastro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if(response.status == 422){
          alert("Tarefa já cadastrada.")
        } else {
          alert("Tarefa cadastrada com sucesso!")
          navigate('/home')
        }

        setFormData({user: "", senha: "" })
      }
      catch(error){
        console.log(error)
      }
    }
    return (
      <>
      <h1>Cadastrar tarefa</h1>
      <form onSubmit={handleSubmit}>
        <CadastroContainer>
          <FormRow>
            <Label>Título</Label>
            <InputUsuario type="text" name="titulo" value={formData.titulo} onChange={handleChange}/>
          </FormRow>
          <FormRow>
            <Label>Tipo</Label>
            <InputUsuario type="text" name="tipo" value={formData.tipo} onChange={handleChange}/>
          </FormRow>
          <FormRow>
            <Label>Descrição</Label>
            <InputUsuario type="text" name="descricao" value={formData.descricao} onChange={handleChange}/>
          </FormRow>
          <FormRow>
            <Label>Data de entrega</Label>
            <InputUsuario type="date" name="entrega_estimada" value={formData.entrega_estimada} onChange={handleChange}/>
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
