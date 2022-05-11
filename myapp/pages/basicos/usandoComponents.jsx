import Titulo from "../../components/Titulo"

export default function usandoComponents() {
    return (
        <>
            <Titulo 
                principal = "Usando Component"
                secundario = "Component gerado"
                grande
            /> 

            <br/>

            <Titulo 
                principal = "Usando outro Component"
                secundario = "Component gerado"
                grande = {true}
            /> 

            <br/>

            <Titulo 
                principal = "Alerando Component"
                secundario = "Component alterado"
            /> 
        </>
    )   
}