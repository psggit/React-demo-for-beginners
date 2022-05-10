import React from 'react';
import Welcome from './Welcome';

class ClassCompDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.handleInc = this.handleInc.bind(this)
  }

  componentDidMount() { // executed after the first render only 
    console.log("From component did mount")
    //restApiCall()
  }

  //restApiCall() {}

  componentWillUnmount() { // executed after the component is unmounted from DOM
    console.log("From component will unmount")
  }

  handleInc() {
    this.setState({count: this.state.count+1})
    //restApiCall()
  }

  render() {
    console.log("From render")
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.handleInc}>Increment</button>
        <p>Count value: {this.state.count}</p>
        <Welcome name={"Robert"} />
      </div>
    )
  }
}

export default ClassCompDemo