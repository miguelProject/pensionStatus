import React, { Component } from "react";
import { MyContext } from "./context";

import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";

import classes from "./App.module.css";

class App extends Component {
  static contextType = MyContext;  

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.wrapper_container}>
          <div className={classes.wrapper_content}>
            <h1>Evaluate Your status! </h1>
            <div className={classes.stages}>
              {
                this.context.state.stage === 1 ? 
                <Stage1 />
                :
                <Stage2 />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
