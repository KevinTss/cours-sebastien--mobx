import logo from "./logo.svg";
import "./App.css";
// import store from "./store";
import withStore from "./store/useStore";
// import { observer } from "mobx-react";

// const TimerView = observer(({ store }) => (
//   <span>Seconds passed: {store.timer}</span>
// ));

import Timer from "./Timer";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <TimerView store={store} /> */}
        <Timer />

        <button onClick={() => props.store.increaseTimer()}>click</button>
      </header>
    </div>
  );
}

export default withStore(App);
