import React, {Component} from 'react';


class Reset extends Component {

  reset = () => {
    this.props.resetDefault(true);
  }

  render() {
    return (
      <button onClick = { this.reset } type="button" className="btn btn-primary">Reset</button>
    );
  }
}

export default Reset;
