import React from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../config';


const Home = () => {

    const [trendings, setTrendings] = React.useState([]);

    React.useEffect(() => {
        getTrendingMovies()

    }, []) ;

    const getTrendingMovies = async () => {
        const res = await axios.get(`${BASE_URL}/trending/movie/week`, { params:{ api_key: API_KEY}} );
         setTrendings(res.data.results)
    }

    return (
        <div>
            <div className="mt-2 textcard bg-info p-2">Trending Now</div>
        </div>
    )


}

export default Home;
