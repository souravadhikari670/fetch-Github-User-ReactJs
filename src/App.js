import React, {Fragment} from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Routes from './Routes'

export default class App extends React.Component {
  render(){
    return(
      <Fragment>
      <Link to="/profile">
        <button className="btn btn-lg btn-success mx-5 my-5">Git Users</button>
      </Link>
      <Routes />
      </Fragment>
    )
  }
}
