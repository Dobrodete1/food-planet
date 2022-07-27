import React from 'react'

class ClassCounter extends React.Component {   

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            total: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
            
    }

    increment() {
        this.setState({ count: this.state.count + 1})
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center',}}>
                <button onClick={this.increment} style={{background: 'none',
                border: 'none', fontSize: '25px', color: '#FF583E'}}>+</button>
                <h1 style={{fontSize: '16px'}}>{this.state.count}</h1>
                <button onClick={this.decrement} style={{background: 'none',
                border: 'none', fontSize: '25px', color: '#FF583E'}}>-</button>
            </div>
        )
        }        
    }

export default ClassCounter