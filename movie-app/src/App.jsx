import { useEffect, useState } from 'react'
import Search from './components/Search'
import MovieCard from './components/MovieCard';


const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {

  const [ErrorMessage, setErrorMessage] = useState(null)
  const [SearchTerm, setSearchTerm] = useState('');
  const [MovieList, setMovieList] = useState([])
  const [isLoading, setisLoading] = useState(false)


  const fetchMovies = async () => {
    setisLoading(true);
    setErrorMessage('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Error fetching movies");
      }
      
      const data = await response.json();

      if(data.response === "False"){
        setErrorMessage(data.error || 'Unknown error occurred');
        setMovieList([]);
        return
      }
      setMovieList(data.results || []);
      console.log(data);
  }
    catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

 
  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src='./hero-img.png' alt='Hero Baner'></img>
          <h1>Find <span className='text-gradient'>Movies </span>You'll Enjoy Without The Hassle</h1>
        </header>
        <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
        <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>
          {isLoading ? (
            <p className='text-white'>Loading...</p>
          ) : ErrorMessage ? (
          <p className='text-red-500'>{ErrorMessage}</p>
          ) : (
            <ul>
              {MovieList.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>

      </div>
    </main>
  )
}

export default App;