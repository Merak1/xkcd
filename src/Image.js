import React, { Component } from 'react';

class Image extends Component {

    render() {
        return (
            <div>
                <img src={this.props.imagen} alt="" className="comic_image" />
            </div>
        )
    }
}

export default Image
