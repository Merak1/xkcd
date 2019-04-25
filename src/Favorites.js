import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Favorites extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="Favoritos">
                <p>Favoritos</p>
                <ul>
                    {this.props.favoritos.map((favoritos) =>
                        <div className="favoritos-list" onClick={() => { this.props.irFavorito(favoritos) }}
                        > <p className="favoritos-element">{favoritos}  &nbsp;</p>
                            <FontAwesomeIcon className="favoritos_delete" icon="trash-alt"
                                onClick={() => { this.props.eliminarFavorito(favoritos) }} />
                        </div>
                    )}
                </ul>
            </div >
        )
    }
}
export default Favorites;