import { NavLink } from 'react-router-dom'

const SpaceListing = (props) => {
    return (
        <>
            {props.spaces.map((space) => (
                <NavLink className="space-listing-nav" key={space.id} exact to={`/spaces/${space.id}`}>
                    <div className="space-listing-container">
                        <div className="space-listing-left">
                            <img className="space-listing-image" src={space.image} alt={space.name} />
                        </div>
                        <div className="space-listing-right">
                            <span className="space-listing-headline">{space.type}-{space.name}</span>
                            <span className="space-listing-headline">{space.type}-{space.name}</span>
                        </div>
                    </div>
                </NavLink>
            ))}

        </>
    )
}

export default SpaceListing