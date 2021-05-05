

const ReservedListing = (props) => {

    return (
        <>
            {props.reservations.map((item) => (
                <div className="space-listing-container" key={item.date}>
                    <div className="space-listing-left">
                        <div className="space-listing-image-overlay-res">
                            <span className="space-listing-date">Reserved for:</span>
                            <span className="space-listing-date">{item.date}</span>
                        </div>
                        <img className="space-listing-image" src={item.space["image"]} alt={item.space["name"]} />
                    </div>
                    <div className="space-listing-right">
                    <span className="space-listing-headline">{item.space["name"]} <span className="space-listing-headline-break">\</span> {item.space["type"]}</span>
                            <span className="space-listing-capacity">{item.space["capacity"]} 
                            { item.space["capacity"] === "1" ? <span className="space-listing-seats"> seat</span> : <span className="space-listing-seats"> seats</span> }</span>
                            <span className="space-listing-description">{item.space["description"]}</span>
                    </div>
                </div>
            ))}
        </>
    )
}


export default ReservedListing