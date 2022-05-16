import If from "../../components/If"

export default function condicional1(){
    
    const numero = 4

    

    return (

        <div> 
            <If teste ={numero % 2 === 0}> <h1>O {numero} é par</h1></If> 

            <If teste ={numero % 2 !== 0}> <h1>O {numero} é impar</h1></If>
        </div>
        
    )
}