export default function lista1() {
     
    function geraLista(maximo = 10) { // = 10 é o valor padrão.
        const lista = []
        
        for (let i = 0; i <=maximo; i++) {
          lista.push(<span key={`numero + ${i}`}>{i}, </span>)
            
        } 
        
        return lista
    }

    return(
        <>
            <div>
                <h1>Lista</h1>
                {geraLista()}
            </div>

            <div>
                <h1>Lista 2</h1>
                {geraLista(20)}
            </div>
        </>
    )
}