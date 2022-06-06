import React from 'react';

//This component is used in the User component for the log in

class Input extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleChange(e) {
    this.props.onTextChange(e.target.value);
  }

  handleClick() {
    document.getElementById("userForm").style.visibility = "hidden";
    alert("You have been logged in!");
  }

/* Notice in the render() method below, this.props.text (the props passed from App.js)
is used to set the value for the input element. */
  render() {
    return (
      <fieldset id='userForm'>
        <legend>Enter Username:</legend>
        <input value={this.props.text}
               onChange={this.handleChange} />
        <input type="button" value="Login" onClick={ this.handleClick } />
      </fieldset>
      
    );
  }
}

export default Input;