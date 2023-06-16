import './style.scss'

const Button = (props) =>{
    const {backgroundColor,text,clickBtn,textColor,height} = props
    return(
        <button style={{backgroundColor:backgroundColor,height:`${height}px`}} onClick={()=>clickBtn()}>
            <p style={{color:textColor}}>{text}</p>
        </button>
    )
}

export default Button;