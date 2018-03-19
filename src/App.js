import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
class App extends Component {
     constructor(props) {
          super(props);
          this.state = { deadline: 'march, 31, 2018' };
     }
     render() {
          return (
              <div className="App">
                   <div className="App-title">
                        c o m i n g s o o n . . . 
                   </div>
                   <br />
                   <Clock deadline={ this.state.deadline }/>
              </div>
          );
     }
}
export default App;