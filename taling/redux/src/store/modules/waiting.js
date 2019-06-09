import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "waiting/CHANGE_INPUT";
const CREATE = "waiting/CREATE";
const ENTER = "waiting/ENTER";
const LEAVE = "waiting/LEAVE";

// const changeInput = text => ({ type: CHANGE_INPUT, payload: text });
// const create = name => ({ type: CREATE, payload: name });
// const enter = id => ({ type: ENTER, payload: id });
// const leave = id => ({ type: LEAVE, payload: id });

// export const changeInput = createAction(CHANGE_INPUT);

let id = 3;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, name => ({ name, id: id++ }));
// 리듀서 안에서 아이디 증가를 할 수 없기 때문에 액션 함수 내에서 처리
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);
// 명시적으로 기재

const initialState = {
  input: "",
  list: [
    {
      id: 0,
      name: "손님0",
      entered: false
    },
    {
      id: 1,
      name: "손님1",
      entered: false
    },
    {
      id: 2,
      name: "손님2",
      entered: false
    }
  ]
};

// 스위치의 블록 스코프는 스위치 안 모두

export default handleActions(
  {
    // 케이스와 거의 유사함
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload
    }),
    [CREATE]: (state, action) => ({
      ...state,
      list: state.list.concat({
        ...action.payload,
        entered: false
      })
    }),
    [ENTER]: (state, action) => ({
      ...state,
      list: state.list.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            entered: !item.entered
          };
        }
      })
    }),
    [LEAVE]: (state, action) => ({
      ...state,
      list: state.list.filter(item => item.id !== action.payload)
    })
  },
  initialState
);
