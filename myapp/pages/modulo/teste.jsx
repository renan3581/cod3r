//Export default o nome do componente não importa.
import  BlaBla  from "../../components/modulo/funcionais" 

//O nome do componente importa, mas é possivel dar um apelido para ele.
import {Comp2 , Comp3 as BlaBlu, Comp4, Comp5} from "../../components/modulo/funcionais"

export default function teste(){

    return(

        <div>

            <BlaBla/>
            <Comp2/>
            <BlaBlu/>
            <Comp4 msg='- Uhuul'/>
            <Comp5/>
            
        </div>
        
    )

}