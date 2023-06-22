
export default function Main(data){
    console.log(data)
    return(
        <div className="main-container">
            <img src={data.img}></img>
            <div className="text-container">
                <div className="location">
                <i class="fa-solid fa-location-dot"></i>
                <label>{data.location}</label>
                <a href={data.map}>View on Google Maps</a>
                </div>
                <h1>{data.title}</h1>
                <h3>{data.sDate} - {data.eDate}</h3>
                <p>{data.descript}</p>
            </div>
        </div>
    )
}