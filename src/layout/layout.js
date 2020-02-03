/* eslint react/prop-types: 0 */
import React, {Component} from 'react';
import './layout.css';
import Header from '../components/Header/header';

class Layout extends Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}
export default Layout;