import React,{Component} from 'react'
import Header from './header';
import Footer from './footer';
import Display from './Display';
import JSON from './db.json'

class App extends Component{
    constructor(){
        super()
        this.state={
            resp:JSON,
            filterData:JSON
        }
    }
    filterData=(keyword)=>{
        let output =this.state.resp.filter((data)=>{
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
       this.setState({filterData:output})
    }
    render(){
        return(
            <>
            <Header userInput={(data)=>{this.filterData(data)}}/>
            <Display product={this.state.filterData}/>
            <Footer year='2022' month="jan"/>
            </>
        )
    }
    }
   
export default App;