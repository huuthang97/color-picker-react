import React, {Component} from 'react';


class SizeSetting extends Component {

  changSize(val) {
    this.props.receiveChangeSize(val);
  }

  render() {
    return (
        <div className="card mb-3">
          <div className="card-header bg-info">
            <h3 className="card-title">Size: { this.props.fontSize }px</h3>
          </div>
          <div className="card-body">
            <button onClick = {()=>this.changSize(-2)} type="button" className="btn btn-success">Giảm</button>&nbsp;
            <button onClick = {()=>this.changSize(2)} type="button" className="btn btn-success">Tăng</button>
          </div>
        </div>
          
    );
  }
}

export default SizeSetting;
