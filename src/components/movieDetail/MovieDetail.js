import { Component } from 'react';
import './movieDetail.css';
import createMovie from '../createMovie/CreateMovie';

class MovieDetail extends Component {
	state = {};
	handleChange = (e) => {
		console.log(e.target);
		this.setState({ [e.target.name]: e.target.value });

		// console.log(this.state);
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		console.log(this.props.currentEdit);
		this.setState({ id: this.props.currentEdit }, () => {
			this.props.onFormSubmit(this.state);
		});
	};
	render() {
		const { movie, currentEdit } = this.props;
		return (
			<div>
				{!this.props.isEditOpen ? (
					<div className="card-content">
						<h2>{movie.title}</h2>
						<p>Genre: {movie.genre}</p>
						<p>Release Date: {movie.releaseDate}</p>
						<img src={movie.poster} alt={movie.title} />
						<p>Director: {movie.director}</p>
						<p>Rated: {movie.rated}</p>
						<p>Description: {movie.plot}</p>
					</div>
				) : currentEdit === movie.id ? (
					<form onSubmit={this.onFormSubmit}>
						<label>
							Title:
							<input
								value={this.state.title}
								placeholder={movie.title}
								onChange={this.handleChange}
								type="text"
								name="title"
							/>
						</label>
						<label>
							Genere:
							<input
								value={this.state.genre}
								type="text"
								name="genre"
								placeholder={movie.genre}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							Release Date:
							<input
								placeholder={movie.releaseDate}
								onChange={this.handleChange}
								type="date"
								name="releaseDate"
								value={this.state.releaseDate}
							/>
						</label>
						<label>
							Diractor:
							<input
								value={this.state.director}
								placeholder={movie.director}
								onChange={this.handleChange}
								type="text"
								name="diractor"
							/>
						</label>
						<label>
							Plot:
							<textarea
								value={this.state.plot}
								placeholder={movie.plot}
								onChange={this.handleChange}
								rows="2"
								cols="50"
								name="plot"
							/>
						</label>
						<div className="button">
							<label htmlFor="single">Poster</label>
							<input
								name="poster"
								value={this.poster}
								placeholder={movie.poster}
								type="text"
								onChange={this.handleChange}
							/>
						</div>
						<input type="submit" value="Update" />
					</form>
				) : null}
			</div>
		);
	}
}
export default MovieDetail;
