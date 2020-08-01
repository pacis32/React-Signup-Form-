import React, { Component } from 'react';

class Gender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [],
      
    };
  }

  componentDidMount() {
    this.setState({
      genders: [
        {id: 'M', name: 'Male'},
        {id: 'F', name: 'Female'},
       
      ]
    });
  }

  render () {
    const { gender} = this.state;

    let gendersList = genders.length > 0
    	&& gender.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select>
          {gendersList}
        </select>
      </div>
    );
  }
}

export default Gender;