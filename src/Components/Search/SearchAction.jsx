import axios from 'axios';

 const getTypes = (data) =>{
    let array = []
    data.forEach(element => {
            array.push(element.type.name)
    });
    return array
}
export function getPokemon(url,name){
    const API_URL = `${url}/${name}`
    return dispatch =>{
        axios.get(API_URL)
        .then(resp =>{
            const arrayTypes = getTypes(resp.data.types);
            const data = {
                 pokemon:resp.data,
                 types:arrayTypes,
                 show:true
            }
            dispatch(init(data))
        })
        .catch(e =>{
           dispatch(error())
        })
    }
}
export function pokemonSearch(data){
    return{
        type:'POKEMON_SEARCH',
        payload:data
    }
}
export function searchErros(){
    return{
        type:'ERROR_SEARCH'
    }
}
export function init(data){
    return[
        pokemonSearch(data)
    ]
}
export function error(){
    return[
       searchErros()
    ]
}