const INITIAL_STATE = { pokedex: {},pokemon: {}, show: false, messageAdd: false, types: [], errors: false, };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'POKEMON_SEARCH':
            return { pokemon: action.payload.pokemon, show: action.payload.show, types: action.payload.types }
        case 'ERROR_SEARCH':
            return { errors: true }
        default:
            return state
    }
}