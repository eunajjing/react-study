import { handleActions, createAction } from "redux-actions";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => dispatch => {
  setTimeout(dispatch(increment()), 1000);
};

export default handleActions(
  {
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
  },
  0
);
