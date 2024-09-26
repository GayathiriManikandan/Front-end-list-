 import React from 'react'
class Reactstate extends React.Component{
    constructor(){
        super();
        this.state={initialvalue:0}
    }
    changevalue =()=>
    {
      this.setState({initialvalue: this.state.initialvalue +1})
    }
    changevalue01 =()=>
        {
            this.setState({initialvalue: this.state.initialvalue -1})
        }
    start =()=>
    {
        this.setState({initialvalue:this.state.initialvalue})
    }
    render(){
        return<>
            <h1>{this.state.initialvalue}</h1>
            <button type="button" onClick ={this.changevalue}>INCRE</button>
            <button type="button" onClick ={this.changevalue01}>DECRE</button>
            <button type="button" onClick ={this.start}>start</button>

            </>
        }
}


export default Reactstate