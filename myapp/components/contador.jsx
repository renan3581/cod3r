import { Component } from "react";

export default class Contador extends Component{

    constructor(props){
        
        super()
        this.state = {
    
            number:props.initialValue ?? 0, //Valor default caso não seja passado um valor inicial.
            step:props.step ?? 1 //Valor default caso não seja passado um passo.
    
        }

    }

    /* //State fora do construtor.
        state = {

            number:this.props.initialValue ?? 0, //Valor default caso não seja passado um valor inicial.
            step:this.props.step ?? 1 //Valor default caso não seja passado um passo.

        }
    */

    increment = () => {

        this.setState({
            number:this.state.number + this.state.step
        })

    }


    decrement = () => {

        this.setState({
            number:this.state.number - this.state.step
        })

    }


    changeHandler = (ev) =>{

        this.setState({
            step: +ev.target.value //+ converte para number.
        })

    }


    renderForm(){

        return(

            <>
                <input type="number" min={1} max = {1000} value={this.state.step} onChange = {this.changeHandler}/>
                <button onClick={this.increment}>Incrementar</button>
                <button onClick={this.decrement}>Decrementar</button>
            </>

        )

    }


    render(){ //Renderiza o componente.

        return(

            <div>
                <h1>Contador. (Usando classes)</h1>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>

        )

    }
}