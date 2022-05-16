export default function SomentePar(props){
    
    const numeroPar = props.numero % 2 === 0;

    return numeroPar? <div>{props.numero}</div> : null ;

    /*  if(props.numero % 2 === 0){
        return (<span>{props.numero} é par <br/></span>)
    }else{
        return null
    } */

}
    