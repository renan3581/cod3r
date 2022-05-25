import { Component } from "react"
import Contador from "../../components/contador"

export default class ContadorPages extends Component{

  

    render(){
        return(
            <>
                <Contador initialValue={100} step = {2}/>
               
            </>
        )
    }
}