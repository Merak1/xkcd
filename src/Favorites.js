import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Favorites extends Component {
  render() {
    // console.log(favoritos, " favoritos aaaaaaaaaaa")
    return (
      <div className="Favoritos">
        <p>Favoritos</p>
        <ul>

          {this.props.favoritos.map((favoritos, index) =>
            <div key={favoritos} className="favoritos-list" onClick={() => { this.props.irFavorito(favoritos) }}>
              <div className="favoritos-element" >
                <p >{favoritos} </p>
                {/* <p >{this.props.tituloFavoritos[index]} </p> */}
              </div>
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