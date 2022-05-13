import Subdivisao from './Subdivisao'


export default function Linha(props){


    return props.inverso?
   (
        <div style={{display:'inline-block'}}>
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta/>
            <Subdivisao />
            <Subdivisao preta/>
            <Subdivisao />
            <Subdivisao preta/>
        </div>
    ):(
        <div style={{display:'inline-block'}}>
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
        </div>
    )
}