
import React, { Component } from 'react'
import { connect } from 'react-redux';
import './MyPokedex.css';
import { bindActionCreators } from 'redux';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { getPokedex, PaginationPokedex } from '../Pokedex/MyPokedexAction';

class MyPokedex extends Component {

    state = {
        Id: 1,
        currentPage: 1
    }

    componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon"
        const name = "?limit=20&offset=0"
        this.props.getPokedex(url, name)
        console.log(this.state)
    }


    componentDidUpdate(){
        console.log(this.state)
    }

    changeCurrentPage = (currentPage) => {
        if (currentPage > this.state.currentPage) {
            this.props.PaginationPokedex(this.props.pokedex.pokedexList.next);
        } if (currentPage < this.state.currentPage) {
            this.props.PaginationPokedex(this.props.pokedex.pokedexList.previous);
        } if (currentPage === 53) {
            this.props.PaginationPokedex(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=1030`)
        }
        if (currentPage === 1) {
            this.props.PaginationPokedex("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        }
        this.setState({ currentPage: currentPage })
    }


    render() {
        const { pokedex } = this.props;
        const Id = (value) => {
            const pokemonIndex = value.split('/')[value.split('/').length - 2];
            return (
                <h1 className="pokedex-id">{pokemonIndex}</h1>
            )
        }

        const Image = (value) => {
            const pokemonIndex = value.split('/')[value.split('/').length - 2];
            const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
                return (
                    <a href={`/Pokemon/${pokemonIndex}`}><img className="pokedex-image" alt="pokemon-img" src={imageUrl}></img></a>
                )
        }


        return (
            <div className="container-Pokedex">
                {
                    pokedex.pokedexList.pokemon &&
                    pokedex.pokedexList.pokemon.map(poke => (
                        <div key={poke.url} className="pokedex-list">
                            <div className="pokedex">
                                {Image(poke.url)}
                                {Id(poke.url)}
                                <h1 className="pokedex-title">{poke.name}</h1>
                            </div>
                        </div>
                    ))
                }

                <Pagination
                    currentPage={this.state.currentPage}
                    sizePerPage={20}
                    totalSize={this.props.pokedex.pokedexList.count}
                    theme="bootstrap"
                    changeCurrentPage={this.changeCurrentPage}
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({ pokedex: state.pokedex });
const mapDispatchToProps = dispatch => bindActionCreators({ getPokedex, PaginationPokedex }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MyPokedex);