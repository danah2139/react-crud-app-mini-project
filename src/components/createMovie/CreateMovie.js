import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import './createMovie.css';

class CreateMovie extends Component {
	render() {
		return (
			<form>
				<label>
					Title:
					<input type="text" name="title" />
				</label>
				<label>
					Genere:
					<input type="text" name="genere" />
				</label>
				<label>
					Release Date:
					<input type="date" name="relaese-date" />
				</label>
				<label>
					Diractor:
					<input type="string" name="diractor" />
				</label>
				<label>
					Plot:
					<textarea rows="4" cols="50" name="plot" />
				</label>
				<div className="button">
					<label htmlFor="single">
						<FontAwesomeIcon
							icon={faImage}
							color="rgb(42, 42, 102)"
							size="10x"
							cursor="pointer"
						/>
					</label>
					<input type="file" id="single" />
				</div>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default CreateMovie;
