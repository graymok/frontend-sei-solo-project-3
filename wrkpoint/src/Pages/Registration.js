import RegisterLoginForm from '../Components/RegisterLoginForm'


const Registration = (props) => {
    return (
        <div className="registration-container">
            <RegisterLoginForm type={props.type} />     
        </div>
    )
}

export default Registration