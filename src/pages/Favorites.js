import { Link, useParams ,useLocation} from "react-router-dom"

const Favorites = () => {

    const { type } = useParams()

    const {state} = useLocation()

    return <div>
        Favorites
        <br />

        <Link to="/home">
            Back to home
        </Link>

        <br/>
        type: {type}
    </div>
}

export default Favorites