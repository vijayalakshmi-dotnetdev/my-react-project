import React from 'react';

function childComponent() {
    console.log('child component is called');
    return <h5>Child Component</h5>
}

export default class LifecycleMethods extends React.Component {

    constructor(Props) {
        super(Props);
        console.log('1. constructor is called');
        this.state = { price:0, childComponentEnabled: true };
    }

    componentDidMount() {
        console.log('3. componentDidMount is called');
    }

    componentDidUpdate() {
        console.log('4. componentDidUpdate is called');
    }

    render() {
        console.log('2. render initial phase is called');

        return <div>
            <h5>Lifecycle Methods</h5>
            <p> Price: {this.state?.price}</p>
            <button onClick={()=> this.setState({price: this.state?.price + 1})}> Increase Price </button>
            <div>
                {this.state?.childComponentEnabled && childComponent()}
            </div>

        </div>

    }
}