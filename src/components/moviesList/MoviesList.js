import { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

import MovieDetail from '../movieDetail/MovieDetail';
import './moviesList.css';

class MoviesList extends Component {
	state = { currentEdit: '' };
	renderMovie() {
		return this.props.movies.map((movie) => {
			return (
				<Fragment key={movie.id}>
					<div className="card">
						{!this.props.isEditOpen && (
							<div
								onClick={() => this.props.removeMovie(movie.id)}
								className="delete"
							>
								<FontAwesomeIcon icon={faTimesCircle} size="2x" />
							</div>
						)}

						<MovieDetail
							movie={movie}
							currentEdit={this.state.currentEdit}
							onFormSubmit={this.props.editMovie}
							isEditOpen={this.props.isEditOpen}
						/>
						{!this.props.isEditOpen && (
							<div
								onClick={() => {
									this.setState({ currentEdit: movie.id });
									this.props.openEdit(true);
								}}
								className="edit"
							>
								<FontAwesomeIcon icon={faEdit} size="2x" />
							</div>
						)}
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
