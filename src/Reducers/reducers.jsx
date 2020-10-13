import {combineReducers} from 'redux';
import SearchReducers from '../Components/Search/SearchReducers';
import MyPokedexReducers from '../Page/Pokedex/MyPokedexReducers';


const rootReducer = combineReducers({

    pokemon:SearchReducers,
    pokedex:MyPokedexReducers

})



export default rootReducer;