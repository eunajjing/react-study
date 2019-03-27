import React, { Component } from 'react';

class AsyncSplitMe extends Component {
    state = {
        SplitMe : null
    }

    loadSplitMe = () => {
        // 비동기적으로 코드를 불러온다. 함수는 Promise를 결과로 반환한다.
        import('./SplitMe').then(({default: SplitMe}) => {
            // import는 모듈의 전체 네임스페이스를 불러오므로, default를 직접 지정해야 한다.
            this.setState({
                SplitMe
            });
        });
    }

    render() {
        const {SplitMe} = this.state;
        return SplitMe ? <SplitMe/> : <button onClick={this.loadSplitMe}>로딩</button>
    }
}

export default AsyncSplitMe;