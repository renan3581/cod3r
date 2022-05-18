import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <h1>Família {props.familia}</h1>
           <Filho nome="Renan"  familia = {props.familia}/>
           <Filho {...props} nome="Andreza" />
           
        </div>
    )
}