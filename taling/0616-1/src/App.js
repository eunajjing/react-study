// import React, { Component, Suspense } from "react";
// // import info from "./info";
// // import Splitted from "./Splitted";
// import withSplitted from "./withSplitted";

// const Split = React.laxy(() => import("./Splitted"));

// class App extends Component {
//   state = {
//     visible: false
//   };

//   handleClick = () => {
//     // import("./info").then(res => {
//     //   res.default();
//     // });
//     import("./Splitted").then(res => {
//       this.setState({
//         visible: true
//       });
//     });
//   };
//   render() {
//     const { visible } = this.state;

//     return (
//       <div>
//         <button onClick={this.handleClick}>클릭</button>
//         {visible && (
//           <Suspense fallback={<div>로딩중...</div>}>
//             <Split />
//           </Suspense>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component, Suspense } from "react";

const Split = React.lazy(() => import("./Splitted"));

class App extends Component {
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>클릭</button>
        {visible && (
          <Suspense fallback={<div>로딩중...</div>}>
            <Split />
          </Suspense>
        )}
      </div>
    );
  }
}

export default App;
