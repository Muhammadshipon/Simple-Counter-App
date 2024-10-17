import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/CounterAction";



const Counter = () => {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();
  console.log(count);
 
  const handleIncrement =()=>{
   dispatch(incrementCounter())
  }
  const handleReset =()=>{
   dispatch(resetCounter())
  }
  const handleDecrement =()=>{
   dispatch(decrementCounter())
  }
  return (
    <div>
      <h2 className="text-xl text-green-400">count App</h2>
      <h3 className="font-semibold my-8">Count :{count}</h3>
      <button onClick={()=>handleIncrement()} className="text-white rounded-lg p-3 bg-blue-700">Increment</button>
      <button onClick={()=>handleReset()} className="text-white rounded-lg p-3 mx-5 bg-red-600">Reset</button>
      <button onClick={()=>handleDecrement()} className="text-white rounded-lg p-3 bg-orange-500">Decrement</button>
    </div>
  );
};

export default Counter;