// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  console.log(actionMovies)
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="action-movies-container">
        <h1 className="movie-heading">Action Movies</h1>
        {actionMovies.map(eachItem => (
          <MoviesSlider Movies={eachItem} />
        ))}
      </div>
    </div>
  )
}
export default PrimeVideo
