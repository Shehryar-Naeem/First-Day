
import React from 'react';
class Contact extends React.Component {
  // Initialising state
  state = {
    name: 'shehrayr',
  };
  
  handler = (name) => {
    // Changing the state
    this.setState({ name: name });
  };
  
  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Click here to change the name</h1>
  
        <button onClick={this.handler.bind(this, 'naeem')}>
          Click Here
        </button>
      </div>
    );
  }
}
  
export default Contact;