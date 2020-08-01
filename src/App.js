

import React, { Component } from 'react';  
// import './styles.css';  
import Form from "./Components/Form"


class App extends Component {  

  state = { 
    field : {}
  };
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  render() {
    return (
      <div className="App">
    
      <Form onChange={fields => this.onChange(fields)}/>
      <p>
        {JSON.stringify(this.state.fields, null, 2)}
      </p>
      </div>
    );
  }
}

export default App; 
