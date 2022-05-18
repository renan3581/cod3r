export default function ContadorDisplay (props){

    return (
        <div style={{
            borderRadius:"100px",
            background:'#fff',
            color : '#222',
            width:'100px',
            height:'100px',
            fontSize:'4em',
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'15px' 

            
        }}>
            {props.numero}
        </div>
    )

}