import React, { Component } from 'react';
import './Home.css';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import { connect } from 'react-redux';
import Error from '../../Components/Error/Error';



class Home extends Component {

    render() {
        const { pokemon } = this.props;

        const Rendercard = () => {
            if (pokemon.show) {
                return (
                    <div>
                        <Card Image={this.props.pokemon.pokemon.sprites.front_default} Name={this.props.pokemon.pokemon.name} Id={this.props.pokemon.pokemon.id} Type={pokemon.types} ></Card>
                    </div>
                )
            } else {
                return (
                    <div className="container-noshow">
                        <h3>Procure por um pokémon     digitando    seu    nome    completo    ou seu número!</h3>
                    </div>
                )
            }
        }


        return (
            <main className="container-main">
                <Search></Search>
                {
                    pokemon.errors ? <Error></Error>
                        : <Rendercard></Rendercard>
                }
            </main>
        )
    }
}


const mapStateToProps = state => ({ pokemon: state.pokemon })
export default connect(mapStateToProps, null)(Home);