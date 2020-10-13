import React, { Component } from 'react'


export default class Type extends Component {
    render() {
        const TypeColor = ()=>{
            switch (this.props.name) {
                case 'bug':
                  return <span className="types-details" style={{ backgroundColor: "lightgreen" }}>{this.props.name}</span>
                case 'dark':
                    return<span className="types-details" style={{ backgroundColor: "black" }}>{this.props.name}</span>
                case 'dragon':
                    return <span className="types-details" style={{ backgroundColor: "darkblue" }}>{this.props.name}</span>
                case 'electric':
                    return <span className="types-details" style={{ backgroundColor: "yellow" }}>{this.props.name}</span>
                case 'fairy':
                    return <span className="types-details" style={{ backgroundColor: "pink" }}>{this.props.name}</span>
                case 'fighting':
                    return <span className="types-details" style={{ backgroundColor: "darkorange" }}>{this.props.name}</span>
                case 'flying':
                    return <span className="types-details" style={{ backgroundColor: "lightsalmon" }}>{this.props.name}</span>
                case 'ghost':
                    return<span className="types-details" style={{ backgroundColor: "purple" }}>{this.props.name}</span>
                case 'grass':
                    return <span className="types-details" style={{ backgroundColor: "green" }}>{this.props.name}</span>
                case 'ground':
                     return <span className="types-details" style={{ backgroundColor: "darkorchid" }}>{this.props.name}</span>
                case 'ice':
                    return<span className="types-details" style={{ backgroundColor: "lightskyblue" }}>{this.props.name}</span>
                case 'poison':
                    return <span className="types-details" style={{ backgroundColor: "magenta" }}>{this.props.name}</span>
                case 'normal':
                    return <span className="types-details" style={{ backgroundColor: "lightgray" }}>{this.props.name}</span>
                case 'psychic':
                    return <span className="types-details" style={{ backgroundColor: "lightpink" }}>{this.props.name}</span>
                case 'rock':
                    return <span className="types-details" style={{ backgroundColor: "brown" }}>{this.props.name}</span>
                case 'steel':
                    return <span className="types-details" style={{ backgroundColor: "darkgrey" }}>{this.props.name}</span>
                case 'water':
                    return <span className="types-details" style={{ backgroundColor: "blue" }}>{this.props.name}</span>
                default:
                    return <span className="types-details" style={{ backgroundColor: "red" }}>{this.props.name}</span>
            }
        }

        return (
            <div>
                <TypeColor></TypeColor>
            </div>
        )
    }
}
