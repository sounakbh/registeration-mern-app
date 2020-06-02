import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'
import axios from 'axios';

export default class ExerciseList extends Component {
  state = {
    users: []
  }

  exerciseList(){
    return this.state.users.map(currentexercise => {
      return <div>{currentexercise.firstName + " " + currentexercise.lastName}</div>;
    })
  }

  componentDidMount() {
   axios.get('http://localhost:5000/users/')
     .then(response => {
       this.setState({ users: response.data })
     })
     .catch((error) => {
       console.log(error);
     })
 }

  render() {
    return(
      <div>
        <h1>People who have registered</h1>
        {
          this.exerciseList()
        }
      </div>
    )
  }
}
