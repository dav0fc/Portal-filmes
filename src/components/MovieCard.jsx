export default function MovieCard(dados) {
    return(
        <>
            {
                dados.map(pegaDados => (
                    <div className="MovieCard">
                        <h3>{pegaDados.titulo}</h3>
                        <img src={pegaDados.imagem_destaque} alt=""/>
                    </div>
                ))
            }
        </>
    )

}