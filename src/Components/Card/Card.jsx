import React, { Component } from 'react';
import './Card.css';
import { FaHeart } from "react-icons/fa";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeColor from '../Template/Type/Type';
import { addPokedex } from '../../Page/Pokedex/MyPokedexAction';
import { removePokedex } from '../../Page/Pokedex/MyPokedexAction';


class Card extends Component {

    state = {
        favorite: true
    }

    componentDidMount() {
        if (localStorage.getItem("Pokedex")) {
            this.testFav()
        } else {
            return
        }
    }
    testFav = () => {
        if (localStorage.getItem("Pokedex").includes(this.props.Id)) {
            this.setState({ favorite: false })
        } else {
            return
        }
    }


    onClick = (id) => {
        this.setState({ favorite: !this.state.favorite })
        if (this.state.favorite) {
            this.props.addPokedex(id);
        } else {
            this.props.removePokedex(id);
        }
    }


    render() {

        const { Image, Type, Id, Name } = this.props;

        return (
            <div className="container-card">
                <a href={`/Pokemon/${Id}`}><img className="card-img" alt="pokemon-img" src={Image} ></img></a>
                <div className="container-card-details">
                    <span className="container-types">
                        <span className="details-id">№:{Id}</span>
                        <FaHeart className={this.state.favorite ? "details-heart" : "details-heart active"} onClick={() => this.onClick(Id)}></FaHeart>
                    </span>
                    <h1 className="card-title">{Name}</h1>
                    <div className="container-types">
                        {
                            Type.map(type => (
                                <TypeColor name={type}></TypeColor>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const DispatchToProps = dispatch => bindActionCreators({ addPokedex, removePokedex }, dispatch);
export default connect(null, DispatchToProps)(Card);
