import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';
// 액션타입의 이름을 js이름/액션타입으로 정해준다.

export const setInput = createAction(SET_INPUT);
// 액션 생성함수

const initialState = Map({
    value: ''
});
// 초기 값

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);
// 리듀서 정의