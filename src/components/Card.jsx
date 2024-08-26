import React  from "react";

export default function Card({item}){
    return (
        <section className="card-section">
            <img src={item.imageUrl} className="mount-img" alt="Fuji mount image" />
            <div>
                <div className="location">
                    <i class="fa-solid fa-location-dot" style={{fontSize:'12px'}}></i>
                    <p>{item.location}</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <h2 className="mount-name">{item.title}</h2>
                <p className="travel-data">{item.startDate}-{item.endDate}"</p>
                <p className="mount-description">{item.description}</p>
            </div>

        </section>
    )
}