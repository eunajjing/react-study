const middleware = store => next => action => {
  console.log(action);
  console.log(store.getState());
  next(action);
  // 리덕스의 리듀서로 가더라도 밑으로 계속 실행되어 내려간다
  console.log(store.getState());
};

export default middleware;
