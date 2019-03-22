import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';
import getRandomColor from '../lib/getRandomColor';


// connect 메서드에 들어가는 파라미터 함수로,
// 옵션이며 현재 스토어의 상태를 받아 컴포넌트의 props로 사용할 객체 반환
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

// 액션 생성 메서드를 사용해 액션 생성 후
// 해당 액션을 디스패치하는 메서드를 만든 후 이를 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 컨테이너 컴포넌트
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 한다
const CounterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Counter);

export default CounterContainer;