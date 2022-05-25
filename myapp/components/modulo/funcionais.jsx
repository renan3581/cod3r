export default function () { //Função anônima.
    return <h2>Comp #1</h2>
}

export const Comp2 = function() {
    return <h2>Comp #2</h2>
}

export function Comp3(){
    return <h2>Comp #3</h2>
}

const Comp4 = props /*ou () */ =>  <h2>Comp #4 {props.msg}</h2>  //Return implicito, se for somente uma linha as {} não são necessárias.

const Comp5 = () =>{
    return(
        <>
            <h2>Comp #5</h2>
        </>
    )
}

export {Comp4, Comp5} //Exporta mais de um componente.