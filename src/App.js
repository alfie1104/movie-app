import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

class App extends Component {
  state = {
    greeting: 'Hello!',
  };

  componentWillMount() {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg",
          },
          {
            title: "Oldboy",
            poster: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/11/oldboy-still.jpg",
          },
          {
            title: "Star Wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png"
          },
          {
            title: "Trainspoting",
            poster: "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png"
          }
        ]
      })
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => (
      <Movie key={index} title={movie.title} poster={movie.poster} />
    ));

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
