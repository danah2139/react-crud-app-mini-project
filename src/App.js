import './App.css';
import { Component } from 'react';
import MoviesList from './components/moviesList/MoviesList';
import CreateMovie from './components/createMovie/CreateMovie';
import Spinner from './components/spinner/Spinner';
import axios from 'axios';

class App extends Component {
	state = { isLoading: false, isCreateMovieOpen: false };
	componentDidMount() {}
	handleCreateMovie = () => {
		console.log(this.state.isCreateMovieOpen);
		this.setState((prevState) => {
			return { isCreateMovieOpen: !prevState.isCreateMovieOpen };
		});
	};

	deleteMovie() {}
	editMovie() {}
	render() {
		return (
			<div className="App">
				{this.state.isLoading && <Spinner />}
				<MoviesList />
				<button onClick={this.handleCreateMovie}>Add Movie to the list</button>
				{this.isCreateMovieOpen && <CreateMovie />}
			</div>
		);
	}
}

export default App;
