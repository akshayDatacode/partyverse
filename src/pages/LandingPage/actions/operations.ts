import { AppDispatch } from "@/core/redux/store";
import { setValue } from "@/pages/LandingPage/reducer/countSlice";

export const createIncreaseCount = (value: number) => (dispatch: AppDispatch) => {
    return dispatch(setValue(value));
};

export const createDecreaseCount = (value: number) => (dispatch: AppDispatch) => {
    return dispatch(setValue(value));
};
