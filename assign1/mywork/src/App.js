import React, { Component } from 'react';
import './App.css';
import Input from './Components/UserInput'
import Output from './Components/UserOutput'

class App extends Component {

  state = {
    usernames: [
      { name: 'David' },
      { name: 'Manu' },
      { name: 'Stephanie' }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      usernames: [
        { name: 'David' },
        { name: 'Test Test Test' },
        { name: 'Stephanie' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <Input />
        <button onClick={() => this.switchNameHandler()}>Submit</button>
        <Output name={this.state.usernames[1].name} />
      </div>
    );
  }
}

export default App;
