import { useOutletContext, useParams } from "react-router-dom"
const PlayerDetail = () => {
    const {id} = useParams()
    const playersData = useOutletContext()
    return(
           <div className ="playerContainer">
            <div classnmae ="imgContainer">
            <img src ={playersData[id -1].img} />
            <h1>{playersData[id-1].rank}</h1>
            <h1>{playersData[id-1].Description}</h1>
        </div>
        </div>
    )
}
export default PlayerDetail