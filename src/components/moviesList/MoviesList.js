import { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import MovieDetail from '../movieDetail/MovieDetail';
import './moviesList.css';

class MoviesList extends Component {
	renderMovie() {
		return this.props.movies.map((movie) => {
			return (
				<Fragment key={movie.id}>
					<div className="card">
						<div
							onClick={() => this.props.removeMovie(movie.id)}
							className="delete"
						>
							<FontAwesomeIcon icon={faTimesCircle} size="2x" />
						</div>
						<MovieDetail movie={movie} />
					</div>
				</Fragment>
			);
		});
	}

	render() {
		return <div className="movies-list">{this.renderMovie()}</div>;
	}
}
export default MoviesList;
