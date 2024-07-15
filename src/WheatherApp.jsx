import SearchBox from "./SearchBox"
import InfoBox from './InfoBox'
import { useState } from "react";
const WheatherApp = () => {
    const [wheatherInfo, setWheatherInfo] =useState({
        city: "sindhuli",
        feelsLike: 27.6,
        temp: 29.12,
        tempMin: 29.12,
        tempMax: 29.12,
        humidity: 26,
        wheather: "cloud",
    });
    let updateInfo=(newInfo) =>{
        setWheatherInfo(newInfo);
    }
  return (
    <div>
       <div style={{textAlign:"center"}}>
        <h1>Wheather App By Mr.Raju</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox Info={wheatherInfo} />
       </div>
    </div>
  )
}

export default WheatherApp
