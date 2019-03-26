import {handleActions} from 'redux-actions';
import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

// const getPostPending = createAction(GET_POST_PENDING);
// const getPostSuccess = createAction(GET_POST_SUCCESS);
// const getPostFailure = createAction(GET_POST_FAILURE);

export const getPost = (postId) => ({
    type: GET_POST,
    payload: getPostAPI(postId)
    // dispatch(getPostPending());
    // return getPostAPI(postId).then((response) => {
    //     dispatch(getPostSuccess(response))
    //     // 요청이 성공했다면 서버 응답 내용을 payload로 설정해 성공 액션을 디스패치
    //     // then에 전달하는 함수에서 response에 접근할 수 있게 한다.
    //     return response;
    // }).catch(error => {
    //     dispatch(getPostFailure(error));
    //     // 에러 처리를 던지되 한 번 더 catch 되도록 설정
    //     throw(error);
    // })
});

const initialState = {
    pending : false,
    error : false,
    data : {
        title : '',
        body: ''
    }
}

export default handleActions({
    [GET_POST_PENDING] : (state, action) => {
        return {
            ...state,
            pending: true,
            error : false
        };
    },
    [GET_POST_SUCCESS] : (state, action) => {
        const {title, body} = action.payload.data;
        return {
            ...state,
            pending: false,
            error : false,
            data : {
                title,
                body
            }
        };
    },
    [GET_POST_FAILURE] : (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);