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
		isEditOpen: false,
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
			return {
				isCreateMovieOpen: !prevState.isCreateMovieOpen,
			};
		});
	};

	openEdit = (bool) => {
		this.setState({ isEditOpen: { bool } });
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
		const data = this.state.movies.filter((movie) => movie.id !== id);
		this.setState({ movies: data });
	};
	editMovie = async (newMovie) => {
		console.log(newMovie);
		const { data } = await API.put(`movies/${newMovie.id}`, newMovie);
		const index = this.state.movies.findIndex(
			(movie) => movie.id === newMovie.id
		);
		const newMovies = [...this.state.movies];
		newMovies[index] = data;
		this.setState({ movies: newMovies });
		this.setState({ isEditOpen: false });
	};
	render() {
		return (
			<div className="App">
				{this.state.isLoading && <Spinner />}
				{this.state.movies && (
					<MoviesList
						removeMovie={this.deleteMovie}
						editMovie={this.editMovie}
						movies={this.state.movies}
						isEditOpen={this.state.isEditOpen}
						openEdit={this.openEdit}
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
