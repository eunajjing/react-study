import {handleActions, createAction} from 'redux-actions';
import axios from 'axios';
import {pender} from 'redux-pender';
 
function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';
export const getPost = createAction(GET_POST, getPostAPI);
const initialState = {
    data : {
        title : '',
        body: ''
    }
}

export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {title, body} = action.payload.data;
            return {
                data : {
                    title,
                    body
                }
            }
        },
        onCancel: (state, action) => {
            return {
                data : {
                    title: '요청 취소',
                    body: '요청 취소'
                }
            }
        }
    })
}, initialState);

// const reducer = handleActions({
//     // 다른 일반 액션 관리
// }, initialState);

// export default applyPenders(reducer, [
//     {
//         type: GET_POST,
//         onSuccess: (state, action) => {
//             const {title, body} = action.payload.data;
//             return {
//                 data : {
//                     title,
//                     body
//                 }
//             }
//         },
//     }
// ]);