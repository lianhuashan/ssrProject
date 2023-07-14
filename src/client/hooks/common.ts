import type { RootState, AppDispatch } from '../store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
