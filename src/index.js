import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={time:new Date().toLocaleTimeString()}
  }
  render(){
    return <h1 className='clock' >{this.state.time}</h1>
  }
  componentDidMount(){
    console.log('I Was Mounted');
    const intervalId = setInterval(() => {
      this.setState({time:new Date().toLocaleTimeString()})
    }, 1000);
    this.setState({intervalId:intervalId})
  }
  componentDidUpdate(prevProps){
    console.log(prevProps,'I Was Updated');
  }
  componentWillUnmount(){
    console.log("I Was Unmounted");
    clearInterval(this.state.intervalId)
  }
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={showClock:this.props.showClock}
  }
  render(){
    return(
      <div className='clockApp' >
        <button className='button' onClick={()=>{this.setState({showClock:!this.state.showClock})
        }} >Toggle Clock</button>
        {(this.state.showClock) ? <Clock/> : "Clock is Hidden"}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App showClock = {true} />); 