const repeticao1 = () => {
    const listaAprovados = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Elisa'];
    
    const renderLista = () => {

        return listaAprovados.map((nome, index) => {
            return <li key={index}>{nome}</li>
        });
    }
  
    /* Outra forma de fazer.
    const renderLista = () => {
        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={`numero + ${i}`} >{listaAprovados[i]}</li>)

        }

        return itens
    } */

  
    return (
            <ul>
                {renderLista()}
            </ul>
    );
}

export default repeticao1;



