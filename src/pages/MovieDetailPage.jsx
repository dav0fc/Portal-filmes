import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    return(
        <>
        <h1>Movie Detail Page</h1>
        <p>O id do filme é: {id}</p>
        </>
    )
}
const {id} = useParams()