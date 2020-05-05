import React, {Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
    this.receiveColor = this.receiveColor.bind(this);
    this.receiveChangeSize = this.receiveChangeSize.bind(this);
    this.resetDefault = this.resetDefault.bind(this);
  }

  receiveColor(color) {
    this.setState({
      color: color
    });
  }

  receiveChangeSize(val){
    let new_size = this.state.fontSize + val;
    if(new_size > 8 && new_size < 36){
      this.setState({
        fontSize: new_size
      });
    }
  }

  resetDefault(val) {
    if(val){
      this.setState({
        color: 'red',
        fontSize: 15
      });
    }
  }
  
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
            <ColorPicker color={this.state.color} receiveColor={this.receiveColor}/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting 
                receiveChangeSize = { this.receiveChangeSize }
                fontSize = { this.state.fontSize}
              />
              <Reset resetDefault = { this.resetDefault }/>
            </div>
            <Result 
              color={this.state.color}
              fontSize = {this.state.fontSize}
              />
        </div>
      </div>

    );
  }
}

export default App;
