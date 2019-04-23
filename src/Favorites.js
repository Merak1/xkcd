import React, { Component } from 'react';

class Favorites extends Component {

    componentDidMount() {

    }
    delete = () => {
        console.log("delete");

    }
    render() {
        return (
            <div className="Favoritos">
                <p>Favoritos</p>
                <ul>
                    {console.log(this.props)}
                    {this.props.favoritos.map(favoritos =>
                        <li onClick={this.delete} >{favoritos}</li>
                    )}
                </ul>
            </div>
            //aca se hace el map de los favorites y se hace el display 
        )
    }
}
export default Favorites;