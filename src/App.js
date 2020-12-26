import React, { Component } from 'react'
// import Detail from './pages/Detail'
import SignIn from './pages/Signin'
import Home from './pages/Home'
import Signup from './pages/Signup'
import {connect} from "react-redux";
import createAction from './redux/actions';
import { SET_TOKEN } from "./redux/constants/courseConstant";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        {/* <Detail/> */}
        <SignIn/>
        {/* <Signup></Signup> */}
      </>
    )
  }
  getToken = () => {
    const token = localStorage.getItem("t");
    if(token){
      this.props.dispatch(createAction(SET_TOKEN, token))
    }
  }
  componentDidMount (){
    this.getToken();
  }
}
export default connect()(App);