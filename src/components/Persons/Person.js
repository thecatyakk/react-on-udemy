import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props) {
        super(props);
        console.log("Person.js inside constructur", props);
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
        console.log("Person.js inside componentWillMount");

    }
    componentDidMount() {
        console.log("Person.js inside componentDidMount ");

    }


    render(){
        console.log("Person.js Indside render");
        
        return this.props.persons.map((person, index) => {
            return <Person
                click={
                    () => this.props.clicked(index)
                }
                name={
                    person.name
                }
                age={
                    person.age
                }
                key={
                    person.id
                }
                changed={
                    (event) => this.props.changed(event, person.id)
                }
            />

        })
    }
} 

export default Persons;
