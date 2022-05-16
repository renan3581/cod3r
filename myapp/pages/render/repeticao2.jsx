
import lista from '../../data/listaProdutos';

export default function repeticao2(){

    const style = {border:'1px solid black'}


    function renderizarLinhas(){

        return lista.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td style={style}>{produto.nome}</td>
                    <td style={style}>{produto.id}</td>
                    <td style={style}>{produto.preco}</td>
                </tr>
            )
        });
                
    }


    return (

        <table style={{border:'1px solid black'}}> 
        
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Código</th>
                    <th>Preço</th>
                </tr>
            </thead>

            <tbody style={style}>
                {renderizarLinhas()}
            </tbody>
            
        </table>

    );
}