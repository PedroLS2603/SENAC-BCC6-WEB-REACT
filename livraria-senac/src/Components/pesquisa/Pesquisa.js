import { useState } from "react";
import { Container } from "../styles/Containers"
import { Titulo, Texto, Input } from "../styles/Texts"
import { Button } from "../styles/Button"
import Resultado from "./resultado";

const Pesquisa = () => {
    const [termoBusca, setTermoBusca] = useState('');
    const [livros, setLivros] = useState([]);

    const handleSubmit = async (e) => {
        // Evita que a página recarregue
        e.preventDefault();
        try{
            const resposta = await fetch(`http://localhost:8000/buscarLivrosPorTitulos/${termoBusca}`);
            const dados = await resposta.json();
            setLivros(dados);
            console.log(dados)
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <Container direction='column'>
            <Titulo>Encontre seu próximo livro</Titulo>
            <Texto color='white'>Explore por titulo, o livro desejado</Texto>
            <Input
                placeholder="  Digite o titulo do livro"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
            />
            <Button onClick={handleSubmit}>Pesquisar</Button>

            <Resultado livros={livros}/>
                
        </Container>
    )
}

export default Pesquisa;