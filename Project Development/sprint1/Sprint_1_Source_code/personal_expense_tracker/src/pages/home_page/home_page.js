import React from 'react';
import './style.css';
import Button from '../../components/Button/button';

export default class Home extends React.Component{
    render(){
        const navigation = this.props.navigation
        const loginPage = () =>{
            navigation('/login')
        }
        const registerPage = () =>{
            navigation('/register')
        }
        return(
            <div className='container'>
                <Button function={loginPage} value="Login"/>
                <Button function={registerPage} value="Register"/>
            </div>
            
        )
    }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();