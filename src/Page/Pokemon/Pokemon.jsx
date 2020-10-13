import Axios from 'axios';
import React, { Component } from 'react';
import "./Pokemon.css";
import Type from '../../Components/Template/Type/Type';
import Error from '../../Components/Error/Error';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Pokemon extends Component {

    state = {
        pokemon: {},
        img: "",
        types: [],
        abilities: [],
        stats: [],
        erros: false
    }


    componentDidMount() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
            .then(result => {
                console.log(result.data)
                this.setState({
                    pokemon: result.data,
                    img: result.data.sprites.front_default,
                    types: result.data.types,
                    abilities: result.data.abilities,
                    stats: result.data.stats
                })
            })
            .catch(err => {
                this.setState({ erros: true })
            })

    }

    render() {
        const Abilities = () => {
            let array = []
            this.state.abilities.forEach(element => {
                array.push(element.ability.name);
            })
            return (
               <div>
                   <h1 className="abilitys-h1">Habilidades</h1>
                   <div className="abilitys">
                    {
                        array.map(ability => (
                            <span key={ability}><span>{ability}</span></span>
                        ))
                    }
                </div>
               </div>

            )
        }

        const Status = () => {
            let array = []
            this.state.stats.forEach(element => {
                array.push(element);
            })
            return (
                <div className="status-container">
                    <h1>{this.state.pokemon.name}</h1>
                    {
                        array.map(status => (
                            <div className="status-progress">
                                <span key={status} className="progress-title"><span>{status.stat.name}</span></span>
                                <ProgressBar now={status.base_stat} label={status.base_stat} animated></ProgressBar>
                            </div>
                        ))
                    }
                </div>
            )
        }

        const Types = () => {
            let array = []
            this.state.types.forEach(element => {
                array.push(element.type.name)
            });
            return (
                <div className="pokemon-types">
                    <div className="types">
                        {
                            array.map(type => (
                                <Type key={type} name={type}></Type>
                            ))
                        }
                    </div>
                </div>
            )
        }

        const Height = () => {
            const value = (this.state.pokemon.height / 10);
            return (
                <h1 className="grid-layout-h1"> Altura:<span className="grid-layout-span">{value} m</span></h1>
            )
        }
        const Weight = () => {
            const value = (this.state.pokemon.weight / 10);
            return (
                <h1 className="grid-layout-h1">Peso: <span className="grid-layout-span">{value} kg</span></h1>
            )
        }


        if (this.state.erros) {
            return (
                <Error></Error>
            )
        } else {
            return (
                <div className="container-pokemon">
                    <div className="pokemon-title">
                        <h1> {this.state.pokemon.name} <span>№:{this.state.pokemon.id}</span></h1>
                        <Types></Types>
                    </div>
                    <div className="pokemon-details">
                        <img src={this.state.img} alt="pokemon-img" className="img" ></img>
                        <Status></Status>
                    </div>
                    <div className="pokemon-info">
                        <div className="pokemon-info-med">
                            <Height></Height>
                            <Weight></Weight>
                        </div>
                        <Abilities></Abilities>
                    </div>
                </div>
            )

        }
    }
}
