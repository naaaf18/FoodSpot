import React from "react";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:0,
            count2:1,
        }
    }
render(){
    const {count}=this.state
    return<div>

<h1>Hi I am profile class componenet</h1>
<h1>Hi I am {this.props.name}and {this.props.xyz}</h1>
<h2>{count}</h2><button onClick={()=>{
    this.setState({
        count:count+1,
    })
}}>click  me</button>
    </div>
    
}

}

export default Profile;