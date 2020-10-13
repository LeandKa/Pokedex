import React, { useState } from 'react'
import './Search.css'
import { FaSearch } from "react-icons/fa";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemon } from './SearchAction';

function Search(props) {

    const [search, setSearch] = useState('');


    const onChange = (event) => {
        setSearch(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const searchLower = search.toLowerCase();
        const url = 'https://pokeapi.co/api/v2/pokemon'
        props.getPokemon(url,searchLower);
    }

    return (
        <form onSubmit={onSubmit} className="container-search">
            <input className="input-search" onChange={onChange} name="search" placeholder="Procurando um  Pokémon?"></input>
            <button className="icon-search" type="submit"><FaSearch></FaSearch></button>
        </form>
    )
}


const mapStateToProps = state => ({ pokemon: state.pokemon })
const mapDispatchToProps = dispatch => bindActionCreators({ getPokemon }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Search);