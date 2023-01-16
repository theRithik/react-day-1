import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User text here'
        }
    }
handleChange=(event)=>{
    this.setState({keyword:event.target.value?event.target.value:'User text here'})
     this.props.userInput(event.target.value)
}

    render(){
    return(
        <>
        <center>
            <h3>{this.state.title}</h3>
            <input onChange={this.handleChange} placeHolder="Search.."/>
            <div style={{color:'red'}}>{this.state.keyword}</div><hr/>
        </center>
        </>
    )
}
}
export default Header;