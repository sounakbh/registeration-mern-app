import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './css/fetchUsers.css';

export default class FetchUsers extends Component {
  //storing all the retrieved users in the state
  state = {
    users: [],
  }

  //retreiving all the users who have registered for the event
  componentDidMount() {
   axios.get('http://localhost:5000/users/')
     .then(response => {
       this.setState({ users: response.data })
     })
     .catch((error) => {
       console.log(error);
     })
   }

  //counting the number of people who have registered in each category i.e [Self, Group, Corporate, Others]
  makeDataArray() {
    const a = [0, 0, 0, 0]
    this.state.users.map(currentUser => {
      if(currentUser.regType === "Self")
        a[0] += currentUser.numTickets
      else if(currentUser.regType === "Group")
        a[1] += currentUser.numTickets
      else if(currentUser.regType === "Corporate")
        a[2] += currentUser.numTickets
      else if(currentUser.regType === "Others")
        a[3] += currentUser.numTickets
    })
    return a
  }

  render() {
    //preparing the data to be inserted into the chart
    const dataArray = this.makeDataArray();
    const chartData = {
        labels: ['Self', 'Group', 'Corporate', 'Others'],
        datasets:[
          {
            label:false,
            data:dataArray,
            backgroundColor:[
              '#003f5c',
              '#58508d',
              '#bc5090',
              '#ff6361'
            ]
          }
        ]
    }

    return(
      <div className="body container">
        <div className="heading"><FontAwesomeIcon style={{color:"#228B22"}} icon={faChartBar} /> &nbsp;Statistics</div>
        <div className="subHeading">Registrations Category-wise</div>

        <Bar
         responsive="true"
         data={chartData}
         options={{
            title:{
              display:false,
            },
            legend:{
              display:false,
            }
          }}
          height={10}
          width={40}
        />
        {/*displaying the count separately*/}
        <div className="displayChart">
          <div className="stats">
            <div>Self: {dataArray[0]}</div>
          </div>
          <div className="stats">
            <div>Group: {dataArray[1]}</div>
          </div>
          <div className="stats">
            <div>Corporate: {dataArray[2]}</div>
          </div>
          <div className="stats">
            <div>Others: {dataArray[3]}</div>
          </div>
        </div>

      </div>
    )
  }
}
