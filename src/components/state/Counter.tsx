import { useReducer } from "react";

type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("Counter Rerendered");

  const handleIncrement = () => {
    console.log("Increment button re-render");
    dispatch({ type: "increment", payload: 2 });
  };

  const handleDecrement = () => {
    console.log("Decrement Button re-rendered");
    dispatch({ type: "decrement", payload: 2 });
  };
  const handleReset = () => dispatch({ type: "reset" });
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
