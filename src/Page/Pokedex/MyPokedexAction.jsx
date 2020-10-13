import Axios from 'axios';
const PokedexArray = [];

export function addPokedex(id) {
    return function (dispatch) {
        PokedexArray.push(id);
        localStorage.setItem('Pokedex', JSON.stringify(PokedexArray,localStorage.getItem('Pokedex')));
        dispatch({
            type: 'POKEMON_ADD',
            payload: PokedexArray
        })
    }
}
export function removePokedex(id) {
    return function (dispatch) {
        PokedexArray.splice(PokedexArray.indexOf(id), 1);
        localStorage.setItem('Pokedex', JSON.stringify(PokedexArray));
        dispatch({
            type: 'POKEMON_REMOVE',
            payload: PokedexArray
        })
    }
}

export function getPokedex(url, name) {
    const API_URL = `${url}/${name}`
    return dispatch => {
        Axios.get(API_URL)
            .then(resp => {
                const data = {
                    pokemon: resp.data.results,
                    count:resp.data.count,
                    next:resp.data.next,
                    previous:resp.data.previous,
                    show: true
                }
                dispatch(init(data))
            })
            .catch(e => {
                dispatch(error())
            })
    }
}
export function pokedexShow(data) {
    return {
        type: 'POKEDEX_SHOW',
        payload: data
    }
}
export function pokedexErros() {
    return {
        type: 'POKEDEX_ERROR'
    }
}
export function init(data) {
    return [
        pokedexShow(data)
    ]
}
export function error() {
    return [
        pokedexErros()
    ]
}


export function PaginationPokedex(url){

    return dispatch =>{
        Axios.get(url)
        .then(resp => {
            const data = {
                pokemon: resp.data.results,
                count:resp.data.count,
                next:resp.data.next,
                previous:resp.data.previous,
                show: true
            }
            dispatch(init(data))
        })
        .catch(e => {
            dispatch(error())
        })
    }

}