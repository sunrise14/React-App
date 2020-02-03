import React, {Component} from 'react';
import axios from 'axios';
import classes from './profile.css';

class Profile extends Component{
    state = {
        profile:[]
    }

    componentWillMount(){
        axios.get(`http://localhost:3004/profile`)
        .then(response=>{
            this.setState({
                profile:response.data

            })
        })
    }
    renderTestItemsp(){
        let imgSrc = this.state.profile.avatarImage;
        return (
            <div>
                <h2>Profile</h2>
                <div className={classes.container}>
                    <div className={classes.item}><img className={classes.pimage} src={imgSrc}/></div>
                    <div className={classes.item2}>
                        <p><b>first name</b> {this.state.profile.firstName}</p>
                        <p><b>last name</b> {this.state.profile.lastName}</p>
                        <p><b>phone</b> {this.state.profile.phone}</p>
                        <p><b>email</b> {this.state.profile.email}</p>
                        <p className={classes.bio}><b>bio</b> {this.state.profile.bio}</p>
                    </div>
                </div>
            </div>
            )      
    }

    render(){
        return(
            <div>{this.renderTestItemsp()}</div>
        )
    }
}

export default Profile; 