import { Component, createElement } from "../lib/react/index.js";
import Select from './select.js'

{/* <section class="wrapper">
        <div class="actions">
            <form action="" id="search-form">
                <input placeholder="Escribe tu película favorita" name="title" type="Busca una pelicula" />
                <button>Buscar</button>
            </form>
            <button id="recommended">Películas recomendadas</button>
            <select name="" id="filter">
                <option value="all">Todas</option>
                <option value="most-valued">Más valoradas</option>
                <option value="least-valued">Menos valoradas</option>
            </select>
        </div>
    </section> */}



class Filters extends Component {
    render() {
        return Select({
            id: "filter",
            children: [
                createElement('option', { value: "all" }, 'Todas'),
                createElement('option', { value: "most-valued" }, 'Más valoradas'),
                createElement('option', { value: "least-valued" }, 'Menos valoradas')
            ]
        })
    }
}

export default Filters;