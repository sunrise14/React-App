import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './header.css';

class Header extends Component{

  state = {
    siteImage:[]
  }

  componentWillMount(){
    axios.get(`http://localhost:3000/site`)
    .then(response=>{
        this.setState({
            siteImage:response.data

        })
    })
 }

  logo(){
  let imgSrc = this.state.siteImage.logoImage;
    return(
    <Link to="/" className={style.logo}>
      <img alt="logo" src={imgSrc} />
    </Link>
    )
  }

  profile(){
    return(
    <Link to="/profile">
      Welcome Sally
    </Link>
    )
  }

  render(){
  return (
    <header className={style.header}>
      <div className={style.headerOpt}>
        {this.logo()}
        <h2 className={style.title}>Earthquake Zen Garden</h2>
        <span className={style.profile}>{this.profile()}</span>
      </div>
    </header>
  )
 }
 
}
export default Header;
