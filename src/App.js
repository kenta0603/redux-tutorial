import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <div className="input-container">
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(increment())}>＋</button>
        <button onClick={() => dispatch(decrement())}>ー</button>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</button>
      </div>
    </div>
  );
}

export default App;
