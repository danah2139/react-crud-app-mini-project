import './App.css';
import { Component } from 'react';

import API from './api';
import MoviesList from './components/moviesList/MoviesList';
import CreateMovie from './components/createMovie/CreateMovie';
import Spinner from './components/spinner/Spinner';

class App extends Component {
	state = {
		isLoading: false,
		isCreateMovieOpen: false,
		movies: null,
		selectedMovie: null,
	};
	async componentDidMount() {
		this.setState({ isLoading: true });
		const response = await API.get('movies');
		this.setState({ movies: response.data });
		this.setState({ isLoading: false });
		// console.log(this.state.movies);
	}
	handleCreateMovie = () => {
		this.setState((prevState) => {
			return { isCreateMovieOpen: !prevState.isCreateMovieOpen };
		});
	};
	createMovie = async (movie) => {
		//console.log('hi', movie);
		const { data } = await API.post('movies', movie);
		this.setState((prevState) => {
			return { movies: [...prevState.movies, data] };
		});
		this.setState({ isCreateMovieOpen: false });
	};
	deleteMovie = async (id) => {
		await API.delete(`/movies/${id}`);
		const data = this.state.movies.filter((el) => el.id !== id);
		this.setState({ movies: data });
	};
	editMovie = async (id, value) => {};
	render() {
		return (
			<div className="App">
				{this.state.isLoading && <Spinner />}
				{this.state.movies && (
					<MoviesList
						removeMovie={this.deleteMovie}
						movies={this.state.movies}
					/>
				)}
				<button onClick={this.handleCreateMovie}>Add Movie to the list</button>
				{this.state.isCreateMovieOpen && (
					<CreateMovie onFormSubmit={this.createMovie} />
				)}
			</div>
		);
	}
}

export default App;
