import React, { PureComponent } from 'react'
import { Redirect } from 'react-router'
import Login from './Login'
import Userdata from './Userdata'
import'../App.css'

export default class User extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      isLogin:true
    }
  }
  render() {
    return (
      <div>
        {
          this.state.isLogin?<Redirect to="/userdata"/ >:<Redirect to="Login"/>
        }
      </div>
    )
  }
}
