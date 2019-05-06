import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Favorites extends Component {

    render() {
        return (
            <div className="Favoritos">
                <p>Favoritos</p>
                <ul>
                    {this.props.favoritos.map((favoritos) =>
                        <div className="favoritos-list">
                            <p className="favoritos-element" onClick={() => { this.props.irFavorito(favoritos) }}>{favoritos}  &nbsp;</p>
                            <div className="favoritos-delete">
                                <FontAwesomeIcon icon="trash-alt"
                                    onClick={() => { this.props.eliminarFavorito(favoritos) }} />
                            </div>
                        </div>
                    )}
                </ul>
            </div >
        )
    }
}
export default Favorites;