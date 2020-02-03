/* eslint react/prop-types: 0 */
import React, { Component} from 'react';
import axios from 'axios';
import styles from './detail.css';

class SpecificDetails extends Component{
    state = {
      test:[],
      p:-1
    }
    componentWillMount(){
        axios.get(`http://localhost:3004/data`)
        .then(response=>{
            this.setState({
                test:response.data.features[this.props.match.params.id].properties,
                p:this.props.match.params.id
            })
        })
    }
    renderTestItems(){
        return (
            <div className={styles.specifics}>
                <h2>{this.state.test.title}</h2>
                <table>
                    <tbody>
                        <tr><td><b>Place</b></td><td> {this.state.test.place}</td></tr>
                        <tr><td><b>Magnitude</b></td><td> {this.state.test.mag}</td></tr>
                        <tr><td><b>Time</b></td><td> {this.state.test.time}</td></tr>
                        <tr><td><b>Status</b></td><td>{this.state.test.status}</td></tr>
                        <tr><td><b>Tsunami</b></td><td> {this.state.test.tsunami}</td></tr>
                        <tr><td><b>Type</b></td><td>{this.state.test.type}</td></tr>
              </tbody>
              </table>
            </div>
            )      
    }

    render(){
        return(
            <div>
                <div>{this.renderTestItems()}</div>
            </div>
        )
    }
}

export default SpecificDetails;