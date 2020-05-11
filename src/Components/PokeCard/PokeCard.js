import React, { Component } from 'react';
import './PokeCard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
class PokeCard extends Component {
    render() {
        let pokeId = this.props.id;
        if (this.props.id.toString().length === 1) {
            pokeId = `00${this.props.id}`
        } else if (this.props.id.toString().length === 2){
            pokeId = `0${this.props.id}`
        } 
        let imgSrc = `${POKE_API}${pokeId}.png`;
        return (
            <div className="PokeCard">
                <h1>{this.props.name}</h1>
                <div className="PokeCard-image"><img src={imgSrc} alt={this.props.name} /></div>
                <div className="PokeCard-data">Type: {this.props.type}</div>
                <div className="PokeCard-data">EXP: {this.props.base_experience}</div>
            </div>            
        )
    }
}

export default PokeCard;