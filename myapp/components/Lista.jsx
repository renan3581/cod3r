export default function lista(props){
    //props.children é o que esta sendo passado dentro daquele componente.
    console.log(props.children)
   
    return ( 
        <div>
            <h1>Lista de Algo</h1>
            <ul> 
                {props.children} 
            </ul>
        </div>
    )
}