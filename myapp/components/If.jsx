export default function If(props){
    if(props.teste){ //Se o teste for verdadeiro, então renderiza o elemento.
        return props.children //Retorna o elemento passado como filho.
        
    }else{
        return null
    }
}
