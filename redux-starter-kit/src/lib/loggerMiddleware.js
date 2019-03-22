const loggerMiddleware = store => next => action => {
    console.log('현재 상태', store.getState());
    console.log('액션', action);

    const result = next(action);
    // 다음 차례(다른 미들웨어, 리듀서)로 넘긴다

    console.log('액션 처리 후', store.getState());
    console.log('그래서 리턴 값이', result);
    // store.dispatch(ACTION_TYPE)
    console.log('\n');

    return result;
    // store.dispatch(ACTION_TYPE)
}

export default loggerMiddleware;