import { Container, Card } from "../styles/Containers"
import { ImagemLivro } from "../styles/Imagens";
import { Subtitulo, Titulo } from "../styles/Texts";

const Resultado = ({livros}) => {
    if(livros.length === 0) {
        return <p>Nenhum Livro Encontrado</p>
    }

    return(
        <Container>
            {
                livros.map((livro) => {
                    return (
                        <Card>
                            <Titulo> {livro.title} </Titulo>
                            <ImagemLivro src={livro.imagem} alt={livro.title}/>
                            <Subtitulo> {livro.year} </Subtitulo>
                        </Card>
                    )
                })
            }
        </Container>
    );
}


export default Resultado;