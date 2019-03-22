import {Map, List} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initaialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true
    }),
    Map({
        id: 1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    })
]);

export default handleActions({
    [INSERT]: (state, action) => {
        const {id, text, done} = action.payload;
        // 이 액션이 어떤 데이터를 처리하는지 알기 위해 기입
        return state.push(Map({
            id,
            text,
            done
        }));
        // 그냥 state.push(Map(action.payload)) 해도 된다.
    },
    [TOGGLE]: (state, action) => {
        const { payload: id} = action;
        // const id = action.payload와 같다. payload의 값을 쉽게 볼 수 있게 비구조화 할당 진행
        const index = state.findIndex(todo => todo.get('id')===id);
        return state.updateIn([index, 'done'], done => !done);
        // state.setIn([index, 'done'], !state.getIn([0, index]));
    },
    [REMOVE]: (state, action) => {
        const {payload: id} = action;
        const index = state.findIndex(todo => todo.get('id')===id);
        return state.delete(index);
    }
}, initaialState);