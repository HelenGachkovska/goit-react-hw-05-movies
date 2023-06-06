import { Link } from "react-router-dom";

function Movies() {
    return <><p>Movies</p>
        <Link to={'/movies/:movieId'}>До уточнень</Link>
    </>
}
export default Movies;