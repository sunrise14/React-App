import React, {Component} from 'react';
import axios from 'axios';
import classes from './home.css';
import {Link} from 'react-router-dom';

class HomeItems extends Component{
    state = {
        news:[]
    }
  
    componentWillMount(){
        axios.get(`http://localhost:3000/data`)
        .then(response=>{
            this.setState({
                news:response.data.features
            })
        })
    }

    renderItems=()=>{ 
     
      return this.state.news.map((item,i)=>(
            
                <tr key={item.id}>
                <td data-table="Place: "><Link to={`/data/${i}`}> {item.properties.place}</Link></td>
                <td data-table="Magnitude: " className={classes.mag}>{item.properties.mag}</td>
                <td data-table="Time: ">{new Date(item.properties.time).toISOString()}</td>
                </tr>
            
            )) 
    }
    
    render(){
       // console.log(this.state.news);
        return(
        <div className={classes.listHeader}>
            <h2>USGS All Earthquakes, Past Hour</h2>
            <table>
            <thead>
                <tr>
                    <td>Place</td>
                    <td>Magnitude</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>{this.renderItems()}</tbody>
            </table>
            
        </div>
        )
    }
}
export default HomeItems;