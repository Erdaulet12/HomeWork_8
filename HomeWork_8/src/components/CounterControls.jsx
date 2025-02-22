import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../store/CounterSlice";

const CounterControls = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Сброс</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default CounterControls;
