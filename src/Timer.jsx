import withStore from "./store/useStore";

const Timer = (props) => {
  console.log("timer", props);

  return <span>Seconds passed: {props.store.timer}</span>;
};

export default withStore(Timer);
