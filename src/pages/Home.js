import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

    const [favoriteType, setFavoriteType] = useState('food')
    const onInputChange = (e) => {
        const type = e.target.value
        setFavoriteType(type)
    }

    return <div>
        Home
        <br />
        <input placeholder="enter food type" onInput={onInputChange} />
        <br/>
        <Link to={`/favorites/${favoriteType}`} state={{type:favoriteType}}>
            Navigate to favorites
        </Link>
    </div>
}

export default Home