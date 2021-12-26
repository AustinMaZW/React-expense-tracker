import "./Card.css"

const Card = (props) =>{
    const classes = 'card ' + props.className;      //sets so any other classes applied on this component will be rendered too
    return <div className={classes}>{props.children}</div>
}

export default Card;