import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/common';
import { connect } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { increment, decrement, incrementByAmount, incrementBy, decrementBy, fetchCount } from '../store/counterReducer';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const appDispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      当前的counter: {count}
      <button onClick={() => appDispatch(increment())}>+</button>
      <button onClick={() => appDispatch(decrement())}>-</button>
      <div>
        <input type="number" ref={ref} />
        <button onClick={() => appDispatch(fetchCount(Number(ref.current?.value || 0)))}>确定</button>
      </div>
    </div>
  );
};

export default Counter;
