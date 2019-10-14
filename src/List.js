import React from 'react';
import './List.css';
import Home from './Home'
import { Link } from 'react-router-dom';

export default class List extends React.Component
{
    constructor( props )
    {
        super(props)
    }
render(){
  return (
    <div className="container-fluid">
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">PROFILE PIC</th>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PROFILE</th>
                    <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>
           {
                this.props.users.map((user, index)=>{
                  return(
                    <tr key={user.id}>
                    <td>
                        <div className="profilePic"
                            style={{
                                backgroundImage:  `url(${user.avatar_url})`,
                                backgroundSize: "cover"
                            }}
                        >
                        </div>
                    </td>
                    <td>{user.id}</td>
                    <td>{user.login.toUpperCase()}</td>
                    <td>
                        <Link to={"/profile/detail/" + user.login}>
                        {user.url}
                        </Link>

                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={(event)=>{this.props.deleteUser(index)}}>Delete</button>
                    </td>
                  </tr>
                )  
            })
           }
            </tbody>
        </table>
    </div>
  )

}
}