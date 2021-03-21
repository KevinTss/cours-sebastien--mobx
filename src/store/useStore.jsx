import { observer } from "mobx-react";
import store from "./index";

// const TimerView = observer(({ store }) => (
//   <span>Seconds passed: {store.timer}</span>
// ));

const withStore = (Component) =>
  observer(({ ...props }) => <Component {...props} store={store} />);

export default withStore;
