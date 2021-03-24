import './movieDetail.css';

const MovieDetail = ({ movie }) => {
	return (
		<div className="card-content">
			<h2>{movie.title}</h2>
			<p>Genre: {movie.genre}</p>
			<p>Release Date: {movie.releaseDate}</p>
			<img src={movie.poster} alt={movie.title} />
			<p>Director: {movie.director}</p>
			<p>Rated: {movie.rated}</p>
			<p>Description: {movie.plot}</p>
		</div>
	);
};
export default MovieDetail;
