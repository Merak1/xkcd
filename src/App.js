import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faTrashAlt, faArrowAltCircleLeft, faArrowAltCircleRight, faStepBackward, faStepForward, faRandom } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faTrashAlt, faArrowAltCircleLeft, faArrowAltCircleRight, faStepBackward, faStepForward, faRandom)
class App extends Component {

  getData(link) {
    return link
  }
  render() {
    return (
      < div className="App">
        <Main sendData={this.getData} />
      </div>
    );
  }
}

export default App;
