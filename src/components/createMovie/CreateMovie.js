import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import './createMovie.css';
class CreateMovie extends Component {
	state = {};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state);
	};
	handleChange = (e) => {
		console.log(e.target);
		if (e.target.name === 'poster') {
			this.setState({ [e.target.name]: e.target.files[0] });
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}

		// console.log(this.state);
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<label className="title-header">Add Movie To the List</label>
				<label>
					Title:
					<input
						value={this.state.title}
						onChange={this.handleChange}
						type="text"
						name="title"
					/>
				</label>
				<label>
					Genere:
					<input
						type="text"
						name="genre"
						value={this.state.genre}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Release Date:
					<input
						value={this.state.releaseDate}
						onChange={this.handleChange}
						type="date"
						name="releaseDate"
					/>
				</label>
				<label>
					Diractor:
					<input
						value={this.state.director}
						onChange={this.handleChange}
						type="text"
						name="diractor"
					/>
				</label>
				<label>
					Plot:
					<textarea
						value={this.state.plot}
						onChange={this.handleChange}
						rows="4"
						cols="50"
						name="plot"
					/>
				</label>
				<div className="button">
					<label htmlFor="single">
						Add Poster
						<FontAwesomeIcon
							icon={faImage}
							color="rgb(42, 42, 102)"
							size="6x"
							cursor="pointer"
						/>
					</label>
					<input name="poster" type="file" onChange={this.handleChange} />
				</div>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default CreateMovie;
