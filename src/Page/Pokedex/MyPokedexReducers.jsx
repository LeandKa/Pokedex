const INITIAL_STATE = { pokedexList: [], pokemon: {}, show: false, types: [], errors: false, };

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'POKEMON_ADD':
            return { pokedexList: action.payload, errors: false }
        case 'POKEMON_REMOVE':
            return { pokedexList: action.payload, errors: false }
        case 'POKEDEX_SHOW':
            return { pokedexList: action.payload, errors: false }
        case 'POKEDEX_ERROR':
            return { errors: true }
        default:
            return state
    }
}