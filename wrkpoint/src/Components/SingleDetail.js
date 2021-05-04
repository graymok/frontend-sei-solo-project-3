const SingleDetail = (props) => {
    return (
        <div className="single-container">
            <div className="single-header-text-box">
                <span className="single-header-headline">{props.space.name} <span className="single-header-headline-break">\</span> {props.space.type}</span>
                
                { props.space.workstyle === props.user.workstyle ? 
                <span className="single-header-workstyle">This work space is recommended for you: <span className="single-header-workstyle-type">{props.user.workstyle}</span></span>
                :
                <span className="single-header-workstyle">This work space is ideal for: <span className="single-header-workstyle-type">{props.space.workstyle}</span></span>    
                }
                
                <div className="single-reservations-header">
                    <span className="single-header-workstyle-detail">{props.space.description}</span>
                    <span className="single-reservations-headline">Reserve this space:</span>
                </div>
            </div>
            <div className="single-header-overlay"></div>
            <img className="single-header-background" alt="work-tools" src={props.space.image} /> 
        </div>
    )
}


export default SingleDetail