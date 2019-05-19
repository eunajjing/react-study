import React, { Component } from 'react';

class Counter extends Component {
 state = {
   number: 0
 }
 handleClick = () => {
   this.setState({
     number: this.state.number + 1,
   })
 }
 render() {
   return (
     <div>
       <h1>{this.state.number}</h1>
       <button onClick={this.handleClick}>
         PLUS
       </button>
     </div>
   );
 }
}

export default Counter;