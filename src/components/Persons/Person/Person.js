import React,{Component} from 'react';

import classes from './Person.css';

class Person extends Component{
  constructor(props) {
    super(props);
    console.log("person.js inside constructur", props);
    this.state = {
      persons: [
        {
          id: '1',
          name: 'Max',
          age: 28
        }, {
          id: '2',
          name: 'Manu',
          age: 29
        }, {
          id: '3',
          name: 'Stephanie',
          age: 26
        }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
  componentWillMount() {
    console.log("person.js inside componentWillMount");

  }
  componentDidMount() {
    console.log("person.js inside componentDidMount ");

  }

  render(){
    console.log("person.js inside render");
    
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name}
          and I am {this.props.age}
          years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Person;