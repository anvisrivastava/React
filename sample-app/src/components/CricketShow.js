// function CricketShow({type,key}){
//     return <div>{type}{key}</div>
// }
// export default CricketShow;
// import "./CricketShow.css"
// import { useState } from "react";


import "./CricketShow.css"
import { useState } from "react";
import Dravid from "./assets/Dravid.png";
import Kohli from "./assets/Kohli.png";
import Dhoni from "./assets/Dhoni.png";
import Rohit from "./assets/Rohit.png";
import Sachin from "./assets/Sachin.png";
import like from "./assets/like.png";
const imgMap = {
    Dravid,
    Kohli,
    Rohit,
    Sachin,
    Dhoni
}
function CricketShow({type}){
    const[likes, setLikes] = useState(0)
    const circketHandleClick = () => {
        setLikes(likes + 1);
    }
    return (
    <div className="cricketshow" onClick={circketHandleClick}>
        <img className = "cricketer" alt = "cricketer" src={imgMap[type]} />
        <img className = "likesClass" alt = "likes" src={like} style={{width: 10 + 10 * likes}} />
    </div>
    )
}
export default CricketShow
