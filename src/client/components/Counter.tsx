import { useState } from 'react';
import { AppDispatch, RootState, useAppDispatch, useAppState } from '../store';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/counterReducer';

// const mapStateToProps = (state: RootState) => ({
//   count: state.counter.value
// });

// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   increment,
//   decrement
//   // incrementByAmount: () => dispatch({ type: 'incrementByAmount' }, ownProps.amount)
// });

// type CounterProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
// const ConnectCounter = (props: CounterProps) => {
//   const [amount, setAmount] = useState(0);
//   return (
//     <div>
//       当前的counter: {props.count}
//       <button onClick={() => props.dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => props.dispatch({ type: 'decrement' })}>-</button>
//       <div>
//         <input type="number" onChange={(e) => setAmount(+e.target.value)} />
//         {/* <button onClick={() => props.incrementByAmount({ amount })}>确定</button> */}
//       </div>
//     </div>
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ConnectCounter);

const Counter = () => {
  const count = useAppState((state) => state.counter.value);
  const appDispatch = useAppDispatch();
  return (
    <div>
      当前的counter: {count}
      <button onClick={() => appDispatch(increment)}>+</button>
      <button onClick={() => appDispatch(decrement)}>-</button>
      <div>
        {/* <input type="number" onChange={(e) => setAmount(+e.target.value)} /> */}
        {/* <button onClick={() => props.incrementByAmount({ amount })}>确定</button> */}
      </div>
    </div>
  );
};

export default Counter;
