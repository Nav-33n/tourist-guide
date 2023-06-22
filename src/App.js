import Header from "./component/Header";
import react from "react";
import Main from "./component/Main";
import data from "./data";

export default function App(){
    const datas = data.map(item => {
        return (
            <Main 
                title={item.title}
                location={item.location}
                map={item.googleMapsUrl}
                sDate={item.startDate}
                eDate={item.endDate}
                descript={item.description}
                img={item.imageUrl}
            />
        )
    })
    return(
        <div className="container">
            <Header />
            {datas}
        </div>
    )
}