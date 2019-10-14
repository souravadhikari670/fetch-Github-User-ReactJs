import React from 'react'

export default class Profile extends React.Component {
    
  constructor( props){
    super( props )
    this.state = {
      gitList: [],
      isLoaded: false
    }
  }
componentDidMount()
{
  fetch('https://api.github.com/users/'+ this.props.match.params.id)
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
    <div>
     <h1>{gitList.id}</h1>
     <h1>{gitList.login}</h1>
    </div>
  );
}
}