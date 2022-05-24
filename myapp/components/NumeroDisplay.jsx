export default function NumeroDisplay (props){

    return (
        <div style={{
            borderRadius:"100px",
            background:'#222',
            color : '#fff',
            width:'100px',
            height:'100px',
            fontSize:'4em',
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'15px' ,
            marginRight:'5px',
            marginLeft:'5px',
            
            
        }}>
            {props.numero}
        </div>
    )

}