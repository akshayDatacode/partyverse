import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/core/redux/rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for using dispatch and selector with types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;