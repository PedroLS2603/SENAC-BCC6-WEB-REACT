import { useEffect, useState } from "react";
import { ImagemLivro } from "../styles/Imagens";
import { Subtitulo, Titulo } from "../styles/Texts";
import { Container, Card } from "../styles/Containers";

const MaisBuscados = () => {
    const [livros, setLivros] = useState([]);
    useEffect(() => {
        const maisBuscados = async () => {
            try{
                const response =  await fetch('http://localhost:8000/livros');
                const data = await response.json();
                setLivros(data.slice(0,3));

            } catch(error){
                console.log(error)
            }

        }
        maisBuscados();
    }, []);




    return (
        <>
            <h1>Mais procurados</h1>
            <Container>
                {
                    livros.map((livro, index) => {
                        return (
                            <Card key={index}>
                                <Titulo> {livro.title} </Titulo>
                                <ImagemLivro src={livro.imagem} alt={livro.title}/>
                                <Subtitulo color = "dark-gray"> {livro.year} </Subtitulo>
                            </Card>
                        )
                    })
                }
            </Container>
        </>
    );


}   

export default MaisBuscados;