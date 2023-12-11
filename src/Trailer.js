import { useParams,useNavigate } from "react-router-dom"
import Moviedata from "./Moviedata"
import Filter from "./Filter"
const Trailer=()=>{

    const {IdMovie}=useParams()

    const movie=Moviedata.find((el)=>el.id=== Number(IdMovie))
    const navigate=useNavigate()
    const redirection=()=>{
navigate("/")
    }
    return(
        <>
      
<iframe width="853" height="480" src={movie.trailer} title="Tesla Cybertruck DRAG RACE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p style={{ fontSize: '14px', color: 'white' }}>{movie.description}</p>
       
        <button className="Add-btn" onClick={redirection} >Home</button>

        </>
    )
}


    

export default Trailer

