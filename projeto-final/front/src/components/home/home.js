import {React, useState, useEffect}from "react";
import "./home.css";
import { Card, CardContent } from "../styles/containers";
import { Link } from "../styles/inputs";


const Home = () => {
    const [tarefas, setTarefas] = useState([]);
    useEffect(() => {
        const getTarefas = async () => {
            try{
                const response =  await fetch('http://localhost:8000/tarefas');
                const data = await response.json();
                setTarefas(data);

            } catch(error){
                console.log(error)
            }

        }
        getTarefas();
    }, []);


  return (
    <>  
    <div className="home-container">
        <a href="/"><h1>Sair</h1></a>
        <div className="home-grid-cards">
        { 
                    tarefas.map((tarefa, index) => {
                        return (
                            <Card key={index}>
                                <CardContent>
                                    <h1> {tarefa.titulo} </h1>
                                    <h2> {tarefa.tipo} </h2>
                                    <h3> {tarefa.descricao} </h3>
                                    <h3> {tarefa.entrega_estimada} </h3>
                                </CardContent>
                            </Card>
                        )
                    })
        }
        </div>
    </div>
        
    </>
  );
};

export default Home;
