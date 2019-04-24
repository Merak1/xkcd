import React, { Component } from 'react';

class Favorites extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="Favoritos">
                <p>Favoritos</p>
                <ul>
                    {this.props.favoritos.map((favoritos) =>
                        <li onClick={() => { this.props.eliminarFavorito(favoritos) }}>
                            {favoritos}</li>
                    )}
                </ul>
            </div >
            //aca se hace el map de los favorites y se hace el display 
        )
    }
}
export default Favorites;