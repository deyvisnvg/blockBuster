import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";
import Movie from "./movie.js";
import movies from "../movies.js"
import store from "../store.js";
import api from "../api.js"

{/* <div class="wrapper">
    <section class="movie-list" id="container">
        <article class="movie recommended">
            <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg" alt="">
                <p class="movie-title">Duro de matar</p>
                <p class="movie-id">123456</p>
                <span class="movie-rate">10</span>
        </article>
    </section>
</div> */}

// .movie-list {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, 200px);
//     justify-content: center;
//     box-sizing: border-box;
//     gap: 1em;
//   }


const MovieListStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    box-sizing: border-box;
    gap: 1em;
`

class MovieList extends Component {
    // state = {
    //     movies: store.getState().movieList
    // }
    async componentDidMount() {
        const page10 = await api.moviePage(10);
        console.log("🚀 ~ file: movie-list.js ~ line 43 ~ MovieList ~ componentDidMount ~ page10", page10)
    }
    render() {
        const state = store.getState();
        const movieListId = state.list[state.filter]
        const movieList = state.movieList; // {1=>{}, 2=>{}, 3=>{}}
        console.log(state)
        return Wrapper({
            children: MovieListStyled({
                // Aqui retorna la instancia new Movie() enviando como parámetro
                // un objeto {} segun el id encontrado. Este objeto sera la props
                // en la clase Movie
                children: movieListId.map(id => new Movie(movieList.get(id)))
            })
        })
    }
}

export default MovieList;