
import React from 'react';
export default class Form extends React.Component {
  state = {
    username: '',
    password: '',
    age: '',
    gender:'',
    ocupation:'',
  };
      
 change= e=>{
   this.props.onChange({[e.target.name]:e.target.value });
   this.setState({
     [e.target.name]:e.target.value
   })
 };
 onSubmit = e =>{
   e.preventDefault();
 
   this.setState= ({
    username: '',
    password: '',
    age: '',
    gender:'',
    ocupation:'',
  });

  this.props.onChange= ({
    username: '',
    password: '',
    age: '',
    gender:'',
    ocupation:'',
  });
 };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          
        <label>username</label>
        <input name="username"
         placeholder="username"
         
        value={this.state.password}
        onChange={e => this.change(e)}
        />
       <br/>
        <br/>
        <label>Password</label>
        <input name="password"
         placeholder="password"
         type="password"
        value={this.state.password}
        onChange={e => this.change(e)}
        />
       <br/>
       
       <br/>
       <label>Age</label>
      <input name="age"
        placeholder="age"
        value={this.state.age}
        onChange={e => this.change(e)}
        />
       <br/>
       <br/>
       <label>Ocupation</label>
       <input name="ocupation"
        placeholder="ocupation"
        value={this.state.ocupation}
        onChange={e => this.change(e)}
        />
       <br/>
       <br/>
       <label>Gender</label>
       <select onChange={e => this.change(e)} defaultValue="select Gender">
           <option defaultValue={this.state.gender}>select Gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="other">other</option>
           </select> 
       

       <br/>
        <input type="submit" value = "submit"></input>
      </form>
        
    
          
    );
  }

}
 