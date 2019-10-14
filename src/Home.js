import React from 'react'
import List from './List';

export default class Home extends React.Component {
    
  constructor( props){
    super( props )
    this.state = {
      gitList: [],
      isLoaded: false
    }
  }

  deleteUser = index =>{
    const { gitList } = this.state
    gitList.splice(index, 1)
    this.setState({gitList: gitList})
}
componentDidMount()
{
  fetch('https://api.github.com/users')
  .then(result => result.json())
  .then(mainGitList =>{
    this.setState({
      isLoaded: true,
      gitList: mainGitList
    })
    console.log(this.state.gitList)
  })
}

  render(){

    var { isLoaded, gitList } = this.state
    if( !isLoaded )
    {
      return(
        <h1>Data is Loading....</h1>
      )
    }

  return (
    <div className="App">
      <List users={gitList} deleteUser={this.deleteUser} />
    </div>
  );
}
}